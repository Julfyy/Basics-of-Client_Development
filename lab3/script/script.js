// var block2 = document.getElementById('col-2');
var block3 = document.getElementById('col-3');
var block4 = document.getElementById('col-4');
var block5 = document.getElementById('col-5');
// var block6 = document.getElementById('col-6');


(function task1() {
    let temp = block5.innerHTML;
    block5.innerHTML = block4.innerHTML;
    block4.innerHTML = temp;
})();

var a = 3,
    b = 4,
    c = 5;

(function task2(a, b, c) {
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    block3.firstElementChild.innerHTML += `<h2> Triangle area is: ${s.toFixed(2)} </h2>`;
})(a, b, c);

(function task3() {
    document.querySelector('form').onsubmit = function() {
        alert('You entered: ' + document.querySelector('input').value);
    };
})();