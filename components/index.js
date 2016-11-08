;function Clock(options) {
    var elem;
    var time;

    function getElem() {
        if (!elem) renderHtmlClock();
        return elem;
    }

    function renderHtmlClock() {
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

        var buttonStop = document.createElement("input");
        buttonStop.value = "стоп";
        buttonStop.type = "button";
        buttonStop.className = "stop";

        elem.appendChild(buttonStop);

        var buttonStart = document.createElement("input");
        buttonStart.value = "старт";
        buttonStart.type = "button";
        buttonStart.className = "start";

        elem.appendChild(buttonStart);

        elem.onclick = function (event) {
            if (event.target.classList.contains('start')) {
                start();
            } else if (event.target.classList.contains('stop')) {
                stop();
            }
        };
    }

    function renderTime() {
        var time = new Date();

        var hours = time.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        elem.querySelector(".hour").innerHTML = hours;

        var min = time.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        elem.querySelector(".min").innerHTML = min;

        var sec = time.getSeconds();
        if (sec < 10) {
            sec = "0" + sec;
        }
        elem.querySelector(".sec").innerHTML = sec;
    }

    function start() {
        stop();
        renderTime();
        time = setInterval(renderTime, 1000)
    }

    function stop() {
        clearInterval(time);
    }

    this.getElem = getElem;
    this.stop = stop;
    this.start = start;
}
