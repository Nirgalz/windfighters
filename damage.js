var tank1 = [100, "tank1"],
    tank2 = [100, "tank2"],
    tank3 = [100, "tank3"],
    healer = [100, "healer"],
    scout = [100, "scout"],
    fighter =[100, "fighter"],
    events = [],
    timerWind1 = null,
    timerHeal = null,
    wind = [1000, 500, 200];

function testShit() {
    console.log(tank1);
    console.log(tank2);
}


/*function damage*/
function startWind1(hordeux, wind) {

    if (timerWind1 == null) {
        console.log(wind);
        timerWind1 = setInterval(wind1, wind);
        function wind1() {
            hordeux[0]--;
            console.log('damage ' +hordeux[0]);
        }
    }
    else {
        stopWind1();
        timerWind1 = setInterval(wind1, wind);
        function wind1() {
            hordeux[0]--;
            console.log('damage2 ' + hordeux[0]);
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
        timerHeal = setInterval(heal, 700);
        function heal() {
            hordeux[0]++;
            console.log('heal ' + hordeux[0]);
        }
    }
    else {
        stopHeal();
        timerHeal = setInterval(heal, 700);
        function heal() {
            hordeux[0]++;
            console.log('heal2 ' + hordeux[0]);
        }
    }
}
/*stop heal*/
function stopHeal() {
    clearInterval(timerHeal);
}



