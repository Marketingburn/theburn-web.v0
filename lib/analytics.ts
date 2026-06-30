export const pushEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...params,
    })
  }
}
