import { Category } from "@/generated/prisma/enums";

export const CATEGORY_LABELS = {
  [Category.AMIGO_SECRETO]: "🤫 Amigo Secreto",
  [Category.AMIGO_CHOCOLATE]: "🍫 Amigo Chocolate",
  [Category.AMIGO_CHINELO]: "🩴 Amigo Chinelo",
  [Category.AMIGO_ONCA]: "🐆 Amigo da Onça",
  [Category.AMIGO_VINHO]: "🍷 Amigo Vinho",
  [Category.AMIGO_LIVRO]: "📖 Amigo Livro",
  [Category.AMIGO_NATAL]: "🎅 Amigo Secreto de Natal",
  [Category.AMIGO_PASCOA]: "🐰 Amigo Páscoa",
};

export const CATEGORY_OPTIONS = [
  {
    value: Category.AMIGO_SECRETO,
    label: CATEGORY_LABELS[Category.AMIGO_SECRETO],
  },
  {
    value: Category.AMIGO_CHOCOLATE,
    label: CATEGORY_LABELS[Category.AMIGO_CHOCOLATE],
  },
  {
    value: Category.AMIGO_CHINELO,
    label: CATEGORY_LABELS[Category.AMIGO_CHINELO],
  },
  {
    value: Category.AMIGO_ONCA,
    label: CATEGORY_LABELS[Category.AMIGO_ONCA],
  },
  {
    value: Category.AMIGO_VINHO,
    label: CATEGORY_LABELS[Category.AMIGO_VINHO],
  },
  {
    value: Category.AMIGO_LIVRO,
    label: CATEGORY_LABELS[Category.AMIGO_LIVRO],
  },
  {
    value: Category.AMIGO_NATAL,
    label: CATEGORY_LABELS[Category.AMIGO_NATAL],
  },
  {
    value: Category.AMIGO_PASCOA,
    label: CATEGORY_LABELS[Category.AMIGO_PASCOA],
  },
];
