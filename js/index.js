document.addEventListener('DOMContentLoaded', () => {
  let start = document.querySelector('.start')
  let messages = document.querySelectorAll('.message')

  window.addEventListener('scroll', () => {
    for (let i = 0; i < messages.length; i++) {
      let img = messages[i].querySelector('img')
      if (window.pageYOffset >= img.offsetTop - start.offsetHeight) {
        img.className = 'layui-anim layui-anim-scale'
      } else {
        img.className = ''
      }
    }
  })

  let joinGame = document.querySelector("a[href='#download']")
  let download = document.querySelector('#download')

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
