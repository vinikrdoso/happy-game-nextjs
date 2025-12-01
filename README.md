# 🎮 Happy Game - Plataforma Next.js

## 📋 Sobre o Projeto

O **Happy Game** é uma plataforma web moderna desenvolvida com Next.js para conectar gamers e entusiastas de videogames. O projeto apresenta uma comunidade virtual onde jogadores podem se inscrever, explorar a história dos jogos, conhecer os recursos da plataforma e interagir com outros membros da comunidade.

## 🎯 Propósito

O site foi criado para:

- **Conectar gamers**: Criar uma comunidade vibrante de jogadores
- **Educar sobre história**: Apresentar a evolução dos videogames ao longo das décadas
- **Apresentar recursos**: Mostrar funcionalidades da plataforma para desenvolvedores e usuários
- **Captar leads**: Sistema de cadastro para lista de espera da comunidade
- **Experiência personalizada**: Sistema de autenticação com NextAuth para perfis personalizados

## 🚀 Funcionalidades

### 🏠 Página Inicial (Home)

- **Hero Section**: Apresentação principal com call-to-action
- **Seção de Comunidades**: Cards interativos mostrando benefícios da plataforma
- **Estatísticas**: Dados impactantes sobre a indústria de jogos
- **Game God Image**: Seção visual destacando a cultura gamer
- **Call-to-Action**: Convite para inscrição na comunidade
- **Easter Egg Konami Code**: Funcionalidade secreta ativada pelo código Konami
- **Floating Balloon**: Elemento visual interativo flutuante
- **Achievement Modal**: Sistema de conquistas e badges

### 📚 História dos Jogos (/historia)

- **Timeline Interativa**: Evolução dos videogames de 1970 até o presente
- **TimelineItem Components**: Componentes reutilizáveis para cada período histórico
- **Períodos Históricos**:
  - 1970-1980: A Era dos Arcades
  - 1980-1990: A Revolução dos Consoles
  - 1990-2000: A Transição para o 3D
  - 2000-2010: A Era Online
  - 2010-Presente: Jogos como Cultura

### 🛠️ Plataforma (/plataforma)

- **Recursos Dinâmicos**: Carregados de JSON com Server Components
- **Tabela de Recursos**: Exibição organizada de funcionalidades
- **Equipe**: Apresentação dos desenvolvedores do projeto com fotos e links
- **Compromisso**: Cards exibindo valores e missão da comunidade
- **Sustentabilidade Digital**: Seção destacando práticas sustentáveis
- **Recursos Disponíveis**:
  - Catálogo de Jogos
  - Análise de Vendas
  - Sistema de Posts
  - Interação entre Usuários
  - Sistema de Conquistas
  - Diversidade & Inclusão

### 📝 Formulário de Cadastro (/cadastro)

- **Cadastro Completo**: Nome, nickname, email, telefone
- **Preferências**: Plataforma favorita e gêneros de jogos
- **Validação Customizada**: Hook useFormValidation para validação
- **TypeScript Types**: Tipagem forte para dados do formulário
- **Componente SignupForm**: Formulário modular e reutilizável
- **Integração com NextAuth**: Preparado para autenticação

### 🔐 Login (/login)

- **Autenticação com NextAuth**: Sistema robusto de autenticação
- **Credentials Provider**: Login com email e senha
- **Session Management**: Gerenciamento de sessões com SessionProvider
- **Protected Routes**: Middleware para rotas privadas
- **Remember Me**: Persistência de sessão

### ✅ Página de Feedback (/feedback)

- **Confirmação Personalizada**: Usa dados do cadastro
- **Hero Section Customizada**: Saudação personalizada ao usuário
- **Benefits Section**: Cards dinâmicos baseados em preferências
- **CTA Section**: Próximos passos para o usuário
- **Tipos TypeScript**: Definições específicas para feedback

## 🛠️ Tecnologias Utilizadas

### Core

- **Next.js 16.0.4**: Framework React com App Router
- **React 19.2.0**: Biblioteca JavaScript para interfaces (versão mais recente)
- **TypeScript 5.x**: Superset do JavaScript com tipagem estática
- **NextAuth 4.24.13**: Solução completa de autenticação

### Styling

