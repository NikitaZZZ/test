-- CreateTable
CREATE TABLE "dishes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "compound" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "dishes_pkey" PRIMARY KEY ("id")
);
