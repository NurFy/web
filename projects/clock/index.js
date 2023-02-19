function showTime() {

    // TODO: getting data from new Date
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    };
    
    // TODO: if time is more than 12 set to PM :D
    if (h > 12) {
        h = h - 12;
        session = "PM";
    };

    // TODO: catch if the time is more than 2 digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("clockDisplay").innerText = time;

    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime, 1000)

}
showTime();