times = ["2797 millennia", "43 femtoseconds (or smaller)", "about seven", "96 fortnights", "Late Eocene", "91 weeks 46 days 95 hours (approximately)", "5321 millennia", "1946 geological eras", "66 femtoseconds (or smaller)", "last Thursday (except on weekends)", "next Tuesday (unless otherwise redetermined)", "12:00 am February 30, 15,354 BC", "Early December, Furongian Epoch", "39 cubic steradians", "after the heat-death of the universe", "89 inverse acers (unless otherwise redetermined)", "soon", "91 weeks", "2871 geological eras", "49 weeks", "Early Precambrian", "64 months 10 months 45 months (exactly)", "4781 millennia", "late evening, early Ordovician", "100 inverse acres (unless otherwise redetermined)", "Cave Johnson's birthday", "more like six days", "when the cows come home", "68 fortnights", "36 days before next Saturday", "precisely", "when we feel like it", "when it's done"];
activities = ["Twiddling thumbs...", "Calculating infinity...", "Determining the meaning of life...", "Questioning reality...", "Asserting dominance...", "Doing something...", "Approximating approximations...", "Paying bills...", "Baking a cake (this one's real)...", "Testing the ASHPD...", "Waiting for better days...", "Asking annoying questions..."];

bar = null;
activity = null;
time = null;

function changeTime() {
    time.innerHTML = times[(Math.floor(Math.random()*times.length))].toUpperCase();
    setTimeout(changeTime, (Math.floor(Math.random()*10)+1)*500);
}

function changeProgress() {
    if (bar.style.width == "100%") {
        bar.style.width = "0%";
        var div = document.createElement("div");
        div.innerHTML = activities[(Math.floor(Math.random()*activities.length))].toUpperCase();
        activity.insertBefore(div, document.getElementById('messages-bottom'));
    }
    bar.style.width = (Number(bar.style.width.slice(0, -1)) + 5) + "%";
    setTimeout(changeProgress, (Math.floor(Math.random()*10)+1)*1000);
}

function init() {
    bar = document.getElementById('bar-inner');
    activity = document.getElementById('messages-inner');
    time = document.getElementById('time-inner');
    bar.style.width = "0%";
    setTimeout(changeTime, (Math.floor(Math.random()*10)+1)*500);
    setTimeout(changeProgress, (Math.floor(Math.random()*10)+1)*1000);
    setInterval(function () {
        document.getElementById('messages-bottom').scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
}

window.onload = init;