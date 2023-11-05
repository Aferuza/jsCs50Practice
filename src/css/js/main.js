
let counter = 0;
let heading = document.querySelector('h1');
//to extract a heading. Then, to manipulate the element we’ve recently found, we can change its innerHTML property:
heading.innerHTML = `Goodbye!`;

function count() {
    counter++;
    alert(counter);
}


function hello() {
    const header = document.querySelector('h1');
    if (header.innerHTML === 'Hello!') {
        header.innerHTML = 'Goodbye!';
    }
    else {
        header.innerHTML = 'Hello!';
    }
}

let counter1 = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
    
    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
});