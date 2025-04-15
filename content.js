// Evita injectar més d'un cop
if (!document.getElementById('visor-btn')) {
    // Crear botó
    const button = document.createElement('button')
    button.id = 'visor-btn'
    button.textContent = '👕 Obrir visor'
    button.style.position = 'fixed'
    button.style.bottom = '20px'
    button.style.right = '20px'
    button.style.padding = '10px'
    button.style.background = '#000'
    button.style.color = '#fff'
    button.style.border = 'none'
    button.style.borderRadius = '8px'
    button.style.cursor = 'pointer'
    button.style.zIndex = '9999'
  
    // Acció quan es clica
    button.onclick = () => {
      if (document.getElementById('visor3d')) return
  
      const visorWrapper = document.createElement('div')
      visorWrapper.id = 'visor3d'
      visorWrapper.style.position = 'fixed'
      visorWrapper.style.bottom = '60px'
      visorWrapper.style.right = '20px'
      visorWrapper.style.width = '420px'
      visorWrapper.style.height = '520px'
      visorWrapper.style.border = '2px solid black'
      visorWrapper.style.zIndex = '10000'
      visorWrapper.style.background = 'white'
      visorWrapper.style.borderRadius = '10px'
      visorWrapper.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)'
      visorWrapper.style.overflow = 'hidden'
  
      const closeBtn = document.createElement('button')
      closeBtn.textContent = '✖'
      closeBtn.style.position = 'absolute'
      closeBtn.style.top = '5px'
      closeBtn.style.right = '5px'
      closeBtn.style.border = 'none'
      closeBtn.style.background = 'transparent'
      closeBtn.style.fontSize = '20px'
      closeBtn.style.cursor = 'pointer'
      closeBtn.style.zIndex = '10001'
      closeBtn.onclick = () => {
        visorWrapper.remove()
      }
  
      const iframe = document.createElement('iframe')
      iframe.src = chrome.runtime.getURL('viewer.html')
      iframe.style.width = '100%'
      iframe.style.height = '100%'
      iframe.style.border = 'none'
  
      visorWrapper.appendChild(closeBtn)
      visorWrapper.appendChild(iframe)
      document.body.appendChild(visorWrapper)
    }
  
    document.body.appendChild(button)
  }
  