"use server"

import prisma from "@/lib/prisma" // Seu cliente Prisma ou Supabase
import { redirect } from "next/navigation"

export async function createGroupAndDraw(formData: { groupName: string, names: string[] }) {

  if (!formData.names || formData.names.length < 3) {
    throw new Error(
      "Adicione pelo menos 3 participantes para realizar o sorteio"
    );
  }

  // 1. Algoritmo de Embaralhamento (Fisher-Yates)
  const participants = [...formData.names];
  const shuffled = [...participants];
  let isValid = false;

  while (!isValid) {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Garante que ninguém tirou a si mesmo
    isValid = participants.every((name, i) => name !== shuffled[i]);
  }

  // 2. Salvar no Banco de Dados em uma Transação
  const newGroup = await prisma.$transaction(async (tx) => {
    const group = await tx.group.create({
      data: { name: formData.groupName }
    });

    // Criar participantes primeiro para gerar IDs
    const createdParticipants = await Promise.all(
      participants.map(name => 
        tx.participant.create({ data: { name, groupId: group.id } })
      )
    );

    // Mapear quem tirou quem e atualizar
    for (let i = 0; i < createdParticipants.length; i++) {
      const giver = createdParticipants[i];
      const receiverName = shuffled[i];
      const receiver = createdParticipants.find(p => p.name === receiverName);

      await tx.participant.update({
        where: { id: giver.id },
        data: { secretSantaId: receiver?.id }
      });
    }

    return group;
  });

  // 3. Redirecionar para a página de sucesso
  redirect(`/groups/${newGroup.id}?created=true`);
}