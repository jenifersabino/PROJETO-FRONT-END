# 💚 Sã e Salvo! | Acolhimento e Reinserção Social
[![Status da Build](https://github.com/jenifersabino/Atividade-IIl-Frontend/actions/workflows/main.yml/badge.svg)](https://github.com/jenifersabino/Atividade-IIl-Frontend/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![WCAG 2.1 AA](https://img.shields.io/badge/Acessibilidade-WCAG%202.1%20AA-brightgreen)](https://www.w3.org/WAI/WCAG21/quickref/?levels=aa)
[![Versão Semântica](https://img.shields.io/badge/Vers%C3%A3o-v3.0.0-blue)](https://github.com/jenifersabino/Atividade-IIl-Frontend/releases/tag/v3.0.0)

## 📖 Descrição do Projeto

O projeto **"Sã e Salvo!"** é uma aplicação web Multi-Page Application (MPA) desenvolvida com foco em demonstrar a excelência em práticas de desenvolvimento Frontend, incluindo modularidade JavaScript, manipulação avançada do DOM, e aderência rigorosa a padrões de acessibilidade, otimização e controle de versão profissional.

A aplicação simula o website de uma instituição sem fins lucrativos dedicada ao acolhimento e reinserção social de pessoas com dependência química e alcoolismo, apresentando seções como Início (Carrossel, Impacto), Voluntariado (Formulário com Validação) e Doações.

---

## 🛠️ Tecnologias e Arquitetura

Este projeto foi construído utilizando as seguintes tecnologias e padrões:

* **HTML5:** Estrutura semântica completa (WCAG Nível AA).
* **CSS3:** Estilização responsiva, sistema de variáveis (`:root`) e implementação de modo escuro/alto contraste.
* **JavaScript (ES6+):** Código **Modular** (via `type="module"`, separando lógica em `carousel.js`, `validation.js`, `masks.js`), Manipulação do DOM e Templates JS.
* **Chart.js:** Utilizado para visualização de dados de impacto social e transparência.

### 📂 Estrutura de Pastas
seu-projeto/ ├── index.html // Página Principal ├── voluntariado.html // Página com Formulário de Validação ├── doacoes.html // Página de Doações ├── css/ │ ├── style.min.css // Estilos minificados e otimizados ├── js/ │ ├── main.min.js // Ponto de entrada e roteador de módulos │ ├── carousel.min.js // Lógica do Carrossel │ ├── validation.min.js // Lógica de Validação e Templates JS │ └── masks.min.js // Lógica de Máscaras (CPF, Tel) └── README.md
## ✅ Entregáveis e Padrões Profissionais

### 1. 🐙 Controle de Versão com Git/GitHub

A gestão do repositório seguiu o padrão **GitFlow Simplificado** para garantir um histórico de commits limpo e documentado.

* **Estratégia de Branching:** Utilização dos branches `main` (Produção/Estável) e `develop` (Integração). Novas funcionalidades e correções foram desenvolvidas em branches isolados (`feature/`).
* **Histórico de Commits Semântico:** Todos os commits utilizam prefixos padronizados (ex: `feat`, `perf`, `docs`) para facilitar a rastreabilidade:
    * `feat`: Adição de nova funcionalidade (ex: modo escuro).
    * `perf`: Melhoria de performance (ex: minificação).
    * `docs`: Atualização da documentação (ex: este `README.md`).
* **Sistema de Releases:** A entrega final foi marcada com a tag **`v3.0.0`** no GitHub, seguindo o versionamento semântico (MAJOR.MINOR.PATCH) para indicar uma versão estável de produção.
* **Pull Requests (PRs):** Utilizados para formalizar e documentar a integração das *features* no branch `develop` antes da sua promoção para `main`.

### 2. ♿ Acessibilidade (WCAG 2.1 Nível AA)

A aplicação foi rigorosamente testada e modificada para atender aos critérios de sucesso do Nível AA.

| Requisito WCAG | Implementação |
| :--- | :--- |
| **Navegação por Teclado** | Todos os elementos interativos (`links`, `buttons`, `input`) são focáveis (`tabindex="0"` implícito ou explícito). Links "Pular para o conteúdo" (`skip-link`) implementados no topo de cada página. |
| **Estrutura Semântica** | Uso correto de `header`, `main`, `footer`, `nav`, `section`, `h1`-`h6`, e atributos `role` e `aria-label` para definição de regiões. |
| **Suporte para Leitores de Tela** | Botões do Carrossel possuem `aria-label` descritivos ("Slide anterior", "Próximo slide") para usuários não-visuais. |
| **Contraste Mínimo (4.5:1)** | O esquema de cores base do projeto (`#222` sobre `#eac98f`) atende ao contraste mínimo exigido. |
| **Modo Escuro / Alto Contraste** | Implementação de um **Toggle de Contraste** (`id="contrast-toggle"`) que permite ao usuário alternar para um tema de alto contraste (fundo escuro, texto branco), otimizando a legibilidade. |

### 3. ⚡ Otimização para Produção

Para garantir o carregamento rápido e eficiente da aplicação em um ambiente de produção (simulado pelo GitHub Pages):

| Otimização | Técnica Aplicada |
| :--- | :--- |
| **Minificação de Assets** | Todos os arquivos JavaScript (`.js`) e CSS (`.css`) foram **minificados** utilizando ferramentas de terceiros (Terser, Clean-CSS) para remover caracteres desnecessários (espaços, quebras de linha) e reduzir o tempo de download. |
| **Compressão de Imagens** | As imagens (`.png`, `.jpg`) foram processadas (TinyPNG/Squoosh) para reduzir drasticamente o tamanho do arquivo sem perda perceptível de qualidade visual. |

---

## ▶️ Como Rodar o Projeto

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/jenifersabino/Atividade-IIl-Frontend.git](https://github.com/jenifersabino/Atividade-IIl-Frontend.git)
    ```
2.  **Navegue até a Pasta:**
    ```bash
    cd Atividade-IIl-Frontend
    ```
3.  **Abra:** Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

---

## 🔗 Demonstração Pública

O projeto está ativo e acessível via GitHub Pages:


## 🧑‍💻 Autora

**Jenifer Sabino**
