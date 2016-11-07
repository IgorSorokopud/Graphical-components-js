function Clock(options) {
    var elem = options.elem;
    var time;
    var spanHours = elem.querySelector(".hour");
    var spanMin = elem.querySelector(".min");
    var spanSec = elem.querySelector(".sec");

    function render() {
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
        render();
        time = setInterval(render, 1000)
    }

    function stop() {
        clearInterval(time);
    }

    this.start = start;
    this.stop = stop;
}
