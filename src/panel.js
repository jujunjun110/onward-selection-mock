window.onload = () => {
  document.querySelector('#panel').addEventListener('focused', (e) => {
    console.log('triggered')
    console.log(e)
  })
}
