// Construye una lista de logotipos SVG disponibles desde src/assets/logos
// Usando import.meta.glob de Vite para mantener las importaciones limpias y centralizadas

const modules = import.meta.glob('../assets/logos/*.svg', {
  eager: true,
  // Estilo Vite v5: retorna URLs como string
  query: '?url',
  import: 'default',
});

type LogoItem = { name: string; logo: string };

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  const withoutExt = base.replace(/\.[^.]+$/, '');
  // elimina sufijo "-logo" o "logo" (no sensible a mayúsculas)
  const withoutLogo = withoutExt.replace(/-?logo$/i, '');
  // normaliza separadores a espacios
  const normalized = withoutLogo.replace(/[_-]+/g, ' ');
  // inserta espacio entre palabras camelCase: GoogleAds -> Google Ads
  const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  // Capitaliza cada palabra
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

export const logos: LogoItem[] = Object.entries(modules)
  .map(([path, url]) => ({ name: toNiceName(path), logo: url as string }))
  // Mantiene solo un subconjunto estable primero (puedes quitar slice para incluir todos)
  .sort((a, b) => a.name.localeCompare(b.name));

export type { LogoItem };
