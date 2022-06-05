

// CODE FOR TYPNG CODE

const typetextspan = document.querySelector('.type-text');

const textarray = ['Pizza?', 'Pasta?', 'Lasagna?', 'milkshake?'];

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


// code untuk mengambil data dari file JSON
// 1.buat fungsi untuk ambil semua data pada menu
function dataAllMenu(){
    let menu_all  = fetch('pizza.json').then(e => {return e.json()}).then(el => {
        let fragment_tag_menu_item = ``;
        el.menu.forEach(function(edata){
             fragment_tag_menu_item +=`
             <div class="card card-menu">
                <img src="vendor/img/pizza/${edata.gambar}" class="card-img-top" alt="...">
                <div class="card-body">
                <div class="desc-menu-header">
                <h5 class="card-title nama-menu">${edata.nama}</h5>
                <p class="card-text deskripsi-menu">${edata.deskripsi}</p>
                </div>
                <p class="harga-menu-item">
                    <span class="rp">Rp</span>${edata.harga}
                </p>
                <div class="btn-template-order">
                    <button type="button" class="btn btn-order  text-capitalize">add to order</button>
                </div>
                </div>
             </div>`;
           
        })
        menu_template.innerHTML = fragment_tag_menu_item;
    })
    return menu_all;
}
dataAllMenu()

// 2.seleksi element container yaitu .menu-template 
let menu_template = document.querySelector('.menu-template');

let nav_menu = document.querySelectorAll('.nav-menu');

// 3.lakukan looping untuk element dengan class .nav-menu
nav_menu.forEach(function(el){
    el.addEventListener('click',function(e){
        e.preventDefault()
        let target = e.target.textContent;
    
        // 4.ambil data dari json menggunakan fetch
            fetch('pizza.json')
            .then(e => {return e.json()})
            .then(function(e) {
                   let obj_menu = e.menu;
                   let fragment_tag_menu_item = ``
                       
                //   5.looping data pada json
                    obj_menu.forEach(element => {
                        // 6.cek apakah nav menu yang di klik sama dengan katergi data json
                            // 7.jika target.textContent ==== property kategory
                        if(target === element.kategori){
                           
                            fragment_tag_menu_item += `
                            <div class="card card-menu">
                                  <img src="vendor/img/pizza/${element.gambar}" class="card-img-top" alt="...">
                                <div class="card-body" >
                                <div class="desc-menu-header">
                                <h5 class="card-title nama-menu">${element.nama}</h5>
                                <p class="card-text deskripsi-menu">${element.deskripsi}</p>
                                </div>
                                <p class="harga-menu-item">
                                    <span class="rp">Rp</span>${element.harga}
                                </p>
                                <div class="btn-template-order">
                                    <button type="button" class="btn btn-order text-capitalize">add to order</button>
                                </div>
                                </div>
                            </div>`;
                            menu_template.innerHTML = fragment_tag_menu_item;
                        }
                        // 8.cek jika user memilih / mengclick  kategori all menu di nav menu
                         if(target === 'all menu'){
                            dataAllMenu()
                        }
                    });
            })
    })
})
