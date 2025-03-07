let inp = document.getElementById("input")
const conv1 = document.getElementById("conversion1")
const conv2 = document.getElementById("conversion2")
const conv3 = document.getElementById("conversion3")
const conbtn = document.getElementById("convertbtn")

conbtn.addEventListener("click", function(){
    let num = inp.value
    let metertofeet = num * 3.28084
    let feettometer = num * 0.3048
    let litretogallon = num * 0.264172
    let gallontolitre = num * 3.78541
    let killostopounds = num * 2.20462
    let poundstokillos = num * 0.453592

    conv1.textContent = `${num} meters = ${metertofeet.toFixed(3)} feet | ${num} feet = ${feettometer.toFixed(3)} meters`
    conv2.textContent = `${num} liters = ${litretogallon.toFixed(3)} litres | ${num} gallons = ${gallontolitre.toFixed(3)} liters`
    conv3.textContent = `${num} kilos = ${killostopounds.toFixed(3)} pounds | ${num} pounds = ${poundstokillos.toFixed(3)} kilos`

}) 