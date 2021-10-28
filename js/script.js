let up_btn = document.getElementById('upBtn');
let down_btn = document.getElementById('downBtn');
let left_btn = document.getElementById('leftBtn');
let right_btn = document.getElementById('rightBtn');
let select_btn = document.getElementById('selectBtn');
let start_btn = document.getElementById('startBtn');
let a_btn = document.getElementById('aBtn');
let b_btn = document.getElementById('bBtn');
let character = document.getElementById('character');
let grass_bg = document.getElementById('grassBg');

up_btn.addEventListener('click', function(){
    console.log('up');
    character.classList.add('move');
    character.classList.remove('go-down');
    character.classList.remove('go-left');
    character.classList.remove('go-right');
    character.classList.remove('stop');
    character.classList.remove('play');
    character.classList.add('go-up');
    grass_bg.classList.remove('camera-down');
    grass_bg.classList.remove('camera-left');
    grass_bg.classList.remove('camera-right');
    grass_bg.classList.add('camera-up');
});

down_btn.addEventListener('click', function(){
    console.log('down');
    character.classList.add('move');
    character.classList.remove('go-left');
    character.classList.remove('go-up');
    character.classList.remove('go-right');
    character.classList.remove('stop');
    character.classList.remove('play');
    character.classList.add('go-down');
    grass_bg.classList.remove('camera-up');
    grass_bg.classList.remove('camera-left');
    grass_bg.classList.remove('camera-right');
    grass_bg.classList.add('camera-down');
});

left_btn.addEventListener('click', function(){
    console.log('left');
    character.classList.add('move');
    character.classList.remove('go-down');
    character.classList.remove('go-up');
    character.classList.remove('go-right');
    character.classList.remove('stop');
    character.classList.remove('play');
    character.classList.add('go-left');
    grass_bg.classList.remove('camera-down');
    grass_bg.classList.remove('camera-up');
    grass_bg.classList.remove('camera-right');
    grass_bg.classList.add('camera-left');
});

right_btn.addEventListener('click', function(){
    console.log('right');
    character.classList.add('move');
    character.classList.remove('go-down');
    character.classList.remove('go-up');
    character.classList.remove('go-left');
    character.classList.remove('stop');
    character.classList.remove('play');
    character.classList.add('go-right');
    grass_bg.classList.remove('camera-down');
    grass_bg.classList.remove('camera-left');
    grass_bg.classList.remove('camera-up');
    grass_bg.classList.add('camera-right');
});

select_btn.addEventListener('click', function(){
    console.log('select');
});

start_btn.addEventListener('click', function(){
    console.log('start');
});

a_btn.addEventListener('click', function(){
    console.log('a');
    character.classList.add('move');
    character.classList.remove('go-down');
    character.classList.remove('go-up');
    character.classList.remove('go-left');
    character.classList.remove('go-right');
    character.classList.remove('stop');
    character.classList.add('play');
    grass_bg.classList.remove('camera-down');
    grass_bg.classList.remove('camera-left');
    grass_bg.classList.remove('camera-up');
    grass_bg.classList.remove('camera-right');
});

b_btn.addEventListener('click', function(){
    console.log('b');
    character.classList.add('move');
    character.classList.remove('go-down');
    character.classList.remove('go-up');
    character.classList.remove('go-left');
    character.classList.remove('go-right');
    character.classList.remove('play');
    character.classList.add('stop');
    grass_bg.classList.remove('camera-down');
    grass_bg.classList.remove('camera-left');
    grass_bg.classList.remove('camera-up');
    grass_bg.classList.remove('camera-right');
})