# Fichas – Dr. Ygor Santiago

App instalável (PWA) para preencher no celular a **Ficha de Anamnese** e o **Termo de Consentimento (implante)**, com assinatura na tela e geração de PDF.

- Nenhum dado de paciente é enviado ou armazenado em servidor: o PDF é gerado no próprio aparelho.
- Funciona sem internet depois da primeira abertura.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro |
| `sw.js` | Funcionamento sem internet (cache) |
| `manifest.json` | Nome, cores e ícones do app instalado |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Ícones com o logo YS |

## Personalizar para outro profissional

No `index.html`, procure o bloco **CONFIGURAÇÃO DO PROFISSIONAL** e altere nome, CRO, especialidade, contatos e cidade. Ajuste também o `name` no `manifest.json`.

## Publicar no GitHub Pages

1. Crie um repositório **público** e envie todos os arquivos para a raiz.
2. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`.
3. O app fica em `https://<usuario>.github.io/<repositorio>/`.

## Atualizações

Sempre que alterar o `index.html`, aumente a versão em `sw.js` (`fichas-v1` → `fichas-v2`…) e envie os dois arquivos juntos. Assim o celular baixa a versão nova.
