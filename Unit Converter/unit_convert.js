/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthConvert = document.getElementById("length-convert")
const volumeConvert = document.getElementById("volume-convert")
const massConvert = document.getElementById("mass-convert")

convertBtn.addEventListener("click", function() {
    length()
    volume()
    mass()
})

function length() {
    let unit_meter = 3.281
    let unit_feet = (1/unit_meter)
    let length_str = `${inputEl.value} meters = ${((unit_meter)*inputEl.value).toFixed(3)} feets | 
                    ${inputEl.value} feet = ${((unit_feet)*inputEl.value).toFixed(3)} meters`
    lengthConvert.innerHTML = length_str

}

function volume() {
    let unit_litre = 0.264
    let unit_gallon = (1/unit_litre)
    let volume_str = `${inputEl.value} litres = ${((unit_litre)*inputEl.value).toFixed(3)} gallons | 
                    ${inputEl.value} gallons = ${((unit_gallon)*inputEl.value).toFixed(3)} litres`
    volumeConvert.innerHTML = volume_str
}

function mass() {
    let unit_kilogram = 2.204
    let unit_pound = (1/unit_kilogram)
    let mass_str = `${inputEl.value} kilograms = ${((unit_kilogram)*inputEl.value).toFixed(3)} pounds | 
                    ${inputEl.value} pounds = ${((unit_pound)*inputEl.value).toFixed(3)} kilograms`
    massConvert.innerHTML = mass_str
}

