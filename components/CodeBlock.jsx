'use client'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

function extractText(node) {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node?.props?.children) return extractText(node.props.children)
  return ''
}

export function CodeBlock({ children }) {
  const code = extractText(children).trim()

  if (!code) return null

  return (
    <LiveProvider code={code} enableTypeScript={false}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}