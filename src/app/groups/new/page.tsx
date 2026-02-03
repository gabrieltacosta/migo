"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { createGroupAndDraw } from "@/app/_actions/draw";
import { GroupForm } from "@/components/group-form";

export default function NewGroupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    groupName: "",
    description: "",
    participants: [] as string[],
  });
  const [currentName, setCurrentName] = useState("");

  // Lógica para adicionar participante
  const addParticipant = () => {
    if (currentName.trim()) {
      setFormData({
        ...formData,
        participants: [...formData.participants, currentName.trim()],
      });
      setCurrentName("");
    }
  };

  const onClick = () => {
    createGroupAndDraw({
      groupName: formData.groupName,
      names: formData.participants,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Indicador de Etapas */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 w-full mx-1 rounded ${step >= i ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && "Informações do Grupo"}
            {step === 2 && "Adicionar Participantes"}
            {step === 3 && "Revisão Final"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* ETAPA 1: INFO */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <GroupForm />
                <Label>Nome do Grupo</Label>
                <Input
                  placeholder="Ex: Família Silva"
                  value={formData.groupName}
                  onChange={(e) =>
                    setFormData({ ...formData, groupName: e.target.value })
                  }
                  onKeyDown={(e) => e.key === "Enter" && setStep(2)}
                />
              </div>
              <Button onClick={() => setStep(2)} disabled={!formData.groupName}>
                Próximo
              </Button>
            </div>
          )}

          {/* ETAPA 2: PARTICIPANTES */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Nome do participante"
                  value={currentName}
                  onChange={(e) => setCurrentName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addParticipant()}
                />
                <Button onClick={addParticipant}>Adicionar</Button>
              </div>

              <ul className="space-y-2 border rounded p-4 min-h-25">
                {formData.participants.map((p, idx) => (
                  <li
                    key={idx}
                    className="bg-secondary p-2 rounded flex justify-between items-center"
                  >
                    {p}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        const newP = [...formData.participants];
                        newP.splice(idx, 1);
                        setFormData({ ...formData, participants: newP });
                      }}
                    >
                      x
                    </Button>
                  </li>
                ))}
                {formData.participants.length === 0 && (
                  <p className="text-muted-foreground">
                    Nenhum participante adicionado.
                  </p>
                )}
              </ul>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Voltar
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={formData.participants.length < 3}
                >
                  Próximo
                </Button>
              </div>
            </div>
          )}

          {/* ETAPA 3: REVISÃO */}
          {step === 3 && (
            <div className="space-y-4">
              <p>
                <strong>Grupo:</strong> {formData.groupName}
              </p>
              <p>
                <strong>Total:</strong> {formData.participants.length}{" "}
                participantes
              </p>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Voltar
                </Button>
                <Button onClick={onClick}>Criar e Sortear</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
