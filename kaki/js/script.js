$(window).load(function(){
$(document).ready(function(){
    var x=["12%","38.5%","65.5%","12%","38.5%","65.5%","12%","38.5%","65.5%","12%","38.5%","65.5%"];
    var y=["28%","28%","28%","44%","44%","44%","60%","60%","60%","76%","76%","76%"];

    $(".draggable").draggable({
        revert:"invalid",
        start:function(){

        }
    });

    $(".droppable").droppable({
        accept:".draggable",
        hoverClass:"active",
        drop:function(ev,ui){
            if($(this).attr("name")!=null){
               var d=$(this).attr("name");
               var dgid=$(ui.draggable).attr("data-id")-1;
               $("#"+d).animate({left:x[dgid],top:y[dgid]});
               $("#drop"+$(ui.draggable).attr("data-id")).attr("name",$(this).attr("name"));
               $("#"+d).attr("data-id",$(ui.draggable).attr("data-id"));
            }
            var dpid=$(this).attr("data-id")-1;
            $(this).attr("name",$(ui.draggable).attr("id"));
            $(ui.draggable).attr("data-id",$(this).attr("data-id"));
            $(ui.draggable).animate({left:x[dpid],top:y[dpid]},300);
        }
    });
});
});