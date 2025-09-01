-- AlterTable
ALTER TABLE "public"."PortfolioItem" ADD COLUMN     "portfolioTagId" TEXT,
ADD COLUMN     "type" "public"."PortfolioType";

-- CreateTable
CREATE TABLE "public"."PortfolioTag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "iconUrl" TEXT,

    CONSTRAINT "PortfolioTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."PortfolioItem" ADD CONSTRAINT "PortfolioItem_portfolioTagId_fkey" FOREIGN KEY ("portfolioTagId") REFERENCES "public"."PortfolioTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
