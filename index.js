var arr = ["1.jpg", "2.jpg", "3.jpg"],
    img = document.getElementById("img"),
    next = document.getElementById("next"),
    previous = document.getElementById('previous');

var s = 0;
var i = 0;
var n ;
next.onclick = function () {
    if (i == arr.length) {
        i = 0;
    } else {
        img.setAttribute("src", arr[i++]);
    }
}
for (var index = 0; index < arr.length; index++) {
    n = index;
}
previous.onclick = function () {
    if (i <=  0) {
        i = n;
    } else {
        img.setAttribute("src", arr[i--]);
    }

}
var classImg =document.querySelectorAll(".classImg")[0];

for(var r = 0 ; r < arr.length; r++){
    classImg.innerHTML += " <img src="+arr[r]+" onclick='clickImg("+r+")' >";
}
function clickImg(params) {
    img.setAttribute("src", arr[params]);
    i = params;
}
setInterval(function () {
    

    if (s == 200) {
        img.setAttribute("src", arr[i])
        if (i == arr.length) {
            i = 0;
        } else {
            i++;
        }

        s = 0;
    } else {
        s++;
    }

}, 10000)
