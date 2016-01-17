
    var h1 = document.getElementsByTagName('h1')[0],
    sec = 0, min = 0, h = 0;
    var timer = function() {
        sec++;
        if (sec > 59) {
            sec = 0;
            min++;
            if (min > 59) {
                min = 0;
                h++;
            }    
       }
        h1.textContent = (h ? (h > 9 ? h : "0" + h) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);
    };
    
setInterval(timer, 1000);

