-- CreateEnum
CREATE TYPE "public"."TagColor" AS ENUM ('RED', 'GREEN', 'BLUE', 'GRAY');

-- AlterTable
ALTER TABLE "public"."PortfolioTag" ADD COLUMN     "color" "public"."TagColor";
