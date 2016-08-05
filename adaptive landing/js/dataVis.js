/**
 * Created by Dmitry on 03.08.16.
 */
function setBarWidth(dataElement, barElement, cssProperty, barPercent) {
    var listData = [];
    $(dataElement).each(function() {
        listData.push($(this).html());
    });
    var listMax = Math.max.apply(Math, listData);
    listMax=100;
    $(barElement).each(function(index) {
        $(this).css(cssProperty, (listData[index] / listMax) * barPercent + "%");
    });
}

function beginVis(elemendId,dataElement,barElement, cssProperty, barPercent) {
    var elem = document.getElementById(elementId);

    var sourceBottom = elem.getBoundingClientRect().bottom + window.pageYOffset;

    window.onscroll = function() {
        if (window.pageYOffset > sourceBottom) {
            setBarWidth(dataElement,barElement, cssProperty, barPercent);
        }
    };
}

