const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const kali = document.getElementById('kali');
const bagi = document.getElementById('bagi');
const output = document.getElementById('output');
let bil1 = 0;
let bil2 = 0;
let hasil = 0;

tambah.addEventListener('click', function(){
    bil1 = parseInt(input1.value);
    bil2 = parseInt(input2.value);
    hasil = bil1 + bil2;
    output.innerHTML = hasil;
});

kurang.addEventListener('click', function(){
    bil1 = parseInt(input1.value);
    bil2 = parseInt(input2.value);
    hasil = bil1 - bil2;
    output.innerHTML = hasil;
});

kali.addEventListener('click', function(){
    bil1 = parseInt(input1.value);
    bil2 = parseInt(input2.value);
    hasil = bil1 * bil2;
    output.innerHTML = hasil;
});

bagi.addEventListener('click', function(){
    bil1 = parseInt(input1.value);
    bil2 = parseInt(input2.value);
    hasil = bil1 / bil2;
    output.innerHTML = hasil;
});