- **Tailwind CSS 4.x**: Framework CSS utility-first (versão mais recente)
- **tw-animate-css**: Animações CSS para Tailwind
- **@tailwindcss/postcss**: Plugin PostCSS para Tailwind
- **class-variance-authority**: Gerenciamento de variantes de componentes
- **clsx + tailwind-merge**: Utilitários para classes CSS

### UI Components Shad cn (Radix UI)

- **@radix-ui/react-checkbox**: Componente de checkbox acessível
- **@radix-ui/react-dialog**: Modal/Dialog acessível
- **@radix-ui/react-label**: Labels para formulários
- **@radix-ui/react-select**: Select dropdown acessível
- **@radix-ui/react-slot**: Composição de componentes

### Carousel & Icons

- **embla-carousel-react**: Carrossel performático
- **embla-carousel-autoplay**: Plugin de autoplay para carrossel
- **lucide-react**: Ícones modernos e customizáveis

### Build & Development

- **babel-plugin-react-compiler**: Compilador React experimental
- **ESLint**: Linter para qualidade de código
- **PostCSS**: Processamento de CSS

## 🎨 Sistema de Design

### Paleta de Cores

O projeto utiliza um sistema de tokens de cor estruturado com suporte a modo claro e escuro:

#### Cores Neutras

```css
--neutral-black: #0D0D0D
--neutral-dark-grey: #1A1A1A
--neutral-medium-grey: #2D2D2D
--neutral-light-grey: #B0B0B0
--neutral-white: #FFFFFF
```

#### Cores de Destaque

```css
--primary-green-base: #00FF88 (neon-green)
--primary-green-darker: #00CC6D
--primary-pink-accent: #FF2E63 (hot-pink)
```

#### Gradientes

```css
--gradient-sustainability: Linear gradient com tons verdes;
```

### Tokens Tailwind

As cores estão integradas ao Tailwind como:

- `bg-background`, `bg-background-primary`, `bg-background-secondary`
- `text-neutral-950`, `text-neutral-50`
- `text-primary-green-base`, `text-primary-pink-accent`
- Suporte a `dark:` variants para modo escuro

### Tipografia

- **Font Heading**: Fonte customizada para títulos
- **System Fonts**: Fontes do sistema para texto geral

## 📁 Estrutura do Projeto (Next.js App Router)

