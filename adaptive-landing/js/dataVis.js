/**
 * Created by Dmitry on 03.08.16.
 */
function setBarWidth(dataElement, barElement, barPercent) {
    var listData = [];
    $(dataElement).each(function() {
        listData.push($(this).html());
    });
    //var listMax = Math.max.apply(Math, listData);
    listMax=100;
    var width=0;
    $(barElement).each(function(index) {
        width=(listData[index] / listMax) * barPercent + "%";
        $(this).css({
            "animation": "grow-width 3s",
            "animation-play-state": "running",
            "width":width
        });

    });
    $(".dataVis1 li span.numbers").css({"display":"block"});
}