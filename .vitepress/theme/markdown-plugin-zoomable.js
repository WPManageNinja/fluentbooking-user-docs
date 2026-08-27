/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function zoomablePlugin(md) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options)
    })

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self)

    const srcIndex = token.attrIndex('src')
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self)

    const src = token.attrs[srcIndex][1]
    const alt = token.content || ''

    // The src prop bypasses Vite's asset pipeline, so relative paths would 404
    // in the production build. Every image in docs/ is an absolute /images/ path
    // today; this guard keeps a future relative path rendering normally instead
    // of silently breaking.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self)
    }

    // Pass src/alt as props — no slot. The component owns the <img>, so SSR and
    // client render the exact same markup. ClientOnly means there is no SSR
    // markup to mismatch against on hydration.
    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`
  }
}
