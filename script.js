let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let image = document.querySelector("#image");
let buttons = document.getElementById('btns')

red.addEventListener("click", changeRed);
function changeRed() {
    image.style.backgroundImage =
    'url("https://media.istockphoto.com/id/537384323/photo/red-sport-car.jpg?s=612x612&w=0&k=20&c=3ijMUPedyDp3aTMrUlFVuvfa9h5Y0g7-GSZ0GvxxltQ=")';
  image.classList.add("stylist");
}

blue.addEventListener("click", changeBlue);

function changeBlue() {
    image.style.backgroundImage =
    'url("https://p.turbosquid.com/ts-thumb/vQ/UwC28i/zb/hyundai_elantra_mk7_cn7_n_usspec_2022_1000_0001/jpg/1675105007/300x300/sharp_fit_q85/aeddaa24f11d55191f3ec2c84b637d0745d3d09b/hyundai_elantra_mk7_cn7_n_usspec_2022_1000_0001.jpg")';
  image.classList.toggle("stylist");
}

green.addEventListener("click", changeGreen);

function changeGreen() {
    image.style.backgroundImage =
    'url("https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/300x300/sharp_fit_q85/5264ceb1177780d0137678e23667461e6966c327/1200x630_generic_sport_car_gt3_realtime.jpg")';
  image.classList.toggle("stylist");
}

buttons.addEventListener('click' , checked)
function checked()
{
 
  buttons.innerHTML = 
  `
  <p style = 'color: black ; border : 1px solid black; border-radius:8px ;font-size:20px' > sell you 🫡</p>
  
  `
  buttons.style.backgroundColor = 'unset'



}
