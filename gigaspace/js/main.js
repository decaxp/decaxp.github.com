/**
 * Created by Dmitry on 28.08.16.
 */
document.addEventListener('DOMContentLoaded', function() {
    var list=document.getElementsByClassName("header-logo-svg-text2");
    var i;
    var attr;
    if (msieversion()==0 || !firefox()){
        attr=117;
    }else{
        attr=117;
    }
    if (firefox()){
        attr=117;
    }
    for (i = 0; i < list.length; i++) {
            list[i].setAttribute("x",attr);
    }
});