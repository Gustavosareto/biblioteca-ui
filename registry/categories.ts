export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  { slug: "animacoes", name: "Animações", description: "Animações gerais e clássicas." },
  { slug: "componentes", name: "Componentes", description: "Componentes prontos para usar." },
  { slug: "efeitos-de-texto", name: "Efeitos de Texto", description: "Efeitos visuais para seu texto." },
  { slug: "transicoes", name: "Transições", description: "Transições suaves entre elementos." },
  { slug: "microinteracoes", name: "Microinterações", description: "Pequenas interações que fazem a diferença." },
  { slug: "carregamentos", name: "Carregamentos", description: "Spinners, loaders e indicadores." },
  { slug: "icones-animados", name: "Ícones Animados", description: "Ícones com animações incríveis." },
  { slug: "notificacoes", name: "Notificações", description: "Alertas e notificações com animações." },
  { slug: "modais-overlays", name: "Modais e Overlays", description: "Modais, overlays e painéis." },
  { slug: "menus-navegacao", name: "Menus e Navegação", description: "Menus e navegação animada." },
  { slug: "avancado", name: "Avançado", description: "Efeitos avançados e experimentais." },
];
