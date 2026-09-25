# 🔗 WebLink — Página de Links para Redes Sociais

Um template simples, leve e personalizável para criar sua própria "página de links" (estilo Linktree), reunindo todas as suas redes sociais em um só lugar. Inclui suporte a **modo claro/escuro** e visual responsivo para desktop e mobile.

![Preview](assets/preview.png)

## ✨ Funcionalidades

- 🌗 Alternância entre modo claro e escuro (dark/light mode)
- 📱 Layout responsivo (mobile e desktop)
- 🔗 Lista de links personalizável para seus perfis
- 🧩 Ícones de redes sociais com [Ionicons](https://ionic.io/ionicons)
- 🎨 Fácil de customizar cores, fontes e imagens via CSS

## 📁 Estrutura do projeto

```
├── index.html
├── style.css
├── script.js
└── assets/
    ├── Avantar.jpg
    ├── bg-mobile.jpg
    ├── bg-mobile-light.jpg
    ├── bg-desktop.jpg
    ├── bg-desktop-light.jpg
    ├── moon-stars.svg
    └── sun.svg
```

## 🚀 Como usar

1. Clone ou baixe este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Abra o arquivo `index.html` no navegador para visualizar localmente.
3. Personalize conforme a seção abaixo.
4. Publique gratuitamente com [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/).

## 🛠️ Personalização

### 1. Foto de perfil e nome de usuário
No `index.html`, dentro da `div#profile`, troque a imagem e o texto:
```html
<img src="assets/Avatar.jpg" alt="Foto de perfil">
<p>@SeuUsuario</p>
```

### 2. Links principais
Edite a lista `<ul>` com os links que deseja destacar:
```html
<li><a href="https://www.instagram.com/seu-usuario/" target="_blank">Acesse meu instagram</a></li>
```

### 3. Ícones de redes sociais
Na `div#social-links`, atualize os links e, se necessário, troque o `name` do `<ion-icon>` pelo ícone da rede desejada (veja a lista completa em [ionic.io/ionicons](https://ionic.io/ionicons)):
```html
<a href="https://github.com/seu-usuario" target="_blank">
    <ion-icon name="logo-github"></ion-icon>
</a>
```

### 4. Rodapé
```html
<footer>
    Feito por Seu Nome
</footer>
```

### 5. Cores e imagens de fundo
As cores e imagens de fundo são controladas por variáveis CSS em `style.css`:
```css
:root {
    --text-color: #fff;
    --bg--url: url(./assets/bg-mobile.jpg);
    ...
}

.light {
    --text-color: #000;
    --bg--url: url(./assets/bg-mobile-light.jpg);
    ...
}
```
Basta trocar os caminhos das imagens (`assets/`) e os valores de cor para adaptar ao seu estilo.

## 🌗 Como funciona o modo claro/escuro

O botão de alternância (`#switch`) adiciona/remove a classe `.light` no elemento `<html>` via `script.js`, o que troca as variáveis CSS usadas em todo o site — incluindo plano de fundo, cores de texto e ícone do próprio botão (lua/sol).

## 📦 Tecnologias utilizadas

- HTML5
- CSS3 (Custom Properties / variáveis CSS)
- JavaScript puro
- [Ionicons](https://ionic.io/ionicons) via CDN

## 📄 Licença

Uma forma simples e única de divulgar todas as suas redes sociais em um só lugar.

---

Feito com 💜 para ajudar você a compartilhar suas redes sociais de forma simples e bonita.
