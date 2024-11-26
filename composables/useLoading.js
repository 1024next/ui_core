
let loadingElement
export  const useLoading = {
     show:() => {
      if (!loadingElement) {
        loadingElement = document.createElement('div')
        loadingElement.className = 'loading-overlay'
        loadingElement.innerHTML = '<div class="loading-spinner"></div>'
        document.body.appendChild(loadingElement)
      }
    },
     hide: () => {
      if (loadingElement) {
        document.body.removeChild(loadingElement)
        loadingElement = null
      }
    }
}
