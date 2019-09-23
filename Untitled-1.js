function Stopwatch() {
    let duration = 0.0;
    let stopWatchStatus = "stop";
    let timerId;

    this.strat = function () {
        if (stopWatchStatus == "start") {
            return new Error("It's alrady started!");
        } else {
            stopWatchStatus = "start";
            timerId = setInterval(() => duration++, 1000);
        }
    };
    this.rest = function () {
        if (stopWatchStatus == "start") {
            this.stop();
            duration = 0;
            stopWatchStatus = "stop";
        } else {
            duration = 0;
            stopWatchStatus = "stop";
        }
    };

    this.stop = function () {
        if (stopWatchStatus == "stop") {
            return new Error("It's alrady stoped!");
        } else {
            stopWatchStatus = "stop";
            clearInterval(timerId);
        }
    };
    Object.defineProperty(this, "display", {
        get: function () {
            return duration;
        },
    });
    Object.defineProperty(this, "status", {
        get: function () {
            return stopWatchStatus;
        },
    });
}

let sw = new Stopwatch();