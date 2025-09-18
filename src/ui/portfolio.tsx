/**
 * UI elements for portfolio items
 */

import { PortfolioDataItem, PortfolioDataTag } from "@/content/portfolio-data";

function PortfolioTag({ tag }: { tag: PortfolioDataTag }) {
    return (
        <span className="">
            <span>{tag.text}</span>
        </span>
    );
}

export function PortfolioItem({ item }: { item: PortfolioDataItem }) {
    return (
        <div className="w-full p-2 bg-white my-2 rounded-md">
            <h3 className="text-xl">{item.title}</h3>
            <span className="italic text-lg">{item.time}</span>
            {item.link && (
                <span className="text-lg">
                    {" | "}
                    <a className="text-sky-300" href={item.link.url}>
                        {item.link.text}
                    </a>
                </span>
            )}
            <p>{item.shortDesc}</p>
        </div>
    );
}
