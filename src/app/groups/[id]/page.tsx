import { ConfettiTrigger } from "@/components/confetti-trigger";
import { Check } from "lucide-react";
import ListParticipants from "@/components/list-participants";
import ClipboardButton from "@/components/clipboard-button";
import WhatsappButton from "@/components/whatsapp-button";
import prisma from "@/lib/prisma";

export default async function ShareLink({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ created: string }>;
}) {
  const groupId = (await params).id as string;
  const created = (await searchParams).created === "true";
  const shareUrl = `${process.env.NEXT_PUBLIC_URL}/groups/${groupId}`;

  const groupName = await prisma.group.findUnique({
    where: { id: groupId },
    select: { name: true },
  });

  return (
    <div>
      {created && <ConfettiTrigger />}
      <main className="container mx-auto">
        <div className="bg-white">
          <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
            <div className="mx-auto flex flex-col items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:gap-y-24">
              <div className="w-full">
                {created ? (
                  <div className="mx-auto max-w-2xl">
                    <div className="flex flex-col gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Check />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Grupo criado!
                      </h2>
                      <p className="text-gray-600">
                        Compartilhe o link do grupo com os outros participantes
                        para que possam entrar no grupo. Se você for participar,
                        não se esqueça de clicar no seu link para descobrir o
                        seu amigo secreto!
                      </p>
                    </div>
                    <div className="space-y-2 pt-8">
                      <div>
                        <div className="pb-8">
                          <h3 className="pb-4 text-2xl font-bold">
                            1. Convidar participantes
                          </h3>
                          <p className="pb-4 text-gray-600">
                            Os participantes podem entrar no grupo através do
                            link abaixo.
                          </p>
                          <ClipboardButton shareUrl={shareUrl} />
                        </div>
                        <div>
                          <h3 className="pb-4 text-2xl font-bold">
                            2. Veja quem você tirou
                          </h3>
                          <p className="pb-4 text-gray-600">
                            Se você também é um participante, clique no seu nome
                            para registrar uma senha e ver quem você tirou!
                          </p>
                          <ListParticipants groupId={groupId} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto max-w-2xl">
                    <div>
                      <p className="text-base font-semibold leading-7 text-blue-600">
                        Informações do grupo
                      </p>
                      <h2 className="mt-2 text-3xl font-bold text-gray-900">
                        {groupName?.name}
                      </h2>
                    </div>
                    <div className="pt-8">
                        <p className="text-base font-semibold leading-7 text-blue-600">Link do grupo</p>
                        <ClipboardButton shareUrl={shareUrl} />
                    </div>
                    <div className="pt-8">
                        <p className="text-base font-semibold leading-7 text-blue-600">Participantes</p>
                        <p className="my-2 text-gray-600">Clique no seu nome para registrar sua senha e ver quem você tirou.</p>
                        <ListParticipants groupId={groupId} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <WhatsappButton shareUrl={shareUrl} />
      </main>
    </div>
  );
}
