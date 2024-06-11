document.querySelector('.closeBtn').addEventListener('click',() => {
  document.querySelector('.modal-1').style.opacity = 0
  document.querySelector('.modal-1').style.zIndex = -100

  document.querySelector('.modalContactForTwo').style.opacity = 0
  document.querySelector('.modalContactForTwo').style.zIndex = -100
})


document.querySelector('.bookBtn').addEventListener('click',() => {
  document.querySelector('.modal-1').style.opacity = 1
  document.querySelector('.modal-1').style.zIndex = 100

  document.querySelector('.modalContactForTwo').style.opacity = 1
  document.querySelector('.modalContactForTwo').style.zIndex = 100
})

document.querySelector('.bookBtn2').addEventListener('click',() => {
  document.querySelector('.modal-1').style.opacity = 1
  document.querySelector('.modal-1').style.zIndex = 100

  document.querySelector('.modalContactForTwo').style.opacity = 1
  document.querySelector('.modalContactForTwo').style.zIndex = 100
})

document.querySelector('.bookBtn3').addEventListener('click',() => {
  document.querySelector('.modal-1').style.opacity = 1
  document.querySelector('.modal-1').style.zIndex = 100

  document.querySelector('.modalContactForTwo').style.opacity = 1
  document.querySelector('.modalContactForTwo').style.zIndex = 100
})