```
happy-game-nextjs/
├── public/                          # Arquivos estáticos
│   ├── data/                        # Dados JSON
│   │   ├── commitments.json         # Compromissos da plataforma
│   │   ├── platform-resources.json  # Recursos disponíveis
│   │   └── team-members.json        # Membros da equipe
│   └── img/                         # Imagens e recursos visuais
│       ├── logo/                    # Variações do logo (SVG)
│       │   ├── logo-black.svg
│       │   └── logo-white.svg
│       ├── profile/                 # Fotos da equipe (5 membros)
│       │   ├── joao-andrade-profile.jpeg
│       │   ├── john-silverio-profile.jpeg
│       │   ├── larissa-mendes-profile.jpeg
│       │   ├── lyniker-oliveira-profile.jpeg
│       │   └── vinicius-cardoso-profile.jpeg
│       ├── assassins.png
│       ├── favicon.png
│       ├── favicon.svg
│       ├── fight.png
│       ├── game-god.png
│       ├── game-together.png
│       ├── mario-sonic.png
│       ├── povos-originarios.png
│       ├── setup.png
│       └── story-games-header.png
├── src/
│   ├── app/                         # App Router (Next.js 13+)
│   │   ├── (public)/                # Grupo de rotas públicas
│   │   │   ├── (home)/             # Rota raiz (/)
│   │   │   │   ├── _components/    # Componentes da home
│   │   │   │   │   ├── AchievementModal.tsx
│   │   │   │   │   ├── CommunitiesSection.tsx
│   │   │   │   │   ├── CTASection.tsx
│   │   │   │   │   ├── FloatingBalloon.tsx
│   │   │   │   │   ├── GameGodImage.tsx
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   ├── KonamiCodeEasterEgg.tsx
│   │   │   │   │   ├── StatsSection.tsx
│   │   │   │   │   └── hooks/
│   │   │   │   │       └── useKonamiCode.ts
│   │   │   │   └── page.tsx        # Página inicial
│   │   │   ├── _components/        # Componentes compartilhados (públicos)
│   │   │   │   ├── Buttons.tsx
│   │   │   │   ├── CommitmentCard.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── TeamMemberCard.tsx
│   │   │   │   └── TimelineItem.tsx
│   │   │   ├── cadastro/           # Rota /cadastro
│   │   │   │   ├── _components/
│   │   │   │   │   └── SignupForm.tsx
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useFormValidation.ts
│   │   │   │   ├── types.ts
│   │   │   │   └── page.tsx
│   │   │   ├── feedback/           # Rota /feedback
│   │   │   │   ├── _components/
│   │   │   │   │   ├── BenefitsSection.tsx
│   │   │   │   │   ├── CTASection.tsx
│   │   │   │   │   └── HeroSection.tsx
│   │   │   │   ├── data/
│   │   │   │   │   └── benefitCards.ts
│   │   │   │   ├── types.ts
│   │   │   │   └── page.tsx
│   │   │   ├── historia/           # Rota /historia
│   │   │   │   └── page.tsx
│   │   │   ├── login/              # Rota /login
│   │   │   │   └── page.tsx
│   │   │   ├── plataforma/         # Rota /plataforma
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx          # Layout público
│   │   ├── (private)/              # Grupo de rotas privadas
│   │   │   ├── perfil/             # Rota /perfil (protegida)
│   │   │   │   ├── _components/
│   │   │   │   │   └── LogoutButton.tsx
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx          # Layout privado
│   │   ├── api/                    # API Routes
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.ts    # NextAuth API handler
│   │   └── layout.tsx              # Root layout
│   ├── components/                 # Componentes globais
│   │   ├── ui/                     # Componentes UI (shadcn/ui style)
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Carousel.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Label.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Sheet.tsx
│   │   │   ├── Table.tsx
│   │   │   └── Textarea.tsx
│   │   ├── Logo.tsx                # Componente do logo
│   │   └── ThemeToggle.tsx         # Alternador de tema claro/escuro
│   ├── lib/                        # Utilitários e configurações
│   │   ├── auth.ts                 # Configuração NextAuth
│   │   └── utils.ts                # Função cn() para classes
│   ├── providers/                  # React Context Providers
│   │   └── SessionProvider.tsx     # Provider de sessão NextAuth
│   ├── types/                      # Definições TypeScript globais
│   │   └── next-auth.d.ts          # Extensão de tipos NextAuth
│   └── middleware.ts               # Middleware (proteção de rotas)
├── .gitignore                      # Arquivos ignorados pelo Git
├── components.json                 # Configuração shadcn/ui
├── eslint.config.mjs              # Configuração ESLint
├── next.config.ts                 # Configuração Next.js
├── package.json                   # Dependências do projeto
├── postcss.config.mjs             # Configuração PostCSS
├── tsconfig.json                  # Configuração TypeScript
└── README.md                      # Este arquivo
```

### 📂 Explicação da Estrutura

#### App Router (`/src/app`)

O projeto utiliza o App Router do Next.js 13+, com arquitetura baseada em grupos de rotas:

- **(public)**: Rotas acessíveis sem autenticação
- **(private)**: Rotas protegidas que requerem login
- **\_components**: Componentes específicos do segmento (convenção Next.js)
- **layout.tsx**: Layouts aninhados para cada grupo
- **page.tsx**: Páginas das rotas

#### Componentes (`/src/components`)

