
window.onload = function() {
    var seconds = document.getElementById("seconds");
    var minutes = document.getElementById("minutes");
    var hour = document.getElementById("hour");
    var sec = 0;
    var min = 0;
    var h = 0;
    var timer = function() {
        if (sec > 59) {
            sec = 0;
            min++;
        }
        if (min > 59) {
            min = 0;
            h++;
        }
        sec++;
        if (sec < 10) {
            seconds.innerHTML ='0'+sec;
        }
        else {
            seconds.innerHTML =sec;
        }
        if (min < 10) {
            minutes.innerHTML = '0' + min + ':';
        }
        else {
            minutes.innerHTML = min + ':';
        }
        if (hour < 10) {
            hour.innerHTML = '0' + h + ":";
        }
        else{
            hour.innerHTML = h + ":";
        }    
    };
    setInterval(timer, 1000);
};

