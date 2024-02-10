function updateClock() {
    var currentTime = new Date();
    var date = currentTime.getDate();
    var month = eval(currentTime.getMonth() + 1);
    var year = currentTime.getFullYear() % 100;
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var day = currentTime.getDay();

    document.getElementById("date").innerText = date;
    document.getElementById("month").innerText = month;
    document.getElementById("year").innerText = year;

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("second").innerText = seconds;

    switch (day) {
        case 0:
            document.getElementById('sun').disabled = false;
            document.getElementById('sun').checked = true;
            break;
        case 1:
            document.getElementById('mon').disabled = false;
            document.getElementById('mon').checked = true;
            break;
        case 2:
            document.getElementById('tue').disabled = false;
            document.getElementById('tue').checked = true;
            break;
        case 3:
            document.getElementById('wed').disabled = false;
            document.getElementById('wed').checked = true;
            break;
        case 4:
            document.getElementById('thu').disabled = false;
            document.getElementById('thu').checked = true;
            break;
        case 5:
            document.getElementById('fri').disabled = false;
            document.getElementById('fri').checked = true;
            break;
        case 6:
            document.getElementById('sat').disabled = false;
            document.getElementById('sat').checked = true;
            break;
    }

    setTimeout(updateClock, 1000);
}
updateClock();