var block1 = document.querySelector('header');
var block2 = document.querySelector('#col-2');
var block3 = document.querySelector('#col-3');
var block4 = document.querySelector('#col-4');
var block5 = document.querySelector('#col-5');
var block6 = document.querySelector('#col-6');
var block7 = document.querySelector('footer');
var form = document.querySelector('form');
let div = document.querySelector("#git-output");
let inputArray = document.querySelector("#numbers-input");

var blocks = [block1, block2, block3, block4, block5, block6, block7];


function task1() {
    let delay = 500;

    function swapContent(index) {
        [blocks[index].innerHTML, blocks[(index - 1) % 6].innerHTML] = [blocks[(index - 1) % 6].innerHTML, blocks[index].innerHTML];

        if (index < 6) {
            delay += 500;
            setTimeout(swapContent, delay, ++index);
        }
    };

    setTimeout(swapContent, delay, 1);
}




(function task2() {

    window.addEventListener('scroll', function() {
        setTimeout(function() {
            // if (block1.style.fontStyle == 'italic') {
            //     block1.style.fontStyle = '';
            //     block6.style.fontStyle = '';
            // } else {
            block1.style.fontStyle = 'italic';
            block6.style.fontStyle = 'italic';
            // }
        }, 5000);


    });
    setInterval(() => {
        return block5.style.fontStyle == 'italic' ?
            block5.style.fontStyle = '' : block5.style.fontStyle = "italic"

    }, 5000)


})();


//Не працює після того як видає помилку, треба оновлювать

function task3() {

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = document.querySelector('#name-input').value;
        let repos_name = document.querySelector('#repository-name').value;
        let url = `https://api.github.com/repos/${name}/${repos_name}/commits`;
        fetch(url).then((res) => {
            if (!res.ok) {
                div.innerHTML = 'Error:  ' + res.statusText;
                div.style.backgroundColor = 'red';
                div.style.height = '100px';
                let button = document.createElement("button");
                button.textContent = "OK";
                button.addEventListener("click", () => { div.style.display = "none"; });
                div.appendChild(button);
            }
            return res.json();

        }).then((content) => {
            content.forEach((item) => {
                let li = document.createElement('li');
                let str = item.commit.author.name + ": " + item.commit.message;
                li.innerHTML = str;
                div.appendChild(li);
            });
        });
    });
}

task3();

let callback1 = function(callback) {
    console.log("Callback 1");
    callback();
};

let callback2 = function() {
    console.log("Callback 2");
};

function task4(cb1, cb2) {
    cb1(cb2);
};
task4(callback1, callback2);


function bubbleSort(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

let task5 = () => {
    document.querySelector('#sort-button').onclick = () => {
        let arr = inputArray.value.match(/-?\d+\.?\d*/g).map(Number);
        alert(bubbleSort(arr));
        inputArray.value = '';
    };
};
task5();