import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';


export const projects = [
	{
		title: "Orquestador de Automatización de Workflows (n8n)",
		techStack: "n8n • Node.js • TypeScript • PostgreSQL",
		description: "Workflows orientados a eventos para sincronización de datos, notificaciones y automatización de back‑office. Nodos personalizados, gestión de secretos, reintentos y métricas.",
		ctaText: "Ver Repo →",
		ctaLink: "#",
		icon: N8nIcon
	},
	{
		title: "SaaS API Starter (Auth, Billing, RBAC)",
		techStack: "Node.js • TypeScript • PostgreSQL • Supabase • Stripe",
		description: "API REST/GraphQL lista para producción con autenticación JWT, acceso basado en roles, suscripciones Stripe y endpoints con rate limit.",
		ctaText: "Obtener Código < / >",
		ctaLink: "#",
		icon: SupabaseIcon
	},
	{
		title: "Servicio de Chat en Tiempo Real",
		techStack: "Phoenix • WebSockets • Redis • Docker",
		description: "Chat de baja latencia con canales, presencia y manejo de backpressure. Incluye pruebas de carga y notas de escalado horizontal.",
		ctaText: "Demo en Vivo →",
		ctaLink: "#",
		icon: PhoenixIcon
	},
	{
		title: "Pipeline de Analítica de Producto",
		techStack: "Node.js • PostHog • PostgreSQL • ClickHouse",
		description: "Ingesta de eventos, batching y replay; propiedades de usuario y cohorts; dashboards para funnels, retención y adopción de funcionalidades.",
		ctaText: "Leer Caso de Estudio →",
		ctaLink: "#",
		icon: PosthogIcon
	},
	{
		title: "Ingesta de Datos & ETL",
		techStack: "Python • Airflow • PostgreSQL • S3",
		description: "ETL programado con migraciones de esquema, chequeos de calidad de datos y tablas particionadas para analítica.",
		ctaText: "Ver Repo →",
		ctaLink: "#",
		icon: PythonIcon
	},
	{
		title: "Design System",
		techStack: "React • TypeScript • Tailwind CSS • Storybook",
		description: "Kit de UI accesible con tokens, theming y testing. Publicado como paquete versionado con changelogs y docs.",
		ctaText: "Docs →",
		ctaLink: "#",
		icon: TailwindIcon
	},
];