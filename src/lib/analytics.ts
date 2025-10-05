export function initAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
  if (!id) return
  // gtag bootstrap
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)
  const inline = document.createElement('script')
  inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${id}');`
  document.head.appendChild(inline)
}

export function track(event: string, params?: Record<string, unknown>) {
  // @ts-ignore
  window.gtag?.('event', event, params)
}



