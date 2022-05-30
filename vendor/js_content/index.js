

// CODE FOR TYPNG CODE

const typetextspan = document.querySelector('.type-text');

const textarray = ['Pizza?', 'Pasta?', 'Lasagna?', 'Drink?'];

const typingdelay = 120;
const erasingdelay = 20;
const newtextdelay = 120;

let textarrayindex = 0;
let chartindex = 0;

function type() {
    if (chartindex < textarray[textarrayindex].length) {
        typetextspan.textContent += textarray[textarrayindex].charAt(chartindex);
        chartindex++;
        setTimeout(type, typingdelay);
    } else {
        // eraser
        setTimeout(erase, newtextdelay);
    }
}

function erase() {
    if (chartindex > 0) {
        typetextspan.textContent = textarray[textarrayindex].substring(0, chartindex - 1);
        chartindex--;
        setTimeout(erase, newtextdelay);
    } else {
        textarrayindex++;
        if (textarrayindex >= textarray.length) textarrayindex = 0;
        setTimeout(type, typingdelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, newtextdelay + 250);
});


// END CODE TYPING CODE