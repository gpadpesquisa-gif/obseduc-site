# Observatório de Educação do Grande ABC

Site institucional acadêmico e minimalista do Observatório de Educação do Grande ABC Paulista.

## Desenvolvimento local

O projeto não depende de framework ou banco de dados. Para executar o Preview localmente:

```bash
npm run dev
```

Para gerar a versão estática de produção:

```bash
npm run build
```

A pasta `dist/` é o resultado publicável e não é versionada.

## Publicar na Vercel

1. Acesse a Vercel e escolha **Add New Project**.
2. Importe o repositório `gpadpesquisa-gif/obeducabc` do GitHub.
3. Mantenha o framework como **Other** ou **No Framework**.
4. Use `npm run build` como Build Command e `dist` como Output Directory.
5. Publique o projeto.

Depois que o domínio definitivo for escolhido, atualize o canonical, o `og:url` e o `<loc>` do `sitemap.xml` com a URL pública real. O site já contém `robots.txt`, manifesto de rotas, manifesto web, cartão Open Graph e configuração `vercel.json`.

## Conteúdo

A página preserva as informações públicas do site original, incluindo a criação do Observatório em 2014, sua atuação na região do Grande ABC, as linhas de pesquisa e o relatório sobre possibilidades do ChatGPT na educação infantil e no ensino fundamental.
