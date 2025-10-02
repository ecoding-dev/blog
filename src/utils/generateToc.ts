// Heavy inspiration from Starlight
import type { MarkdownHeading } from "astro";

export interface TocItem extends MarkdownHeading {
    children: TocItem[];
}

interface TocOpts {
    maxHeadingLevel?: number;
    minHeadingLevel?: number;
}

function injectChild(items: TocItem[], item: TocItem): void {
    const last = items.at(-1);
    if (!last || last.depth >= item.depth) {
        items.push(item);
    } else {
        injectChild(last.children, item);
    }
}

export function generateToc(
    headings: ReadonlyArray<MarkdownHeading>,
    { maxHeadingLevel = 4, minHeadingLevel = 2 }: TocOpts = {} // por defecto h2–h4
) {
    const bodyHeadings = headings.filter(
        ({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel
    );
    const toc: TocItem[] = [];
    for (const h of bodyHeadings) injectChild(toc, { ...h, children: [] });
    return toc;
}
