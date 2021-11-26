// instantiere trigger-ului de meniu
let $triggerButton1 = document.getElementById('btnTrigger1');
let $spanTrigger1 = document.getElementById('btnSpan1');
$triggerButton1.addEventListener('click', () => {
    $spanTrigger1.classList.toggle('Active');
},true);

let $triggerButton2 = document.getElementById('btnTrigger2');
let $spanTrigger2 = document.getElementById('btnSpan2');
$triggerButton2.addEventListener('click', () => {
    $spanTrigger2.classList.toggle('Active');
},true);

let $triggerButton3 = document.getElementById('btnTrigger3');
let $spanTrigger3 = document.getElementById('btnSpan3');
$triggerButton3.addEventListener('click', () => {
    $spanTrigger3.classList.toggle('Active');
},true);

let $triggerButton4 = document.getElementById('btnTrigger4');
let $spanTrigger4 = document.getElementById('btnSpan4');
$triggerButton4.addEventListener('click', () => {
    $spanTrigger4.classList.toggle('Active');
},true);

let $triggerButton5 = document.getElementById('btnTrigger5');
let $spanTrigger5 = document.getElementById('btnSpan5');
$triggerButton5.addEventListener('click', () => {
    $spanTrigger5.classList.toggle('Active');
},true);

let $triggerButton6 = document.getElementById('btnTrigger6');
let $spanTrigger6 = document.getElementById('btnSpan6');
$triggerButton6.addEventListener('click', () => {
    $spanTrigger6.classList.toggle('Active');
},true);

// Plus rotate
let $plusButton1 = document.getElementById('plus1');
$triggerButton1.addEventListener('click', () => {
    $plusButton1.classList.toggle('Active');
},true);

let $plusButton2 = document.getElementById('plus2');
$triggerButton2.addEventListener('click', () => {
    $plusButton2.classList.toggle('Active');
},true);

let $plusButton3 = document.getElementById('plus3');
$triggerButton3.addEventListener('click', () => {
    $plusButton3.classList.toggle('Active');
},true);

let $plusButton4 = document.getElementById('plus4');
$triggerButton4.addEventListener('click', () => {
    $plusButton4.classList.toggle('Active');
},true);

let $plusButton5 = document.getElementById('plus5');
$triggerButton5.addEventListener('click', () => {
    $plusButton5.classList.toggle('Active');
},true);

let $plusButton6 = document.getElementById('plus6');
$triggerButton6.addEventListener('click', () => {
    $plusButton6.classList.toggle('Active');
},true);

// Traducerea paginii
var urlMenu = document.getElementById('language');
urlMenu.onchange = function (){
    var userOption = this.options[this.selectedIndex];
    if(userOption.value != "nothing") {
        window.open(userOption.value, "Engleza", "");
    }
}

