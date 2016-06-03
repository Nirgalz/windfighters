var tank1 = [100, "tank1"],
    tank2 = [100, "tank2"],
    tank3 = [100, "tank3"],
    healer = [100, "healer"],
    scout = [100, "scout"],
    fighter =[100, "fighter"],
    events = [];




/*funcation damage wind force 1, may not be scalable*/
function startWind1(hordeux) {
    timerWind1 = setInterval(wind1, 1000);
    function wind1() {
    hordeux[0]--;
    console.log(hordeux[0]);
    }
}
/*stops damage*/
function stopWind1() {
    clearInterval(timerWind1);
}

/*function heal, may not be scalable as well*/
function heal(hordeux) {
    timerHeal = setInterval(heal, 1500);
    function heal() {
        hordeux[0]++;
        console.log(hordeux[0]);
    }
}
/*stop heal*/
function stopHeal() {
    clearInterval(timerHeal);
}



