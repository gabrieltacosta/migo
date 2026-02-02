/*
  Warnings:

  - Added the required column `category` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('AMIGO_SECRETO', 'AMIGO_CHOCOLATE', 'AMIGO_CHINELO', 'AMIGO_ONCA', 'AMIGO_VINHO', 'AMIGO_LIVRO', 'AMIGO_NATAL', 'AMIGO_PASCOA');

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "category" "Category" NOT NULL;
