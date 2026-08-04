export type ThemeMode = 'light' | 'dark'

export function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem('theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  if (typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  return 'light'
}

export function applyTheme(theme: ThemeMode): void {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
}
