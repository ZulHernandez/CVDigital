function cambio() {
    var w = window.innerWidth;
    var con = document.getElementById("con");
    if (w > 765) {
        $("#espacio-C").removeClass("hide").addClass("nohide");
        $("#colch").removeClass("col-4").addClass("col-md-4");
        $("#colch1").removeClass("col-4").addClass("col-md-4");
        $("#colch2").removeClass("col-4").addClass("col-md-4");
        $("#colch3").removeClass("col-3").addClass("col-md-3");
        $("#colch4").removeClass("col-2").addClass("col-md-2");
        $("#colch5").removeClass("col-2").addClass("col-md-2");
        $("#colch6").removeClass("col-2").addClass("col-md-2");
        $("#colch7").removeClass("col-3").addClass("col-md-3");
        con.innerHTML = '<div class="row"><div class="col-md-1"></div><div class="col-md-2"><center><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/css3.svg"/></a><div class="espacioPequeño"></div><p><p class="Tnormal subTitle">CSS3</p></center></div>' +
                '<div class="col-md-2"><center><a href="https://html5.org/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/html5.svg"/></a>' +
                '<div class="espacioPequeño"></div><p><p class="Tnormal subTitle" style="margin-top: -8px;">HTML5</p></center></div><div class="col-md-2"><center>' +
                '<a href="https://www.oracle.com/java/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/java.svg"/></a><div class="espacioPequeño"></div>' +
                '<p><p class="Tnormal subTitle" style="margin-top: -8px;">Java</p></center></div><div class="col-md-2"><center><a href="https://www.javascript.com/" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/js.svg"/></a><div class="espacioPequeño"></div><p><p class="Tnormal subTitle" style="margin-top: -8px;">JavaScript</p>' +
                '</center></div><div class="col-md-2"><center><a href="https://www.mysql.com/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/mysql.svg"/></a>' +
                '<div class="espacioPequeño"></div><p><p class="Tnormal subTitle" style="margin-top: -8px;">My SQL</p></center></div><div class="col-md-1"></div></div>';
        $("#colch8").removeClass("col-2").addClass("col-md-2");
        $("#colch9").removeClass("col-2").addClass("col-md-2");
        $("#colch10").removeClass("col-1").addClass("col-md-1");
        $("#colch11").removeClass("col-2").addClass("col-md-2");
        $("#colch12").removeClass("col-1").addClass("col-md-1");
        $("#colch13").removeClass("col-2").addClass("col-md-2");
        $("#colch14").removeClass("col-2").addClass("col-md-2");
        $("#colch15").removeClass("col-2").addClass("col-md-3");
        $("#colch16").removeClass("col-4").addClass("col-md-3");
        $("#colch17").removeClass("col-1").addClass("col-md-1");
        $("#colch18").removeClass("col-5").addClass("col-md-5");

    } else if (w < 765) {
        $("#colch").removeClass("col-md-4").addClass("col-4");
        $("#colch1").removeClass("col-md-4").addClass("col-4");
        $("#colch2").removeClass("col-md-4").addClass("col-4");
        $("#colch3").removeClass("col-md-3").addClass("col-3");
        $("#colch4").removeClass("col-md-2").addClass("col-2");
        $("#colch5").removeClass("col-md-2").addClass("col-2");
        $("#colch6").removeClass("col-md-2").addClass("col-2");
        $("#colch7").removeClass("col-md-3").addClass("col-3");
        con.innerHTML = '<div class="row"><div class="col-2"></div><div class="col-4"><center><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">'+
                        '<img class="escudo-prep shine" src="../scr/imgs/css3.svg"/></a><div class="espacioPequeño"></div><p><p class="Tnormal subTitle">CSS3</p></center>'+            
                        '</div><div class="col-4"><center><a href="https://html5.org/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/html5.svg"/></a>'+
                        '<div class="espacioPequeño"></div><p><p class="Tnormal subTitle" style="margin-top: -8px;">HTML5</p></center></div><div class="col-2"></div></div>'+
                        '<div class="espacio"></div><div class="row"><div class="col-2"></div><div class="col-2"><center><a href="https://www.oracle.com/java/" target="_blank">'+
                        '<img class="escudo-prep shine" src="../scr/imgs/java.svg"/></a><div class="espacioPequeño"></div><p><p class="Tnormal subTitle" style="margin-top: -8px;">Java</p>'+
                        '</center></div><div class="col-1"></div><div class="col-2"><center><a href="https://www.javascript.com/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/js.svg"/>'+
                        '</a><div class="espacioPequeño"></div><p><p class="Tnormal subTitle" style="margin-top: -8px;">JavaScript</p></center></div><div class="col-1"></div>'+
                        '<div class="col-2"><center><a href="https://www.mysql.com/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/mysql.svg"/></a>'+
                        '<div class="espacioPequeño"></div><p><p class="Tnormal subTitle" style="margin-top: -8px;">My SQL</p></center></div><div class="col-2"></div></div>';
        $("#colch8").removeClass("col-md-2").addClass("col-2");
        $("#colch9").removeClass("col-md-2").addClass("col-2");
        $("#colch10").removeClass("col-md-1").addClass("col-1");
        $("#colch11").removeClass("col-md-2").addClass("col-2");
        $("#colch12").removeClass("col-md-1").addClass("col-1");
        $("#colch13").removeClass("col-md-2").addClass("col-2");
        $("#colch14").removeClass("col-md-2").addClass("col-2");
        
        $("#colch15").removeClass("col-md-3").addClass("col-2");
        $("#colch16").removeClass("col-md-3").addClass("col-4");
        $("#colch17").removeClass("col-md-1").addClass("col-1");
        $("#colch18").removeClass("col-md-5").addClass("col-5");
    }
}