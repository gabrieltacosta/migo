"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea"
import { Gift } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  category: z.string().min(1, "Categoria obrigatória"),
  groupName: z.string().min(1, "Nome do grupo obrigatório"),
  description: z.string().optional()
})

type FormSchema = z.infer<typeof formSchema>


export function GroupForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "amigo-secreto",
      groupName: "",
      description: ""
    }
  })

  const onSubmit = (data: FormSchema) => {
    console.log(data)
  }


  return (
    <Card className="w-full border-none shadow-none">
      <CardContent>
        <form id="form-group" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                  <FieldContent>
                    <FieldLabel htmlFor="form-group-category">Categoria</FieldLabel>
                  </FieldContent>
                  <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="form-group-category" aria-invalid={fieldState.invalid} className="w-full">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categorias</SelectLabel>
                        <SelectItem value="amigo-secreto">🤫 Amigo Secreto</SelectItem>
                        <SelectItem value="amigo-chocolate">🍫 Amigo Chocolate</SelectItem>
                        <SelectItem value="amigo-chinelo">🩴 Amigo Chinelo</SelectItem>
                        <SelectItem value="amigo-onca">🐆 Amigo da Onça</SelectItem>
                        <SelectItem value="amigo-vinho">🍷 Amigo Vinho</SelectItem>
                        <SelectItem value="amigo-livro">📖 Amigo Livro</SelectItem>
                        <SelectItem value="amigo-natal">🎅 Amigo Secreto de Natal</SelectItem>
                        <SelectItem value="amigo-pascoa">🐰 Amigo Páscoa</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>)}
            />
            <Controller
              name="groupName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-group-groupName">Nome do Grupo</FieldLabel>
                  <Input
                    {...field}
                    id="form-group-groupName"
                    placeholder="Amigo Secreto da Família"
                  />
                  {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-group-description">Descrição</FieldLabel>
                  <Textarea
                    {...field}
                    id="form-group-description"
                    aria-invalid={fieldState.invalid}
                    placeholder="Uma breve descrição sobre o amigo secreto. Adicione informações que você acha relevante."
                    rows={10}
                  />
                  {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
                </Field>

              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation={"vertical"}>
          <Button
            type="submit"
            className="w-full"
            size="lg"
            form="form-group"
          >
            <Gift className="mr-2 h-4 w-4" />
            Criar Amigo Secreto
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
