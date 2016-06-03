var tank1 = [100, "tank1"],
    tank2 = [100, "tank2"],
    tank3 = [100, "tank3"],
    healer = [100, "healer"],
    scout = [100, "scout"],
    fighter =[100, "fighter"],
    events = [],
    timerWind1 = null,
    timerHeal = null;

function testShit() {
    console.log(tank1);
    console.log(tank2);
    console.log(timerWind1);
}


/*function damage*/
function startWind1(hordeux) {
    if (timerWind1 == null) {
        timerWind1 = setInterval(wind1, 1000);
        function wind1() {
            hordeux[0]--;
        }
    }
    else {
        stopWind1();
        timerWind1 = setInterval(wind1, 1000);
        function wind1() {
            hordeux[0]--;
        }
    }
}
/*stops damage*/
function stopWind1() {
    clearInterval(timerWind1);
}

/*function heal*/
function heal(hordeux) {
    if (timerHeal == null) {
        timerHeal = setInterval(heal, 1500);
        function heal() {
            hordeux[0]++;
        }
    }
    else {
        stopHeal();
        timerHeal = setInterval(heal, 1500);
        function heal() {
            hordeux[0]++;
        }
    }
}
/*stop heal*/
function stopHeal() {
    clearInterval(timerHeal);
}



