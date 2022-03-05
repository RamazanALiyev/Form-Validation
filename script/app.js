const form = document.querySelector('#form');
const button = document.querySelector('#button');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const radioKisi = document.querySelector('#kisi');
const radioQadin = document.querySelector('#qadin');
const cins = document.getElementById('cins');
const book = document.getElementById('book');
const sport = document.getElementById('sport');
const travel = document.getElementById('travel');
const strict = document.querySelector('#strict');
//!INPUT NAME
inputName.addEventListener('keydown', function (e) {
    if (inputName.value == ' ') {
        inputName.style.border = '1px solid red';
        inputName.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputName.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }
    else {
        inputName.style.border = '1px solid rgb(0, 255, 0)';
        inputName.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputName.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
})
inputName.addEventListener('blur', function (e) {
    if (inputName.value !== "") {
        inputName.style.border = '1px solid rgb(0, 255, 0)';
        inputName.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputName.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    } else {
        inputName.style.border = '1px solid transparent';
        inputName.parentElement.previousElementSibling.children[0].style.color = 'white';
        inputName.nextElementSibling.innerHTML = ''
    }
})
// -------------------------------------------------------------------------------------------------------------------------
//!INPUT SURNAME
inputSurname.addEventListener('keydown', function (e) {
    if (inputSurname.value == ' ') {
        inputSurname.style.border = '1px solid red';
        inputSurname.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputSurname.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }
    else {
        inputSurname.style.border = '1px solid rgb(0, 255, 0)';
        inputSurname.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputSurname.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
})
inputSurname.addEventListener('blur', function (e) {
    if (inputSurname.value !== "") {
        inputSurname.style.border = '1px solid rgb(0, 255, 0)';
        inputSurname.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputSurname.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    } else {
        inputSurname.style.border = '1px solid transparent';
        inputSurname.parentElement.previousElementSibling.children[0].style.color = 'white';
        inputSurname.nextElementSibling.innerHTML = ''
    }
})
// -------------------------------------------------------------------------------------------------------------------------
inputEmail.addEventListener('keydown', function (e) {
    if (inputEmail.value == '') {
        inputEmail.style.border = '1px solid red';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }
    else if ((inputEmail.value.match(pattern))) {
        inputEmail.style.border = '1px solid rgb(0, 255, 0)';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
    else if (!(inputEmail.value.match(pattern))) {
        inputEmail.style.border = '1px solid red';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }
    else {
        inputEmail.style.border = '1px solid rgb(0, 255, 0)';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
})
inputEmail.addEventListener('blur', function (e) {
    if (inputEmail.value !== "") {
        inputEmail.style.border = '1px solid rgb(0, 255, 0)';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    } else {
        inputEmail.style.border = '1px solid transparent';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'white';
        inputEmail.nextElementSibling.innerHTML = ''
    }
})
// -------------------------------------------------------------------------------------------------------------------------
//!INPUT PASSWORD
inputPassword.addEventListener('keydown', function (e) {
    if (inputSurname.value == ' ') {
        inputPassword.style.border = '1px solid red';
        inputPassword.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputPassword.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }
    else {
        inputPassword.style.border = '1px solid rgb(0, 255, 0)';
        inputPassword.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputPassword.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
})
inputPassword.addEventListener('blur', function (e) {
    if (inputPassword.value !== "") {
        inputPassword.style.border = '1px solid rgb(0, 255, 0)';
        inputPassword.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputPassword.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    } else {
        inputPassword.style.border = '1px solid transparent';
        inputPassword.parentElement.previousElementSibling.children[0].style.color = 'white';
        inputPassword.nextElementSibling.innerHTML = ''
    }
})
// -------------------------------------------------------------------------------------------------------------------------
radioKisi.addEventListener('click', function(e){
    cins.style.color = 'rgb(0, 255, 0)'
})
radioQadin.addEventListener('click', function(e){
    cins.style.color = 'rgb(0, 255, 0)'
})
// -------------------------------------------------------------------------------------------------------------------------
book.addEventListener('click', function(e){
    if(document.getElementById('book').checked==true){
        e.target.nextElementSibling.style.color = 'rgb(0, 255, 0)'
    }else{
        e.target.nextElementSibling.style.color = 'rgb(221, 199, 0)'
    }
})
sport.addEventListener('click', function(e){
    if(document.getElementById('sport').checked==true){
        e.target.nextElementSibling.style.color = 'rgb(0, 255, 0)'
    }else{
        e.target.nextElementSibling.style.color = 'rgb(221, 199, 0)'
    }
})
travel.addEventListener('click', function(e){
    if(document.getElementById('travel').checked==true){
        e.target.nextElementSibling.style.color = 'rgb(0, 255, 0)'
    }else{
        e.target.nextElementSibling.style.color = 'rgb(221, 199, 0)'
    }
})
// ------------------------------------------------------------------
//? =======================================================================================================================
form.addEventListener('submit', function(e){
    e.preventDefault();
    button.classList.toggle('focus');
    if(inputName.value == ''){
        inputName.style.border = '1px solid red';
        inputName.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputName.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }else{
        inputName.style.border = '1px solid rgb(0, 255, 0)';
        inputName.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputName.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
    // -------------------------------------------------------------
    if(inputSurname.value == ''){
        inputSurname.style.border = '1px solid red';
        inputSurname.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputSurname.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }else{
        inputSurname.style.border = '1px solid rgb(0, 255, 0)';
        inputSurname.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputSurname.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
    // -------------------------------------------------------------
    if(inputEmail.value == ''){
        inputEmail.style.border = '1px solid red';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }
    else if((inputEmail.value.match(pattern))){
        inputEmail.style.border = '1px solid rgb(0, 255, 0)';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
    else if(!(inputEmail.value.match(pattern))){
        inputEmail.style.border = '1px solid red';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }
    else{
        inputEmail.style.border = '1px solid rgb(0, 255, 0)';
        inputEmail.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputEmail.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
    // -------------------------------------------------------------
    if(inputPassword.value == ''){
        inputPassword.style.border = '1px solid red';
        inputPassword.parentElement.previousElementSibling.children[0].style.color = 'crimson';
        inputPassword.nextElementSibling.innerHTML = '<i style="color: red" class="fa-solid fa-circle-xmark"></i>'
    }else{
        inputPassword.style.border = '1px solid rgb(0, 255, 0)';
        inputPassword.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
        inputPassword.nextElementSibling.innerHTML = '<i style="color: green" class="fa-solid fa-circle-check"></i>'
    }
    //-----------------------------------------------------------------
    if(document.getElementById('kisi').checked == true){
        radioKisi.parentElement.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
    }else if(document.getElementById('qadin').checked == true){
        radioQadin.parentElement.previousElementSibling.parentElement.previousElementSibling.children[0].style.color = 'rgb(0, 255, 0)';
    }
    else{
        cins.style.color = 'crimson';
    }
    // ------------------------------------------------------------------
    if(document.getElementById('strict').checked===false){
        strict.nextElementSibling.style.color = 'red'
    }else if(document.getElementById('strict').checked === true){
        strict.nextElementSibling.style.color = 'rgb(0, 255, 0)'
    }
})