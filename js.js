const getTime = () => {

    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let second = time.getSeconds();
    if (second.toString().length == 1) {
        second = "0"+second;
    }


    let content = hour + ": " + min + ": " + second;
    document.getElementById("clock").innerHTML = content;

    let t = setTimeout(getTime, 500);

    console.log(hour,min, second);
}

const getName = () => {
    let name = document.getElementById("name").value;
    document.getElementById("clock") += name;
    console.log(name);
}





window.onload = getTime;