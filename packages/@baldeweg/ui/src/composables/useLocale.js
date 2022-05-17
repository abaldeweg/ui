export function useLocale() {
  document.documentElement.setAttribute(
    'lang',
    import.meta.env.VUE_APP_LOCALE ?? 'en-US'
  )
}
