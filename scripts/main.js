document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header')
  const start = document.querySelector('.start')
  const messages = document.querySelectorAll('.message')

  window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
      header.style.backdropFilter = 'blur(10px)'
      header.style.webkitBackdropFilter = 'blur(10px)'
    } else {
      header.style.backdropFilter = 'none'
      header.style.webkitBackdropFilter = 'none'
    }

    for (let i = 0; i < messages.length; i++) {
      const img = messages[i].querySelector('img')
      if (window.scrollY > img.offsetTop - start.offsetHeight) {
        img.classList.add('layui-anim', 'layui-anim-scale')
      } else {
        img.classList.remove('layui-anim', 'layui-anim-scale')
      }
    }
  })

  const joinGame = document.querySelector("a[href='#download']")
  const download = document.querySelector('#download')

  joinGame.addEventListener('click', e => {
    if (window.scrollTo) {
      e.preventDefault()
      window.scrollTo({ behavior: 'smooth', top: download.offsetTop })
    }
  })

  download.addEventListener('click', () => {
    layer.open({
      title: '消息：',
      content: '正在整合中……'
    })
  })
})
