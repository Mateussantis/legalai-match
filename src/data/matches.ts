import Homem8 from "../assets/homem_8.png";
import Homem22 from "../assets/homem_22.png";
import Homem41 from "../assets/homem_41.png";
import Homem42 from "../assets/homem_42.png";
import Homem50 from "../assets/homem_50.png";
import Mulher53 from "../assets/mulher_53.png";
import Mulher55 from "../assets/mulher_55.png";
import Mulher72 from "../assets/mulher_72.png";
import Mulher94 from "../assets/mulher_94.png";
import Mulher100 from "../assets/mulher_100.png";
import type { Match } from "../types";

export const mockMatches: Match[] = [
  // Tecnologia
  {
    id: 1,
    name: "Ana Souza",
    description: "Dev fullstack apaixonada por soluções inovadoras.",
    interest: "Tecnologia",
    experience: "1-2",
    affinity: 0,
    avatar: Mulher94
  },
  {
    id: 2,
    name: "Bruno Ferreira",
    description: "Especialista em DevOps e arquitetura em nuvem.",
    interest: "Tecnologia",
    experience: "3-5",
    affinity: 0,
    avatar: Homem42
  },

  // Marketing
  {
    id: 3,
    name: "Carla Mendes",
    description: "Coordenadora de campanhas digitais e mídias sociais.",
    interest: "Marketing",
    experience: "3-5",
    affinity: 0,
    avatar: Mulher53
  },
  {
    id: 4,
    name: "Daniel Rocha",
    description: "Analista focado em SEO e estratégias de conteúdo.",
    interest: "Marketing",
    experience: "1-2",
    affinity: 0,
    avatar: Homem8
  },

  // Financeiro
  {
    id: 5,
    name: "Eduarda Lima",
    description: "Especialista em planejamento financeiro empresarial.",
    interest: "Financeiro",
    experience: "6-10",
    affinity: 0,
    avatar: Mulher72
  },
  {
    id: 6,
    name: "Felipe Santos",
    description: "Contador com foco em controladoria e auditoria.",
    interest: "Financeiro",
    experience: "3-5",
    affinity: 0,
    avatar: Homem22
  },

  // RH
  {
    id: 7,
    name: "Gabriela Monteiro",
    description: "Psicóloga organizacional com foco em clima e cultura.",
    interest: "RH",
    experience: "1-2",
    affinity: 0,
    avatar: Mulher100
  },
  {
    id: 8,
    name: "Henrique Costa",
    description: "Business Partner com experiência em treinamento.",
    interest: "RH",
    experience: "3-5",
    affinity: 0,
    avatar: Homem50
  },

  // Jurídico
  {
    id: 9,
    name: "Isabela Ribeiro",
    description: "Advogada com atuação em LGPD e compliance.",
    interest: "Jurídico",
    experience: "3-5",
    affinity: 0,
    avatar: Mulher55
  },
  {
    id: 10,
    name: "João Almeida",
    description: "Especialista em direito trabalhista e contratos.",
    interest: "Jurídico",
    experience: "mais-de-10",
    affinity: 0,
    avatar: Homem41
  },
];
