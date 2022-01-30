const d = document;
let counter = 0;

d.addEventListener('click', (e) => {
    if(e.target.id == 'btn-increment'){
        increment();
    }else if(e.target.id == 'btn-decrement'){
        decremenet();
    }else if(e.target.id == 'btn-reset'){
        reset();
    }
});


function increment() {
    counter++;
    d.getElementById('counter').innerHTML = counter;
}

function decremenet() {
    counter--;
    d.getElementById('counter').innerHTML = counter;
}

function reset(){
    counter = 0;
    d.getElementById('counter').innerHTML = counter;
}