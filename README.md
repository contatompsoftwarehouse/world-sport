# World Sport

Landing page institucional **Mobile First** desenvolvida para o **World Sport**, funcionando como uma vitrine digital para apresentar quadras, modalidades, diferenciais da estrutura física e direcionar visitantes para consultas e solicitações de reserva via WhatsApp.

---

## Objetivo do Projeto

Criar uma presença digital moderna, objetiva e focada em conversão para o espaço esportivo:

- Apresentar o espaço esportivo e suas instalações.
- Divulgar as quadras e modalidades disponíveis.
- Exibir fotografias reais e diferenciais da estrutura.
- Facilitar a localização e o contato direto com potenciais clientes.
- Direcionar visitantes para o WhatsApp com mensagens pré-preenchidas para consultas e reservas.
- Garantir experiência consistente e responsiva em dispositivos móveis e desktops.

> **Escopo da v1:** Foco exclusivo em apresentação institucional e conversão via WhatsApp. Não contempla autenticação, banco de dados, painel administrativo ou sistema automatizado de reservas.

---

## Stack Tecnológica

| Tecnologia | Responsabilidade |
| :--- | :--- |
| **React + Vite** | Estrutura e desenvolvimento frontend SPA |
| **TypeScript** | Tipagem estática e segurança de código |
| **SCSS** | Estilização modular, tokens e mixins |
| **Lucide React** | Biblioteca de ícones |
| **Google Fonts** | Tipografia (`Barlow Condensed` e `Inter`) |
| **Vercel** | Hospedagem e deploy contínuo |

---

## Design System

### Paleta de Cores

- **Principais:**
  - `Deep Navy` (`#172B4D`) — Cor institucional e base visual
  - `Sport Orange` (`#F47B35`) — CTAs, destaques e ações principais
  - `Pure White` (`#FFFFFF`) — Fundos e contraste
  - `Soft Gray` (`#F3F5F7`) — Superfícies secundárias
- **Complementares (Pastel):**
  - `Sky Pastel` (`#DCE8F4`)
  - `Peach` (`#FCE5D5`)
  - `Mint` (`#E5EDE7`)

### Tipografia

- **Títulos:** `Barlow Condensed` (pesos `600`, `700`, `800`)
- **Textos e UI:** `Inter` (pesos `400`, `500`, `600`, `700`)

### Tokens de Layout

- **Container:** largura máxima de `1200px`
- **Espaçamento entre seções:** `80px` (desktop) / `56px` (mobile)
- **Border Radius:** `6px`, `12px`, `16px` e `24px` (botões com `12px` ou arredondados)
- **Sombras:** baseadas em `Deep Navy` com baixa opacidade

---

## Estrutura da Landing Page

1. **Header** — Identidade visual, navegação por âncoras e botão de contato.
2. **Hero** — Apresentação principal, fotografia de destaque e CTA para reserva.
3. **Quadras** — Cards informativos com modalidades e características das quadras.
4. **Estrutura** — Instalações e diferenciais do complexo esportivo.
5. **Galeria** — Fotografias reais do espaço e ambientes.
6. **Localização** — Endereço completo e integração com Google Maps.
7. **Contato** — Chamada direta para atendimento e agendamento via WhatsApp.
8. **Footer** — Informações institucionais, links rápidos e redes sociais.

---

## Organização de Pastas

```text
world-sport/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Button/
│   │   └── WhatsAppButton/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── Courts/
│   │   ├── Facilities/
│   │   ├── Gallery/
│   │   ├── Location/
│   │   └── Contact/
│   ├── styles/
│   │   ├── tokens.scss
│   │   ├── global.scss
│   │   └── mixins.scss
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts