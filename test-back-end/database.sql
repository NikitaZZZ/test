CREATE TABLE "dishes" (
  "id" SERIAL,
  "title" VARCHAR(255) NOT NULL,
  "category" VARCHAR(255) NOT NULL,
  "compound" VARCHAR(255) NOT NULL,
  "image" VARCHAR(MAX) NOT NULL,
  PRIMARY KEY ("id"),
);