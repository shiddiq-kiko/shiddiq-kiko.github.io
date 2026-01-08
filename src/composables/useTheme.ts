import { ref, onMounted, watch } from 'vue'

// Global state to ensure all components share the same theme state
const isDark = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Initialize theme only once
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme(isDark.value)
  }

  onMounted(() => {
    // We can call initTheme here, but since isDark is global, 
    // it might have been initialized by another component already.
    // However, it's safe to run it to ensure classes are applied.
    initTheme()
  })

  watch(isDark, (newValue) => {
    applyTheme(newValue)
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  })

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}