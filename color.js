var color1 = document.querySelector('.one');
var color2 = document.querySelector('.two');
var color3 = document.querySelector('.three');
var color4 = document.querySelector('.four');
var color5 = document.querySelector('.five');
var color6 = document.querySelector('.six');
var color7 = document.querySelector('.seven');
var color8 = document.querySelector('.eight');
var color9 = document.querySelector('.nine');
var color10 = document.querySelector('.ten');
var color11 = document.querySelector('.eleven');
var color12 = document.querySelector('.twelve');
var color13 = document.querySelector('.thirteen');
var preview = document.querySelector('.preview-color');
var span = document.getElementById('color-hex');

var arrcolor = ['#EDE6DB','#F8B400','#F4BFBF','#CC704B','#603601','#95CD41','#00AFC1','#C5D8A4','#F05454','#343F56','#7D1E6A','#F9F3F3','#FBCB0A'];

const changePreview = color =>{
    switch(color){
        case 'one' : preview.style.backgroundColor = arrcolor[0] , span.innerText = arrcolor[0];
                    break;
        case 'two' : preview.style.backgroundColor = arrcolor[1], span.innerText = arrcolor[1];
                    break;
        case 'three' : preview.style.backgroundColor = arrcolor[2] , span.innerText = arrcolor[2];
                    break;  
        case 'four' : preview.style.backgroundColor = arrcolor[3] , span.innerText = arrcolor[3];
                    break;
        case 'five' : preview.style.backgroundColor = arrcolor[4] , span.innerText = arrcolor[4];
                    break;
        case 'six' : preview.style.backgroundColor = arrcolor[5] , span.innerText = arrcolor[5];
                    break;
        case 'seven' : preview.style.backgroundColor = arrcolor[6] , span.innerText = arrcolor[6];
                    break;
        case 'eight' : preview.style.backgroundColor = arrcolor[7] , span.innerText = arrcolor[7];
                    break;
        case 'nine' : preview.style.backgroundColor = arrcolor[8] , span.innerText = arrcolor[8];
                    break;
        case 'ten' : preview.style.backgroundColor = arrcolor[9] , span.innerText = arrcolor[9];
                    break;
        case 'eleven' : preview.style.backgroundColor = arrcolor[10] , span.innerText = arrcolor[10];
                    break;
        case 'twelve' : preview.style.backgroundColor = arrcolor[11] , span.innerText = arrcolor[11];
                    break;
        case 'thirteen' : preview.style.backgroundColor = arrcolor[12] , span.innerText = arrcolor[12];
                    break;
        default      : console.log('invalid');
                    break;              
    }
}