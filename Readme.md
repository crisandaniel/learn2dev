# learn2.dev

## Project Structure

```
app/
  page.jsx                    ← redirect spre /docs
  layout.jsx                  ← fără <Head />, fără import Head
  docs/
    [[...mdxPath]]/
      page.jsx                ← gateway Nextra
content/
  _meta.js
  index.mdx
  react/
    _meta.js
    ...
mdx-components.jsx
next.config.mjs               ← contentDirBasePath: '/docs'
```

## Mistakes to avoid _meta.js:

- ❌ `type: 'folder'` — not in Nextra 4
- ❌ `display: 'hidden'` without `type: 'page'`

## Mistakes to avoid in components:

- ❌ `<Head />` empty in layout
- ❌ `import { Card }` — not in Nextra 4
- ✅ `<Cards.Card>` instead of `<Card>`