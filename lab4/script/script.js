// // var block2 = document.getElementById('col-2');
// var block3 = document.getElementById('col-3');
// var block4 = document.getElementById('col-4');
// var block5 = document.getElementById('col-5');
// // var block6 = document.getElementById('col-6');


// (function task1() {
//     let temp = block5.innerHTML;
//     block5.innerHTML = block4.innerHTML;
//     block4.innerHTML = temp;
// })();

// var a = 3,
//     b = 4,
//     c = 5;

// (function task2(a, b, c) {
//     let p = (a + b + c) / 2;
//     let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//     block3.firstElementChild.innerHTML += `<h2> Triangle area is: ${s.toFixed(2)} </h2>`;
// })(a, b, c);

// (function task3() {
//     window.onload = function() {
//         let cookies = document.cookie.split(';');
//         if (cookies.length > 0) {
//             alert('Cookies will be deleted after pressing "Ok" button');
//             cookies.map(item => {
//                 document.cookie = item.substring(item.indexOf('=')) + '=;';
//             });
//             alert("Cookies were deleted!");
//             // location.reload();
//         }
//     }
//     document.querySelector('#submit').onclick = function() {
//         let input = document.querySelector('#number-input').value;
//         let numbers = input.trim().split(' ').map(x => parseInt(x, 10));
//         let maxElem = Math.max.apply(Math, numbers);
//         let counter = 0;
//         numbers.forEach(elem => {
//             if (maxElem == elem) {
//                 counter++;
//             }
//         });
//         document.cookie = `max=${maxElem}`;
//         document.cookie = `times = ${counter}`;
//         if (maxElem != NaN) {
//             alert(`Element ${maxElem} is max, occured ${counter} times`);
//         }

//     };
// })();

// (function task4() {
//     let fontWeightValue = localStorage.getItem('font-weight');
//     if (fontWeightValue) {
//         document.querySelector('#col-6').style.fontWeight = fontWeightValue;
//         document.querySelector(`#${fontWeightValue}`).checked = 'true';
//     }

//     document.querySelector('#bold').onclick = function() {
//         document.querySelector('#col-6').style.fontWeight = 'bold';
//         localStorage.setItem('font-weight', 'bold');


//     };
//     document.querySelector('#normal').onclick = function() {
//         document.querySelector('#col-6').style.fontWeight = 'normal';
//         localStorage.setItem('font-weight', 'normal');
//     };
// })();

// (function task5() {
//     window.addEventListener('scroll', function(e) {
//         if (document.body.scrollTop > 0) {
//             document.querySelector('#col-5').style.backgroundColor = 'greenyellow';
//         } else {
//             document.querySelector('#col-5').style.backgroundColor = 'orange';

//         }
//     });
// })();

// function addInputedText(block) {
//     let content = localStorage.getItem(block.id);

//     if (content) {
//         let backup = block.innerHTML;
//         block.innerHTML = content;

//         let button = document.createElement('button');
//         button.textContent = 'submit';
//         button.id = 'btnSubmit';
//         button.onclick = () => {
//             block.innerHTML = backup;
//             localStorage.removeItem(block.id);
//             loadRegularText(block);
//         };

//         block.appendChild(button);
//     }
// };

// function loadRegularText(block) {
//     let inputArea = document.createElement('input');
//     inputArea.textContent = block.innerHTML;
//     inputArea.style.width = '100px';
//     inputArea.oninput = () => {
//         localStorage.setItem(block.id, inputArea.value);
//     };

//     block.appendChild(inputArea);
// };
// (function task6() {
//     let blocks = [document.querySelector('header'),
//         document.querySelector('#col-2'),
//         document.querySelector('#col-3'),
//         document.querySelector('#col-4'),
//         document.querySelector('#col-5'),
//         document.querySelector('#col-6')
//     ];

//     blocks.forEach(block => {
//         if (localStorage.getItem(block.id)) {
//             addInputedText(block);
//         } else {
//             loadRegularText(block);
//         }
//     });

// })();