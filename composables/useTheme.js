
export const useTheme = (theme)=> {
   const currentTheme =  theme || 'light'
   document.documentElement.setAttribute('data-theme', currentTheme)
}