- **ui/**: Componentes reutilizáveis de interface (inspirados em shadcn/ui)
- Componentes globais como Logo e ThemeToggle

#### API Routes (`/src/app/api`)

- **auth/[...nextauth]**: Endpoint de autenticação NextAuth

#### Dados Estáticos (`/public/data`)

- Arquivos JSON para recursos, equipe e compromissos
- Carregados via Server Components ou fetch API

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### 1. Clone o repositório

```bash
git clone [URL_DO_REPOSITORIO]
cd happy-game-nextjs
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here

# Base URL (opcional)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### 5. Build para produção

```bash
npm run build
npm run start
```

Os arquivos otimizados serão gerados na pasta `.next/`

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento (porta 3000)
- `npm run build` - Cria build otimizado de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 🗂️ Rotas da Aplicação

### Rotas Públicas

- `/` - Página inicial (home)
- `/historia` - História dos videogames
- `/plataforma` - Recursos da plataforma e equipe
- `/cadastro` - Formulário de cadastro
- `/login` - Formulário de login
- `/feedback` - Página de confirmação após cadastro

### Rotas Privadas (Requerem Autenticação)

- `/perfil` - Perfil do usuário logado

### API Routes

- `/api/auth/[...nextauth]` - Endpoints de autenticação NextAuth
  - `/api/auth/signin` - Login
  - `/api/auth/signout` - Logout
  - `/api/auth/session` - Sessão atual

## 🔐 Sistema de Autenticação

O projeto utiliza **NextAuth.js** para autenticação:

### Configuração

- **Provider**: Credentials (email e senha)
- **Session Strategy**: JWT
- **Middleware**: Proteção de rotas em `middleware.ts`
- **SessionProvider**: Context para acesso à sessão no client

### Rotas Protegidas

O middleware intercepta requisições e redireciona usuários não autenticados:

```typescript
// src/middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/perfil/:path*", "/admin/:path*"],
};
```

## 🎨 Modo Claro/Escuro (Theme Toggle)

O projeto implementa tema claro e escuro usando:

- CSS variables para cores dinâmicas
- Componente `ThemeToggle` para alternar temas
- Classes Tailwind com prefixo `dark:`
- Persistência da preferência do usuário

## 🔄 Server Components vs Client Components

### Server Components (Padrão no App Router)

- Páginas em `/app/**/page.tsx`
- Fetch de dados em JSON estático
- Melhor performance e SEO

### Client Components (com "use client")

- Componentes interativos com estado
- Hooks como useState, useEffect
- Event handlers (onClick, onChange, etc.)
- Exemplos: `ThemeToggle`, `SignupForm`, `KonamiCodeEasterEgg`

## 🌟 Recursos Avançados

### Easter Eggs

- **Konami Code**: Digite ↑↑↓↓←→←→BA para ativar surpresa
- **Floating Balloon**: Elemento animado na home
- **Achievement Modal**: Sistema de conquistas

### Performance

- **Next.js Image**: Otimização automática de imagens
- **Server Components**: Renderização no servidor
- **Route Caching**: Cache de recursos JSON (revalidate: 3600)
- **Code Splitting**: Carregamento sob demanda

### Acessibilidade

- **Radix UI**: Componentes com suporte a ARIA
- **Keyboard Navigation**: Navegação por teclado
- **Focus Management**: Gerenciamento de foco

## 🧪 Boas Práticas Implementadas

✅ **TypeScript**: Tipagem forte em todo o projeto
✅ **App Router**: Arquitetura moderna do Next.js
✅ **Server Components**: Performance otimizada
✅ **Component Colocation**: Componentes próximos ao uso
✅ **Modularização**: Componentes pequenos e reutilizáveis
✅ **Separation of Concerns**: Hooks, types e components separados
✅ **Route Groups**: Organização lógica de rotas
✅ **Middleware**: Proteção de rotas
✅ **API Routes**: Backend integrado
✅ **Responsive Design**: Mobile-first com Tailwind

## 👥 Equipe de Desenvolvimento

- **Ana Larissa Mendes** - Frontend Developer [Github](https://github.com/annalare/)
- **João Pedro Thethê Andrade** - Frontend Developer [Github](https://github.com/jaoshtt/)
- **John Vitor Silverio Pereira** - Backend/Frontend Developer [Github](https://github.com/johnsilverio/)
- **Lyniker Vinicius Santos de Oliveira** - Criador de conteúdo/Frontend Developer [Github](https://github.com/lynikerrr/)
- **Vinícius Cardoso Junqueira** - Frontend Developer [Github](https://github.com/vinikrdoso/)

## 📚 Recursos Úteis

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação NextAuth.js](https://next-auth.js.org/)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação Radix UI](https://www.radix-ui.com/)
- [Documentação TypeScript](https://www.typescriptlang.org/docs/)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Deploy
vercel
```

## 📄 Licença

Projeto desenvolvido como parte da Graduação da FIAP em Sistemas de Informação.

---

_Desenvolvido com ❤️ pela equipe Happy Game usando Next.js 16 e React 19_
