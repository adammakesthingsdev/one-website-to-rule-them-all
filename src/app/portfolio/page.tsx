/**
 * Portfolio listing page
 */
import {
    portfolioData,
    type PortfolioDataItem,
} from "@/content/portfolio-data";
import { PortfolioItem } from "@/ui/portfolio";

export default function PortfolioPage() {
    return (
        <div className="w-full flex flex-col items-center grow">
            <div className="flex flex-col lg:w-1/2 p-3 bg-purple-50 grow items-center">
                <h1 className="text-2xl">Project portfolio</h1>
                {portfolioData.map((item) => (
                    <PortfolioItem item={item} key={item.title} />
                ))}
            </div>
        </div>
    );
}
