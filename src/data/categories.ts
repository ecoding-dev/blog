export type CategoryMeta = {
  slug: string;
  title: string;
  description: string;
};

function toSlug(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

function toTitleFromSlug(slug: string): string {
  return slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
}

// Personaliza el SEO de las categorías aquí
const categoryMetaBySlug: Record<string, Partial<CategoryMeta>> = {
  'growth': {
    title: 'Growth',
    description: 'Frameworks y tácticas para el crecimiento sostenible de productos.',
  },
  'engineering': {
    title: 'Engineering',
    description: 'Notas sobre cómo construir productos web confiables y rápidos.',
  },
};

export function getCategoryMeta(slugOrName: string): CategoryMeta {
  const slug = toSlug(slugOrName);
  const custom = categoryMetaBySlug[slug] ?? {};
  const fallbackTitle = toTitleFromSlug(slug);
  return {
    slug,
    title: custom.title ?? fallbackTitle,
    description: custom.description ?? `Artículos y notas de ${fallbackTitle}.`,
  };
}

export function slugifyCategory(name: string): string { return toSlug(name); }
