# legalai-match
Processo Seletivo para a empresa LegalAI

## 🎯 Sobre ##

Sistema de busca por match, determina sua afinidade com outros colegas, baseado em fatores como areas de interesse e tempo de experiencia!

## 🌐 Hospedado na Vercel ##

[![Deploy na Vercel](https://img.shields.io/badge/VERCEL-000?style=for-the-badge&logo=vercel&logoColor=white)](https://legalai-match.vercel.app/)

## ✨ Funcionalidades ##

✔️ Buscar por afinidade;\

## 🚀 Tecnologias

Tecnologias que eu usei para desenvolver essa aplicacao web

- [React Js](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailWindCss](https://tailwindcss.com/)
- [Shadcn Ui](https://ui.shadcn.com/)
- [Vite](https://vite.dev/)

## 🧠 Principais Decisões

1. **Tecnologias Utilizadas:**
   - **React Js:** Utilizado como framework principal para construção da interface do usuário.
   - **TypeScript:** Escolhido para garantir maior robustez e segurança no desenvolvimento.
   - **TailWindCss:** Framework CSS utilizado para estilização rápida e eficiente.
   - **Shadcn Ui:** Biblioteca de componentes utilizada para aprimorar a interface do usuário.
   - **Vite:** Bundler utilizado para compilação rápida e eficiente do projeto.

2. **Hospedagem na Vercel:**
   - O projeto está hospedado na Vercel para garantir alta disponibilidade e performance.

3. **Funcionalidades Implementadas:**
   - Busca por afinidade baseada em áreas de interesse e tempo de experiência.

4. **Metodologia de Desenvolvimento:**
   - Utilização de metodologia ágil para gerenciamento de tarefas e incrementos contínuos.

5. **Design Simples e Intuitivo:**
   - Interface amigável com foco na experiência do usuário.

## 📊 Cálculo da Afinidade

A afinidade entre o usuário e os candidatos é calculada com base em dois critérios:

### 1. Área de Interesse
- Se a área de interesse do usuário for igual à do candidato, o sistema adiciona **70 pontos** à afinidade.
- Caso contrário, **0 pontos** são atribuídos para esse critério.

### 2. Tempo de Experiência
- Cada faixa de experiência é convertida em um valor numérico:
  - `menos-de-1` → 0.5
  - `1-2` → 1.5
  - `3-5` → 4
  - `6-10` → 8
  - `mais-de-10` → 12

- A diferença entre o tempo de experiência do usuário e do candidato é calculada, e a pontuação para esse critério é:
  

Se o valor for menor que 0, considera-se **0**.

### Exemplo Prático
Se o usuário escolher:
- Interesse: **Tecnologia**
- Tempo de experiência: **3-5** (equivalente a 4)

E o candidato for:
- Interesse: **Tecnologia**
- Tempo de experiência: **1-2** (equivalente a 1.5)

O cálculo seria:
- **InterestScore**: 70 pontos (interesse igual)
- **ExperienceDiff**: |4 - 1.5| = 2.5
- **ExperienceScore**: 30 - (2.5 * 10) = 5
- **Afinidade Total**: **75%**

Ao final, os 3 candidatos com maior afinidade são exibidos.

## 🔮 O que eu faria com mais tempo

Se eu tivesse mais tempo para evoluir o projeto, eu implementaria as seguintes melhorias:

- **API própria com backend desacoplado**: Separaria a lógica de negócio do frontend, criando uma API RESTful para tornar a arquitetura mais escalável e facilitar futuras integrações.
- **Banco de dados persistente**: Substituiria os dados mockados por um banco real (ex: PostgreSQL), garantindo persistência, consistência e escalabilidade dos dados.
- **Sistema de autenticação e login**: Implementaria autenticação JWT para que usuários possam criar perfis e acessar seus matches de forma segura.
- **Envio de imagem personalizada**: Permitiria que cada usuário fizesse upload da própria foto.
- **Paginação dos resultados**: Para melhor performance e usabilidade, principalmente com muitos usuários.
- **Mais atributos para cálculo de afinidade**: Como soft skills, preferências de trabalho (remoto/presencial), tecnologias dominadas, entre outros. Isso permitiria um sistema de matchmaking mais preciso e realista.
- **Painel de administração**: Para gerenciar usuários, analisar estatísticas de afinidade e acompanhar o uso da aplicação.
- **Histórico de matches e favoritos**: Permitiria que usuários visualizassem seus matches anteriores e marcassem favoritos.
- **Deploy completo com CI/CD**: Automatizaria o deploy do frontend e backend com GitHub Actions e ambientes separados (dev/stage/prod).
- **Testes automatizados**: Cobertura de testes unitários e de integração para garantir qualidade contínua no sistema.

Essas melhorias não só aumentariam a robustez do sistema, como também agregariam valor real à experiência do usuário e à manutenção do produto a longo prazo.

## 💻 Comecando

### Requisitos

**Clonar o projeto e acessar as pastas**

```bash
 git clone https://github.com/Mateussantis/legalai-match.git && cd legalai-match
```

**Siga os passos rodar o FRONTEND**

### Instale as dependencias e rode o projeto

```bash
npm install

npm run dev
```

---

Made with 💜 &nbsp;by Mateus Santis 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/mateus-silva-de-santis-3a6899150/)
