/*
  Warnings:

  - Added the required column `image` to the `dishes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dishes" ADD COLUMN     "image" TEXT NOT NULL;
