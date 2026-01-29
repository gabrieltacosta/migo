import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategorySelect() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Selecione uma categoria" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Amigo Secreto</SelectItem>
          <SelectItem value="banana">Amigo Chocolate</SelectItem>
          <SelectItem value="blueberry">Amigo Chinelo</SelectItem>
          <SelectItem value="grapes">Amigo da Onça</SelectItem>
          <SelectItem value="pineapple">Amigo Vinho</SelectItem>
          <SelectItem value="pineapple">Amigo Livro</SelectItem>
          <SelectItem value="pineapple">Amigo Secreto de Natal</SelectItem>
          <SelectItem value="pineapple">Amigo Páscoa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
