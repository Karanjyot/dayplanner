init();

var arr =["","","","","","","","","",""]
var a = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#todaysdate").html(a) 


var now = moment();
var time = now.hour()
//var el = document.querySelector('.form-control');
//var data = el.getAttribute('data-value');


// function to get values from local storage
function init() {

    var getToDo = JSON.parse(localStorage.getItem("todo"));

if (getToDo !== null) {
    
    arr=getToDo}

    $("#input1").val(arr[0])
    $("#input2").val(arr[1])
    $("#input3").val(arr[2])
    $("#input4").val(arr[3])
    $("#input5").val(arr[4])
    $("#input6").val(arr[5])
    $("#input7").val(arr[6])
    $("#input8").val(arr[7])
    $("#input9").val(arr[8])
    }


//function to adjust css styles based on time
function pusharr(){

    if(time === 9) {
        $("#time9").css("background-color", "red")   
    }else if (time < 9){
        $("#time9").css("background-color", "green") 
    }
    
    if(time === 10) {

        $("#time10").css("background-color", "red") 
    }else if (time < 10){
        $("#time10").css("background-color", "green") 
    }
    
    
    if(time === 11) {

        $("#time11").css("background-color", "red") 
    }else if (time < 11){
        $("#time11").css("background-color", "green") 
    } 
    
    if(time === 12) {

        $("#time12").css("background-color", "red") 
    }else if (time < 12){
        $("#time12").css("background-color", "green") 
    }
    
    if(time === 13) {

        $("#time1").css("background-color", "red") 
    }else if (time < 13){
        $("#time1").css("background-color", "green") 
    }
    
    if(time === 14) {

        $("#time2").css("background-color", "red") 
    }else if (time < 14){
        $("#time2").css("background-color", "green") 
    }
    
    if(time === 15) {

        $("#time3").css("background-color", "red") 
    }else if (time < 15){
        $("#time3").css("background-color", "green") 
    }
    
    
    if(time === 16) {

        $("#time4").css("background-color", "red") 
    }else if (time < 16){
        $("#time4").css("background-color", "green") 
    }
    
    
    if(time === 17) {

        $("#time5").css("background-color", "red") 
    }else if (time < 17){
        $("#time5").css("background-color", "green") 
    }

}

pusharr()

//functions to get the value of a input field and store it in local storage

function getInputValue() {
    
    var inputVal = $("#input1").val();
    arr[0]=inputVal
    
    localStorage.setItem("todo", JSON.stringify(arr));
}

function getInputValue2() {
    
    var inputVal = $("#input2").val();
    arr[1]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue3() {
    
    var inputVal = $("#input3").val();
    arr[2]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue4() {
    
    var inputVal = $("#input4").val();
    arr[3]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue5() {
    
    var inputVal = $("#input5").val();
    arr[4]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue6() {
    
    var inputVal = $("#input6").val();
    arr[5]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue7() {
    
    var inputVal = $("#input7").val();
    arr[6]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue8() {
    
    var inputVal = $("#input8").val();
    arr[7]=inputVal
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue9() {
    
    var inputVal = $("#input9").val();
    arr[8]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}


// on click functions to safe input values

$(".save1").on("click", function () {

    getInputValue()

});


$(".save2").on("click", function () {

    getInputValue2()
    
});

$(".save3").on("click", function () {

    getInputValue3()
    
});


$(".save4").on("click", function () {

    getInputValue4()
    
});


$(".save5").on("click", function () {

    getInputValue5()
    
});

$(".save6").on("click", function () {

    getInputValue6()
    
});

$(".save7").on("click", function () {

    getInputValue7()
    
});

$(".save8").on("click", function () {

    getInputValue8()
    
});

$(".save9").on("click", function () {

    getInputValue9()
    
});

