function cambio() {
    var w = window.innerWidth;
    var su = document.getElementById("slide1");
    var sd = document.getElementById("slide2");

    if (w > 965) {
        $("#espacio-C").removeClass("nohide").addClass("hide");

        su.innerHTML = '<div class="row" ><div class="col-md-2"><center><a href="https://www.marsoft.com.mx" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/mar.svg"/></a><p><p class="Tnormal subTitle" style="ma' +
                'rgin-bottom: 0px;">MARSOFT S.A.S</p><text class="Tlight little-text">(2017-Actualidad)</text></center>' +
                '</div><div class="col-md-2"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Socio Funda' +
                'dor / Director de Diseño</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Empresa dedi' +
                'cada al desarrollo de software y dise&ntilde;o para empresa chicas y medianas.</p></div><div class="col' +
                '-md-2"><center><img class="escudo-prep shine" src="../scr/imgs/yalma.svg"/><p><p class="Tnormal subTitle' +
                '" style="margin-bottom: 0px;">YALMALAY</p><text class="Tlight little-text">(2017)</text></center></div>' +
                '<div class="col-md-2"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Programador Web</p>' +
                '<p class="Tlight subTitle l-text" style="margin-bottom: 0px;">P&aacute;ginas y sistema web para la gesti' +
                '&oacute;n de servicios de est&eacute;ticas a domicilio.</p></div><div class="col-md-2"><center><img class' +
                '="escudo-prep shine" src="../scr/imgs/poli.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;' +
                '">POLILIBRO</p><text class="Tlight little-text">(2016-2017)</text></center></div><div class="col-md-2">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Programador Web</p><p class="Tlight subTi' +
                'tle l-text" style="margin-bottom: 0px;">Herramienta educativa encaminada al uso de software para diseño 3D' +
                ' (Sketchup y 3D Builder).</p></div></div><div class="espacio"></div><div class="row" ><div class="col-md-2">' +
                '<center><img class="escudo-prep shine" src="../scr/imgs/sy.svg"/><p><p class="Tnormal subTitle" style="margi' +
                'n-bottom: 0px;">Synth!</p><text class="Tlight little-text">(2016-2017)</text></center></div><div class="col-md-2">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Programador</p><p class="Tlight subTitle l-text' +
                '" style="margin-bottom: 0px;">App encaminada a los m&uacute;sicos ofreciendo una comunidad web, app de presets' +
                ' en android y un sintetizador digital para Windows.</p></div><div class="col-md-2"><center><img class="escudo-pr' +
                'ep shine" src="../scr/imgs/geo.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Geometry DrawTech</p>' +
                '<text class="Tlight little-text">(2015-2016)</text></center></div><div class="col-md-3"><p class="Tnormal subTitl' +
                'e l-text" style="margin-bottom: 0px;">Programador</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'App de apoyo acad&eacute;mico para la materia de Dibujo t&eacute;cnico constando de un blog de comunicaci&oacute;n ' +
                'para profesores y una app de resoluciones para Windows.</p></div><div class="col-md-3"></div></div>';

        sd.innerHTML = '<div class="row"><div class="col-md-2"><center><a href="https://www.facebook.com/BeruonDev" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/beruon.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Beruon</p>' +
                '<text class="Tlight little-text">(2020-Actualidad)</text></center></div><div class="col-md-2"><p class="Tnormal subTitle l-text" style' +
                '="margin-bottom: 0px;">Diseñador de Publicaciones Digitales</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Encargado en dise&ntilde;o de infografias y dem&aacute;s publicaciones para su p&aacute;gina de facebook.</p></div><div class="col-md-2">' +
                '<center><a href="http://combucar.com.mx/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/combucar.svg"/></a>' +
                '<p><p class="Tnormal subTitle" style="margin-bottom: 0px;">COMBUCAR</p><text class="Tlight little-text">(2018-2019)</text></center>' +
                '</div><div class="col-md-2"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Web</p>' +
                '<p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Web profesional para una compa&ntilde;ia dedicada a la ' +
                'instalaci&oacute;n de tanques GNC en veh&iacute;culos.</p></div><div class="col-md-2"><center><a href="https://www.ideamx.com.mx/" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/idea.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">IDEA</p>' +
                '<text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-md-2"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">' +
                'Dise&ntilde;ador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Web profesional para una empresa con giro en tecnolog&iacute;a alimenticia.' +
                '</p></div></div><div class="espacio"></div><div class="row"><div class="col-md-2"><center><a href="https://www.youtube.com/watch?v=tv5D-lqWiSk" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/belle.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">MEMPHIS BELLE</p>' +
                '<text class="Tlight little-text">(2019)</text></center></div><div class="col-md-2"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">' +
                'Editor de Video</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Postproducci&oacute;n de lyric video para la canci&oacute;n “Quiero' +
                ' Volver (Futuro Contigo)” de la banda de pop-rock mexicana Memphis Belle.</p></div><div class="col-md-2"><center><img class="escudo-prep shine" src="../scr/imgs/milano.svg"/>' +
                '<p><p class="Tnormal subTitle" style="margin-bottom: 0px;">MILANO</p><text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-md-2">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Editorial</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Dise&ntilde;o y acomodo de publicaciones electr&oacute;nicas corporativas.</p></div><div class="col-md-2"><center><img class="escudo-prep shine" src="../scr/imgs/accion.svg"/>' +
                '<p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Central de Acci&oacute;n</p><text class="Tlight little-text">(2017)</text></center></div>' +
                '<div class="col-md-2"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador de Presentaciones</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Dise&ntilde;o de una presentaci&oacute;n profesional-empresarial.</p></div></div>';

        con.innerHTML = '<div class="row"><div class="col-md-5"><p class="Tnormal body-Text text-dark" style="margin-bottom: 0px">Tel&eacute;fono:</p><a href="tel:+525565027645" class="Tlight body-Text text-dark">55-65027645</a>' +
                '<p><a href="tel:+525558284667" class="Tlight body-Text text-dark">55-58284667</a></p><a href="https://www.linkedin.com/in/sa%C3%BAl-ulises-hern%C3%A1ndez-cruz-46a1ba149/" target="_blank">' +
                '<img class="img-redes" src="scr/imgs/linkedIn.svg"/></a><a href="https://sketchfab.com/bear59814" target="_blank"><img class="img-redes" src="scr/imgs/sketchfab.svg"/><br/></a>' +
                '<br/><div><p class="Tnormal body-Text text-dark" style="margin-bottom: 0px">Mandame un correo:</p><br/><form id="correo" action="sendemail.php" method="post">' +
                '<input name="correo" class="input-correo subTitle" type="email" placeholder="Tu Correo" required/><br/><br/><textarea name="msj" class="input-correo mensaje subTitle" type="text" placeholder="Tu Mensaje" required/></textarea><br/><br/>' +
                '<input class="button-sub Tnormal subTitle" type="submit" value="Mandar" name="send"></input></form></div></div><div class="col-md-7"><div class="mapouter"><div class="gmap_canvas">' +
                '<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=aldama%20468%2C%20jorge%20jimenez%20cant%C3%BA%2Cnicolas%20romeo%2Cestado%20de%20mexico%2C%20mexico&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>' +
                '</div></div></div></div>';

        $("#colch").removeClass("col-2").addClass("col-md-2");
        $("#colch1").removeClass("col-3").addClass("col-md-3");
        $("#colch2").removeClass("col-2").addClass("col-md-2");
        $("#colch3").removeClass("col-3").addClass("col-md-3");
        $("#colch4").removeClass("col-2").addClass("col-md-2");
        $("#colch5").removeClass("col-2").addClass("col-md-2");
        $("#colch6").removeClass("col-3").addClass("col-md-3");
        $("#colch7").removeClass("col-2").addClass("col-md-2");
        $("#colch8").removeClass("col-3").addClass("col-md-3");
        $("#colch9").removeClass("col-2").addClass("col-md-2");

    } else if (w > 765) {
        $("#espacio-C").removeClass("hide").addClass("nohide");

        su.innerHTML = '<div class="row" ><div class="col-md-2"><center><a href="https://www.marsoft.com.mx" target="_blank"><img ' +
                'class="escudo-prep shine" src="../scr/imgs/mar.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">' +
                'MARSOFT S.A.S</p><text class="Tlight little-text">(2017-Actualidad)</text></center></div><div class="col-md-4">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Socio Fundador / Director de Diseño</p><p class="Tlight' +
                ' subTitle l-text" style="margin-bottom: 0px;">Empresa dedicada al desarrollo de software y dise&ntilde;o para empresa chicas y medianas.' +
                '</p></div><div class="col-md-2"><center><img class="escudo-prep shine" src="../scr/imgs/yalma.svg"/><p><p class="Tnormal subTitle" styl' +
                'e="margin-bottom: 0px;">YALMALAY</p><text class="Tlight little-text">(2017)</text></center></div><div class="col-md-4"><p class="Tnorma' +
                'l subTitle l-text" style="margin-bottom: 0px;">Programador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'P&aacute;ginas y sistema web para la gesti&oacute;n de servicios de est&eacute;ticas a domicilio.</p></div></div><div class="espacio"></div>' +
                '<div class="row"><div class="col-md-2"><center><img class="escudo-prep shine" src="../scr/imgs/poli.svg"/><p><p class="Tnormal subTitle"' +
                ' style="margin-bottom: 0px;">POLILIBRO</p><text class="Tlight little-text">(2016-2017)</text></center></div><div class="col-md-4">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Programador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Herramienta educativa encaminada al uso de software para diseño 3D (Sketchup y 3D Builder).</p></div><div class="col-md-2"><center>' +
                '<img class="escudo-prep shine" src="../scr/imgs/sy.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Synth!</p><text class="Tlig' +
                'ht little-text">(2016-2017)</text></center></div><div class="col-md-4"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Programador' +
                '</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">App encaminada a los m&uacute;sicos ofreciendo una comunidad web, app de preset' +
                's en android y un sintetizador digital para Windows.</p></div></div><div class="espacio"></div><div class="row"><div class="col-md-2"><center>' +
                '<img class="escudo-prep shine" src="../scr/imgs/geo.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Geometry DrawTech</p>' +
                '<text class="Tlight little-text">(2015-2016)</text></center></div><div class="col-md-4"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">' +
                'Programador</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">App de apoyo acad&eacute;mico para la materia de Dibujo t&eacute;cnico con' +
                'stando de un blog de comunicaci&oacute;n para profesores y una app de resoluciones para Windows.</p></div><div class="col-md-3"></div></div>';

        sd.innerHTML = '<div class="row"><div class="col-md-3"><center><a href="https://www.facebook.com/BeruonDev" target="_blank"><img class="escudo-prep shine" src="' +
                '../scr/imgs/beruon.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Beruon</p><text class="Tlight little-text">(2020-Actualidad)</text>' +
                '</center></div><div class="col-md-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Diseñador de Publicaciones Digitales</p>' +
                '<p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Encargado en dise&ntilde;o de infografias y dem&aacute;s publicaciones para su ' +
                'p&aacute;gina de facebook.</p></div><div class="col-md-3"><center><a href="http://combucar.com.mx/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/combucar.svg"/>' +
                '</a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">COMBUCAR</p><text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-md-3">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Web profesional para una compa&ntilde;ia dedicada a la instalaci&oacute;n de tanques GNC en veh&iacute;culos.</p></div></div><div class="espacio"></div>' +
                '<div class="row" ><div class="col-md-3"><center><a href="https://www.ideamx.com.mx/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/idea.svg"/>' +
                '</a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">IDEA</p><text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-md-3">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Web profesional para una empresa con giro en tecnolog&iacute;a alimenticia.</p></div><div class="col-md-3"><center><a href="https://www.youtube.com/watch?v=tv5D-lqWiSk" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/belle.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">MEMPHIS BELLE</p><text class="Tlight little-text">(2019)</text>' +
                '</center></div><div class="col-md-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Editor de Video</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Postproducci&oacute;n de lyric video para la canci&oacute;n “Quiero Volver (Futuro Contigo)” de la banda de pop-rock mexicana Memphis Belle.</p></div></div><div class="espacio"></div>' +
                '<div class="row" ><div class="col-md-3"><center><img class="escudo-prep shine" src="../scr/imgs/milano.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">MILANO</p>' +
                '<text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-md-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Editorial' +
                '</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;o y acomodo de publicaciones electr&oacute;nicas corporativas.</p></div><div class="col-md-3">' +
                '<center><img class="escudo-prep shine" src="../scr/imgs/accion.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Central de Acci&oacute;n</p><text class="Tlight little-text">(2017)</text>' +
                '</center></div><div class="col-md-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador de Presentaciones</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Dise&ntilde;o de una presentaci&oacute;n profesional-empresarial.</p></div></div>';

        $("#colch").removeClass("col-2").addClass("col-md-2");
        $("#colch1").removeClass("col-3").addClass("col-md-3");
        $("#colch2").removeClass("col-2").addClass("col-md-2");
        $("#colch3").removeClass("col-3").addClass("col-md-3");
        $("#colch4").removeClass("col-2").addClass("col-md-2");
        $("#colch5").removeClass("col-2").addClass("col-md-2");
        $("#colch6").removeClass("col-3").addClass("col-md-3");
        $("#colch7").removeClass("col-2").addClass("col-md-2");
        $("#colch8").removeClass("col-3").addClass("col-md-3");
        $("#colch9").removeClass("col-2").addClass("col-md-2");


    } else {
        $("#espacio-C").removeClass("hide").addClass("nohide");

        su.innerHTML = '<div class="row" ><div class="col-2"><center><a href="https://www.marsoft.com.mx" target="_blank"><img ' +
                'class="escudo-prep shine" src="../scr/imgs/mar.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">' +
                'MARSOFT S.A.S</p><text class="Tlight little-text">(2017-Actualidad)</text></center></div><div class="col-4">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Socio Fundador / Director de Diseño</p><p class="Tlight' +
                ' subTitle l-text" style="margin-bottom: 0px;">Empresa dedicada al desarrollo de software y dise&ntilde;o para empresa chicas y medianas.' +
                '</p></div><div class="col-2"><center><img class="escudo-prep shine" src="../scr/imgs/yalma.svg"/><p><p class="Tnormal subTitle" styl' +
                'e="margin-bottom: 0px;">YALMALAY</p><text class="Tlight little-text">(2017)</text></center></div><div class="col-4"><p class="Tnorma' +
                'l subTitle l-text" style="margin-bottom: 0px;">Programador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'P&aacute;ginas y sistema web para la gesti&oacute;n de servicios de est&eacute;ticas a domicilio.</p></div></div><div class="espacio"></div>' +
                '<div class="row"><div class="col-2"><center><img class="escudo-prep shine" src="../scr/imgs/poli.svg"/><p><p class="Tnormal subTitle"' +
                ' style="margin-bottom: 0px;">POLILIBRO</p><text class="Tlight little-text">(2016-2017)</text></center></div><div class="col-4">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Programador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Herramienta educativa encaminada al uso de software para diseño 3D (Sketchup y 3D Builder).</p></div><div class="col-2"><center>' +
                '<img class="escudo-prep shine" src="../scr/imgs/sy.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Synth!</p><text class="Tlig' +
                'ht little-text">(2016-2017)</text></center></div><div class="col-4"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Programador' +
                '</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">App encaminada a los m&uacute;sicos ofreciendo una comunidad web, app de preset' +
                's en android y un sintetizador digital para Windows.</p></div></div><div class="espacio"></div><div class="row"><div class="col-2"><center>' +
                '<img class="escudo-prep shine" src="../scr/imgs/geo.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Geometry DrawTech</p>' +
                '<text class="Tlight little-text">(2015-2016)</text></center></div><div class="col-4"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">' +
                'Programador</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">App de apoyo acad&eacute;mico para la materia de Dibujo t&eacute;cnico con' +
                'stando de un blog de comunicaci&oacute;n para profesores y una app de resoluciones para Windows.</p></div><div class="col-3"></div></div>';

        sd.innerHTML = '<div class="row"><div class="col-3"><center><a href="https://www.facebook.com/BeruonDev" target="_blank"><img class="escudo-prep shine" src="' +
                '../scr/imgs/beruon.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Beruon</p><text class="Tlight little-text">(2020-Actualidad)</text>' +
                '</center></div><div class="col-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Diseñador de Publicaciones Digitales</p>' +
                '<p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Encargado en dise&ntilde;o de infografias y dem&aacute;s publicaciones para su ' +
                'p&aacute;gina de facebook.</p></div><div class="col-3"><center><a href="http://combucar.com.mx/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/combucar.svg"/>' +
                '</a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">COMBUCAR</p><text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-3">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Web profesional para una compa&ntilde;ia dedicada a la instalaci&oacute;n de tanques GNC en veh&iacute;culos.</p></div></div><div class="espacio"></div>' +
                '<div class="row" ><div class="col-3"><center><a href="https://www.ideamx.com.mx/" target="_blank"><img class="escudo-prep shine" src="../scr/imgs/idea.svg"/>' +
                '</a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">IDEA</p><text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-3">' +
                '<p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Web</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Web profesional para una empresa con giro en tecnolog&iacute;a alimenticia.</p></div><div class="col-3"><center><a href="https://www.youtube.com/watch?v=tv5D-lqWiSk" target="_blank">' +
                '<img class="escudo-prep shine" src="../scr/imgs/belle.svg"/></a><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">MEMPHIS BELLE</p><text class="Tlight little-text">(2019)</text>' +
                '</center></div><div class="col-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Editor de Video</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Postproducci&oacute;n de lyric video para la canci&oacute;n “Quiero Volver (Futuro Contigo)” de la banda de pop-rock mexicana Memphis Belle.</p></div></div><div class="espacio"></div>' +
                '<div class="row" ><div class="col-3"><center><img class="escudo-prep shine" src="../scr/imgs/milano.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">MILANO</p>' +
                '<text class="Tlight little-text">(2018-2019)</text></center></div><div class="col-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador Editorial' +
                '</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;o y acomodo de publicaciones electr&oacute;nicas corporativas.</p></div><div class="col-3">' +
                '<center><img class="escudo-prep shine" src="../scr/imgs/accion.svg"/><p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Central de Acci&oacute;n</p><text class="Tlight little-text">(2017)</text>' +
                '</center></div><div class="col-3"><p class="Tnormal subTitle l-text" style="margin-bottom: 0px;">Dise&ntilde;ador de Presentaciones</p><p class="Tlight subTitle l-text" style="margin-bottom: 0px;">' +
                'Dise&ntilde;o de una presentaci&oacute;n profesional-empresarial.</p></div></div>';

        $("#colch").removeClass("col-md-2").addClass("col-2");
        $("#colch1").addClass("col-3").removeClass("col-md-3");
        $("#colch2").addClass("col-2").removeClass("col-md-2");
        $("#colch3").addClass("col-3").removeClass("col-md-3");
        $("#colch4").addClass("col-2").removeClass("col-md-2");
        $("#colch5").addClass("col-2").removeClass("col-md-2");
        $("#colch6").addClass("col-3").removeClass("col-md-3");
        $("#colch7").addClass("col-2").removeClass("col-md-2");
        $("#colch8").addClass("col-3").removeClass("col-md-3");
        $("#colch9").addClass("col-2").removeClass("col-md-2");

    }
}
