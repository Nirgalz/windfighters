var tank1 = [100],
    tank2 = [100,],
    tank3 = [100,],
    healer = [100,],
    scout = [100,],
    fighter =[100,];


function stop() {
    clearInterval(timer);
}

function start(){
    timer = setInterval(wind, 1000);
}


function wind() {
    tank1[0]--;
    console.log(tank1[0]);
}
