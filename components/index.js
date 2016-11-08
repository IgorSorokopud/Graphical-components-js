function Clock(options) {
    var elem;
    var time;
    var spanHours = elem.querySelector(".hour");
    var spanMin = elem.querySelector(".min");
    var spanSec = elem.querySelector(".sec");

    function renderClock() {
        elem = document.createElement("div");
        elem.id = "clock";
        elem.className = "clock";

        var spanTime;
        options.items.forEach(function (item, i, arr) {
            spanTime = document.createElement("span");
            spanTime.className = item;
            spanTime.textContent = "00";
            elem.appendChild(spanTime);
        });
    }

    function renderTime() {
        var time = new Date();

        var hours = time.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        spanHours.innerHTML = hours;

        var min = time.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        spanMin.innerHTML = min;

        var sec = time.getSeconds();
        if (sec < 10) {
            sec = "0" + sec;
        }
        spanSec.innerHTML = sec;

    }

    function start() {
        stop();
        renderTime();
        time = setInterval(renderTime, 1000)
    }

    function stop() {
        clearInterval(time);
    }

    this.renderClock = renderClock;
    this.start = start;
    this.stop = stop;
}
