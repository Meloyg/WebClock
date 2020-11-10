const getTime = () => {

    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let second = time.getSeconds();
    if (second.toString().length == 1) {
        second = "0" + second;
    }
    if (min.toString().length == 1) {
        min = "0" + min;
    }

    let date = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();

    let date1 = date + "/" + month + "/" + year;


    let content = hour + ": " + min + ": " + second;

    document.getElementById("clock").innerHTML = content;
    document.getElementById("clock").innerHTML += "<br><div id='date'>"+date1+"</div>";

    
    let t = setTimeout(getTime, 500);

    console.log(hour, min, second);
}

const showLogin = () => {
    document.getElementById("loginPage").style.display = "block";
}

const closeTap = () => {
    document.getElementById("loginPage").style.display = "none";
}

const checkPassword = () => {
    
}

!function (d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0]; 
     if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id; 
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs); 
    } 
}

(document, 'script', 'weatherwidget-io-js');


const showCalendar = () => {
    alert(1);
}





window.onload = getTime;