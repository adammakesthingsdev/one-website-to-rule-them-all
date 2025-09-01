import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
    return components;
}
