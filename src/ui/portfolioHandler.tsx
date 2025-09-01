/**
 * Server-side MDX renderer for portfolio items
 */

import { serialize } from "next-mdx-remote-client/serialize";
import { PortfolioItem, PortfolioItemFull } from "./portfolio";

export async function PortfolioItemHandler({
    item,
}: {
    item: PortfolioItemFull;
}) {
    const source = item.description;
    if (!source) {
        return <PortfolioItem item={item} />;
    }
    const mdxSource = await serialize({ source: source });
    return <PortfolioItem item={item} mdxSource={mdxSource} />;
}
