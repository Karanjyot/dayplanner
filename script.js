
var arr =["","","","","","","","","","","","","","","","","","",""]

init();
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
    $("#input5am").val(arr[9])
    $("#input6am").val(arr[10])
    $("#input7am").val(arr[11])
    $("#input8am").val(arr[12])
    $("#input6pm").val(arr[13])
    $("#input7pm").val(arr[14])
    $("#input8pm").val(arr[15])
    $("#input9pm").val(arr[16])
    $("#input10pm").val(arr[17])
    $("#input11pm").val(arr[18])

    }


//function to adjust css styles based on time
function pusharr(){
    if(time === 5) {
        $("#time5am").css("background-color", "red")   
    }else if (time < 5){
        $("#time5am").css("background-color", "green") 
    }
    
    if(time === 6) {

        $("#time6am").css("background-color", "red") 
    }else if (time < 6){
        $("#time6am").css("background-color", "green") 
    }
    
    
    if(time === 7) {

        $("#time7am").css("background-color", "red") 
    }else if (time < 7){
        $("#time7am").css("background-color", "green") 
    } 
    
    if(time === 8) {

        $("#time8am").css("background-color", "red") 
    }else if (time < 8){
        $("#time8am").css("background-color", "green") 
    }

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

       
    if(time === 18) {

        $("#time6pm").css("background-color", "red") 
    }else if (time < 18){
        $("#time6pm").css("background-color", "green") 
    }

    if(time === 19) {

        $("#time7pm").css("background-color", "red") 
    }else if (time < 19){
        $("#time7pm").css("background-color", "green") 
    }

    if(time === 20) {

        $("#time8pm").css("background-color", "red") 
    }else if (time < 20){
        $("#time8pm").css("background-color", "green") 
    }

    if(time === 21) {

        $("#time9pm").css("background-color", "red") 
    }else if (time < 21){
        $("#time9pm").css("background-color", "green") 
    }

    
    if(time === 22) {

        $("#time10pm").css("background-color", "red") 
    }else if (time < 22){
        $("#time10pm").css("background-color", "green") 
    }

    if(time === 23) {

        $("#time11pm").css("background-color", "red") 
    }else if (time < 23){
        $("#time11pm").css("background-color", "green") 
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

function getInputValue10() {
    
    var inputVal = $("#input5am").val();
    arr[9]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}


function getInputValue11() {
    
    var inputVal = $("#input6am").val();
    arr[10]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue12() {
    
    var inputVal = $("#input7am").val();
    arr[11]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue13() {
    
    var inputVal = $("#input8am").val();
    arr[12]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue14() {
    
    var inputVal = $("#input6pm").val();
    arr[13]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue15() {
    
    var inputVal = $("#input7pm").val();
    arr[14]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue16() {
    
    var inputVal = $("#input8pm").val();
    arr[15]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue17() {
    
    var inputVal = $("#input9pm").val();
    arr[16]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}


function getInputValue18() {
    
    var inputVal = $("#input10pm").val();
    arr[17]=inputVal

    
    localStorage.setItem("todo", JSON.stringify(arr));

}

function getInputValue19() {
    
    var inputVal = $("#input11pm").val();
    arr[18]=inputVal

    
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

$(".save5am").on("click", function () {

    getInputValue10()
    
});
$(".save6am").on("click", function () {

    getInputValue11()
    
});
$(".save7am").on("click", function () {

    getInputValue12()
    
});
$(".save8am").on("click", function () {

    getInputValue13()
    
});
$(".save6pm").on("click", function () {

    getInputValue14()
    
});
$(".save7pm").on("click", function () {

    getInputValue15()
    
});
$(".save8pm").on("click", function () {

    getInputValue16()
    
});
$(".save9pm").on("click", function () {

    getInputValue17()
    
});
$(".save10pm").on("click", function () {

    getInputValue18()
    
});
$(".save11pm").on("click", function () {

    getInputValue19()
    
});
