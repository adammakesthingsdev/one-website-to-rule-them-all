-- CreateEnum
CREATE TYPE "public"."PortfolioType" AS ENUM ('PROJECT_PERSONAL', 'PROJECT_WORK', 'PROJECT_SCHOOL', 'EMPLOYMENT');

-- CreateTable
CREATE TABLE "public"."PortfolioItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "tagline" TEXT,
    "description" TEXT,
    "photoUrl" TEXT,
    "start" TEXT,
    "end" TEXT,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);
