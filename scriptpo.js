function init(){
  nombre= 1;
tb = [];
}
function change(id){
  document.getElementById("carrer_"+id).style.border ="1px solid orange";
  nombre++;
  if (nombre%2 === 0) {
    var test = document.getElementById("carrer_"+id).id ;
    tb.push(test);
  }else {
    document.getElementById(tb).style.border ="1px solid black";
    document.getElementById(tb).classList.remove(tb);
    document.getElementById(tb).classList.add("carrer_"+id);
    document.getElementById("carrer_"+id).classList.remove("carrer_"+id);
    document.getElementById("carrer_"+id).classList.add(tb);
    setTimeout(function () {
      tb = [];
    }, 10);
  }
}
