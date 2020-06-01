function cambio() {
    var w = window.innerWidth;
    var con = document.getElementById("con");
    
if (w > 765) {
        $("#espacio-C").removeClass("hide").addClass("nohide");
        con.innerHTML = '<div class="row"><div class="col-md-5"><p class="Tnormal body-Text text-dark" style="margin-bottom: 0px">Tel&eacute;fono:</p><a href="tel:+525565027645" class="Tlight body-Text text-dark">55-65027645</a>'+
                '<p><a href="tel:+525558284667" class="Tlight body-Text text-dark">55-58284667</a></p><a href="https://www.linkedin.com/in/sa%C3%BAl-ulises-hern%C3%A1ndez-cruz-46a1ba149/" target="_blank">'+
                '<img class="img-redes" src="scr/imgs/linkedIn.svg"/></a><a href="https://sketchfab.com/bear59814" target="_blank"><img class="img-redes" src="scr/imgs/sketchfab.svg"/><br/></a>'+
                '<br/><div><p class="Tnormal body-Text text-dark" style="margin-bottom: 0px">Mandame un correo:</p><br/><form id="correo" action="sendemail.php" method="post">'+
                '<input name="correo" class="input-correo subTitle" type="email" placeholder="Tu Correo" required/><br/><br/><textarea name="msj" class="input-correo mensaje subTitle" type="text" placeholder="Tu Mensaje" required/></textarea><br/><br/>'+
                '<input class="button-sub Tnormal subTitle" type="submit" value="Mandar" name="send"></input></form></div></div><div class="col-md-7"><div class="mapouter"><div class="gmap_canvas">'+
                '<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=aldama%20468%2C%20jorge%20jimenez%20cant%C3%BA%2Cnicolas%20romeo%2Cestado%20de%20mexico%2C%20mexico&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'+
                '</div></div></div></div>';
    } else if (w < 765) {
        $("#espacio-C").removeClass("hide").addClass("nohide");
        con.innerHTML = '<div class="row"><div class="col-1"></div><div class="col-4"><p class="Tnormal body-Text text-dark" style="margin-bottom: 0px">Tel&eacute;fono:</p>'+
                '<a href="tel:+525565027645" class="Tlight body-Text text-dark">55-65027645</a><p><a href="tel:+525558284667" class="Tlight body-Text text-dark">55-58284667</a></p>'+
                '<a href="https://www.linkedin.com/in/sa%C3%BAl-ulises-hern%C3%A1ndez-cruz-46a1ba149/" target="_blank"><img class="img-redes" src="scr/imgs/linkedIn.svg"/>'+
                '</a><a href="https://sketchfab.com/bear59814" target="_blank"><img class="img-redes" src="scr/imgs/sketchfab.svg"/><br/></a><br/></div><div class="col-7">'+
                '<p class="Tnormal body-Text text-dark" style="margin-bottom: 0px">Mandame un correo:</p><br/><form id="correo" action="sendemail.php" method="post">'+
                '<input name="correo" class="input-correo subTitle" type="email" placeholder="Tu Correo" required/><br/><br/>'+
                '<textarea name="msj" class="input-correo mensaje subTitle" type="text" placeholder="Tu Mensaje" required/></textarea><br/><br/>'+
                '<input class="button-sub Tnormal subTitle" type="submit" value="Mandar" name="send"></input></form></div></div><div class="row" ><div class="col-md-12">'+
                '<div class="mapouter"><div class="gmap_canvas">'+
                '<iframe id="gmap_canvas" src="https://maps.google.com/maps?q=aldama%20468%2C%20jorge%20jimenez%20cant%C3%BA%2Cnicolas%20romeo%2Cestado%20de%20mexico%2C%20mexico&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'+
                '</div></div></div></div>';
    }
}