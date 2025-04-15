const input = document.getElementById('urlInput')
const processarBtn = document.getElementById('processarBtn')
const info = document.getElementById('info')
const imatgeMostrada = document.getElementById('imatgeMostrada')

let imatgeBlob = null

// Enganxar una URL
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const url = input.value.trim()
    if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          imatgeBlob = blob
          imatgeMostrada.src = URL.createObjectURL(blob)
          imatgeMostrada.style.display = 'block'
          info.textContent = '🔗 Imatge carregada des de la URL'
        })
        .catch(() => {
          info.textContent = '❌ No s\'ha pogut carregar la imatge de la URL'
        })
    }
  }
})

// Ctrl+V
window.addEventListener('paste', (event) => {
  const items = (event.clipboardData || event.originalEvent.clipboardData).items
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type.indexOf('image') !== -1) {
      imatgeBlob = item.getAsFile()
      imatgeMostrada.src = URL.createObjectURL(imatgeBlob)
      imatgeMostrada.style.display = 'block'
      info.textContent = '📋 Imatge enganxada amb Ctrl+V'
      break
    }
  }
})

// Click per processar
processarBtn.addEventListener('click', () => {
  if (!imatgeBlob) {
    alert('Primer has d’enganxar una imatge o posar una URL vàlida')
    return
  }

  processarBtn.textContent = '⏳ Processant...'

  const formData = new FormData()
  formData.append('imatge', imatgeBlob, 'imatge.jpg')

  fetch('http://localhost:5000/processar', {
    method: 'POST',
    body: formData
  })
    .then(res => res.blob())
    .then(resultBlob => {
      // Si el blob és massa petit, pot ser un error
      if (resultBlob.size < 0) {
        throw new Error("Resposta sospitosa: el fitxer és massa petit")
      }
  
      const resultatURL = URL.createObjectURL(resultBlob)
      imatgeMostrada.src = resultatURL
      imatgeMostrada.style.display = 'block'
  
      info.textContent = '✅ Imatge processada correctament'
      processarBtn.textContent = '⚙️ Processar imatge'
    })
    .catch(err => {
      console.error('❌ Error:', err)
      info.innerHTML = '❌ <strong>Error processant la imatge</strong>'
      processarBtn.textContent = '⚙️ Processar imatge'
    })
  
})
