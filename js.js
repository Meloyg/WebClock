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
    let month = time.getMonth();
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




window.onload = getTime;