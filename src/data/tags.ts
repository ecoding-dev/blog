export type TagMeta = {
  slug: string;
  title: string;
  description: string;
};

function toTitleCaseFromSlug(slug: string | undefined): string {
  if (!slug || typeof slug !== 'string') {
    console.error('Invalid slug provided to toTitleCaseFromSlug:', slug);
    return 'Unknown';
  }
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}

// Personaliza etiquetas específicas aquí si es necesario
const tagMetaBySlug: Record<string, Partial<TagMeta>> = {
  astro: {
    title: 'Astro',
    description: 'Posts sobre cómo construir sitios rápidos y enfocados en contenido con Astro.',
  },
};

export function getTagMeta(slug: string): TagMeta {
  const baseTitle = toTitleCaseFromSlug(slug);
  const custom = tagMetaBySlug[slug] ?? {};
  return {
    slug,
    title: custom.title ?? `#${baseTitle}`,
    description: custom.description ?? `Artículos etiquetados como ${baseTitle}.`,
  } as TagMeta;
}
