export function slugifyTag(input: string): string {
  return encodeURIComponent(
    input
      .trim()
      .toLowerCase()
      .normalize('NFD') // Normalize accented characters
      .replace(/\p{Diacritic}/gu, '') // Remove diacritical marks
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '') // Remove invalid characters
  );
}
