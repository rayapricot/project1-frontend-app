"use strict;"

function answer(){
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var output = document.getElementById('output');

   
    //文字として結合
    //var result = input1.value + input2.value;

    var result = input1.value / (input2.value * input2.value)

    output.textContent = result
}