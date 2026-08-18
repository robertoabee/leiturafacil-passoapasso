// ============================================================
// CONTEÚDO EDITÁVEL DA PÁGINA — Bê a Bá da Leitura / Tio Beto Educa
// Altere textos, preços, links e imagens somente por aqui.
// ============================================================

export const CHECKOUT_URL = "#checkout-hotmart"; // TODO: colar a URL do checkout da Hotmart

export const PRICE = {
  current: "R$ 37,00",
  short: "R$37",
  note: "Pagamento único",
  // Valor de referência (ancoragem). Só exiba publicamente se houver
  // justificativa comercial real para esse valor.
  reference: "R$ 79,90",
  showReference: true,
  anchorNote:
    "Você recebe todo o material + bônus por menos da metade do valor de referência.",
};

// Microgatilhos usados antes dos CTAs
export const MICRO = {
  hero: "Sua próxima atividade de leitura já pode estar pronta.",
  materials: "Pare de perder horas procurando atividades soltas.",
  offer: "Tenha uma sequência pronta para consultar sempre que precisar.",
  final: "Baixe hoje e já deixe suas próximas atividades organizadas.",
};

export const BRAND = {
  name: "Tio Beto Educa",
  product: "Bê a Bá da Leitura",
  year: 2026,
};

import material1 from "@/assets/material-1.png.asset.json";
import material2 from "@/assets/material-2.png.asset.json";
import material3 from "@/assets/material-3.png.asset.json";

export const MATERIALS = [
  {
    number: "Material 01",
    title: "Práticas para início da alfabetização",
    description:
      "Atividades iniciais para dar os primeiros passos na leitura com segurança.",
    pages: "00 páginas de atividades",
    image: material1.url as string | null,
  },
  {
    number: "Material 02",
    title: "Leitura de palavras simples e complexas",
    description:
      "Sequência progressiva para avançar das palavras simples às complexas.",
    pages: "00 páginas de atividades",
    image: material2.url as string | null,
  },
  {
    number: "Material 03",
    title: "Atividades para melhorar a leitura",
    description:
      "Atividades para fortalecer a fluência e a autonomia na leitura.",
    pages: "00 páginas de atividades",
    image: material3.url as string | null,
  },
];


import bonusImg from "@/assets/bonus-fichas.png.asset.json";

export const BONUS = {
  tag: "Bônus especial",
  title: "Fichas de Leitura das Letras",
  description:
    "Um material complementar para reforçar o reconhecimento das letras e estimular a leitura de forma simples e prática.",
  seal: "INCLUSO SEM CUSTO ADICIONAL",
  image: bonusImg.url,
};

// EXEMPLOS DE LAYOUT — substituir por depoimentos reais quando existirem.
// Preparado para receber prints (WhatsApp, Instagram): preencha `image`.
export const TESTIMONIAL_EXAMPLES: {
  text: string;
  role: string;
  image?: string;
}[] = [
  {
    text: "Finalmente consegui organizar melhor as atividades de leitura sem precisar ficar procurando materiais diferentes todos os dias.",
    role: "Professora do 1º ano",
  },
  {
    text: "A sequência das atividades facilitou muito meu trabalho com os alunos que ainda estavam inseguros na leitura.",
    role: "Professora alfabetizadora",
  },
  {
    text: "Gostei principalmente porque consigo escolher as atividades de acordo com a dificuldade de cada criança.",
    role: "Professora de reforço escolar",
  },
  {
    text: "Material simples de aplicar, organizado e muito prático para utilizar no reforço escolar.",
    role: "Pedagoga",
  },
];

export const OFFER_INCLUDES = [
  "Material 01 do Bê a Bá da Leitura",
  "Material 02 do Bê a Bá da Leitura",
  "Material 03 do Bê a Bá da Leitura",
  "Trilha progressiva de atividades",
  "Arquivos digitais em PDF",
  "Acesso imediato",
  "Bônus: Fichas de Leitura das Letras",
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
