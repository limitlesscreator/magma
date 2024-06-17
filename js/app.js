document.querySelector('.closeBtn').addEventListener('click',() => {
  document.querySelector('.modal-1').style.opacity = 0
  document.querySelector('.modal-1').style.zIndex = -100

  document.querySelector('.modalContactForTwo').style.opacity = 0
  document.querySelector('.modalContactForTwo').style.zIndex = -100
})


if (document.querySelector('.bookBtn')){
  document.querySelector('.bookBtn').addEventListener('click',() => {
    document.querySelector('.modal-1').style.opacity = 1
    document.querySelector('.modal-1').style.zIndex = 100

    document.querySelector('.modalContactForTwo').style.opacity = 1
    document.querySelector('.modalContactForTwo').style.zIndex = 100
  })

}
if(document.querySelector('.bookBtn2')){
  document.querySelector('.bookBtn2').addEventListener('click',() => {
    document.querySelector('.modal-1').style.opacity = 1
    document.querySelector('.modal-1').style.zIndex = 100

    document.querySelector('.modalContactForTwo').style.opacity = 1
    document.querySelector('.modalContactForTwo').style.zIndex = 100
  })

}

if (document.querySelector('.bookBtn3')){
  document.querySelector('.bookBtn3').addEventListener('click',() => {
    document.querySelector('.modal-1').style.opacity = 1
    document.querySelector('.modal-1').style.zIndex = 100

    document.querySelector('.modalContactForTwo').style.opacity = 1
    document.querySelector('.modalContactForTwo').style.zIndex = 100
  })
}







/////////////////////////////////////////////////////////selected btn + store value///////////////////////////////////////

const buttons = document.querySelectorAll('.btnsModal button');
let selectedValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'selected' class from all buttons
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    button.classList.add('selected');

    // Save the selected value
    selectedValue = button.textContent;

    // For demonstration, log the selected value
    console.log('Selected value:', selectedValue);
  });
});

/////////////////////////////////////////////////////////selected btn + store value///////////////////////////////////////
