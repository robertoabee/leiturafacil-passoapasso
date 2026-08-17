// ============================================================
// CONTEÚDO EDITÁVEL DA PÁGINA — Bê a Bá da Leitura / Tio Beto Educa
// Altere textos, preços, links e imagens somente por aqui.
// ============================================================

export const CHECKOUT_URL = "#checkout-hotmart"; // TODO: colar a URL do checkout da Hotmart

export const PRICE = {
  current: "R$ 37,00",
  short: "R$37",
  note: "à vista",
};

export const BRAND = {
  name: "Tio Beto Educa",
  product: "Bê a Bá da Leitura",
  year: 2026,
};

export const MATERIALS = [
  {
    number: "Material 01",
    title: "Nome do material 01",
    description: "Descrição curta do material 01.",
    pages: "00 páginas de atividades",
    image: null as string | null, // TODO: mockup da capa
  },
  {
    number: "Material 02",
    title: "Nome do material 02",
    description: "Descrição curta do material 02.",
    pages: "00 páginas de atividades",
    image: null as string | null,
  },
  {
    number: "Material 03",
    title: "Nome do material 03",
    description: "Descrição curta do material 03.",
    pages: "00 páginas de atividades",
    image: null as string | null,
  },
];

export const BONUSES = [
  {
    tag: "Bônus 01",
    title: "Diagnóstico de Leitura",
    description:
      "Um material complementar para auxiliar na identificação das principais dificuldades de leitura da criança.",
  },
  {
    tag: "Bônus 02",
    title: "Fichas de Sílabas",
    description:
      "Material prático para reforçar reconhecimento, formação e leitura de sílabas.",
  },
];

export const FAQ = [
  {
    q: "O material é físico?",
    a: "Não. O Bê a Bá da Leitura é um produto digital em PDF.",
  },
  {
    q: "Como receberei os arquivos?",
    a: "Após a confirmação da compra, o acesso será enviado de acordo com o sistema de entrega da plataforma.",
  },
  {
    q: "Posso imprimir?",
    a: "Sim. Os materiais foram desenvolvidos para impressão e aplicação.",
  },
  {
    q: "Para qual idade é indicado?",
    a: "A indicação depende principalmente do estágio de alfabetização da criança, e não apenas da idade.",
  },
  {
    q: "Posso utilizar em reforço escolar?",
    a: "Sim. O material pode ser utilizado em sala de aula, reforço escolar e acompanhamento individual.",
  },
  {
    q: "Preciso aplicar todas as atividades?",
    a: "Não. O professor pode selecionar os materiais de acordo com as necessidades de cada aluno.",
  },
];

export const FOOTER_LINKS = [
  { label: "Termos de Uso", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Contato", href: "#" },
  { label: "Suporte", href: "#" },
];
