/**
 * Portfolio page
 */
import { PortfolioItem } from "@/ui/portfolio";
import { PortfolioItemHandler } from "@/ui/portfolioHandler";
import { type PortfolioTag, PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function PortfolioPage() {
    const items = await prisma.portfolioItem.findMany({
        include: { tag: true },
        orderBy: { date: "desc" },
    });
    return (
        <div className="lg:mx-80">
            {items.map((item) => (
                <PortfolioItemHandler item={item} key={item.id} />
            ))}
        </div>
    );
}
