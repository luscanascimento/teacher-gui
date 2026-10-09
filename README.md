# Teacher Gui — British English, Real Connections 🇬🇧

Landing page oficial do **Teacher Gui**, professor particular de inglês com foco em inglês britânico autêntico, conexão humana, confiança para conversar e aprendizado leve sem julgamentos.

- **URL de Produção (GitHub Pages):** [https://luscanascimento.github.io/teacher-gui/](https://luscanascimento.github.io/teacher-gui/)
- **Repositório:** `git@github.com:luscanascimento/teacher-gui.git`

---

## 🎨 Identidade Visual — British Red Editorial

- **Vermelho Queimado / Tijolo (`#9E2A2B`):** Cor dominante e paixão britânica.
- **Azul Meia-Noite Desbotado (`#1C2A39`):** Profundidade, sofisticação e contraste.
- **Branco Off-White / Pergaminho (`#F4F1EA`):** Fundo editorial e leitura confortável.
- **Bege Areia / Camel (`#DDA15E`):** Destaques, carimbos e elementos culturais.
- **Cinza Frio (`#7D8597`):** Metadados e detalhes secundários.

---

## ⚡ Stack Tecnológica

- **React 18 + TypeScript + Vite**
- **Tailwind CSS** com design tokens customizados
- **GSAP + ScrollTrigger** para storytelling e animações refinadas
- **Lenis** para smooth scrolling
- **React Hook Form + Zod** para validação robusta do formulário
- **Lucide React** para iconografia
- **GitHub Actions** para build e deploy automatizado no GitHub Pages

---

## 🚀 Como executar localmente

1. Clone o repositório:
```bash
git clone git@github.com:luscanascimento/teacher-gui.git
cd teacher-gui
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Verifique a tipagem e build:
```bash
npm run lint
npm run build
```

---

## 📦 Deploy no GitHub Pages

O deploy é acionado automaticamente a cada push na branch `main` via GitHub Actions (`.github/workflows/deploy.yml`).
O caminho base do Vite está configurado para `/teacher-gui/` em ambiente de produção.
