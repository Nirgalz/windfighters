var tank1 = [100, "tank1"],
    tank2 = [100, "tank2"],
    tank3 = [100, "tank3"],
    healer = [100, "healer"],
    scout = [100, "scout"],
    fighter =[100, "fighter"];


function stop() {
    clearInterval(timer);
}

function start(hordeux){
    timer = setInterval(wind, 1000);

    function wind() {
    hordeux[0]--;
    console.log(hordeux[0]);
    }
}



