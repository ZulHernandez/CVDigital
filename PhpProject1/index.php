<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Saúl H. | Presentación</title>
        <link rel="icon" type="image/png" href="scr/imgs/foto.png">
        <script src="scr/p5/sketch.js" type="text/javascript"></script>
        <script src="scr/p5/p5.js" type="text/javascript"></script>
        <link href="scr/css/generalCss.css" rel="stylesheet" type="text/css"/>
        <link href="scr/css/homeCss.css" rel="stylesheet" type="text/css"/>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="scr/js/home.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </head>
    <body onload="cambio();" onresize="cambio();"> 
        <nav class="navbar fixed-top navbar-expand-md bg-dark">
            <a class="navbar-brand" href="index.php#inicio" id='brand'>
                <img class="logo" src="scr/imgs/foto.png">
            </a>
            <button id="toggler" class="navbar-toggler navbar-toggler-right text-white" type="buton" data-toggle="collapse" data-target="#tocollapse" aria-controls='tocollapse' aria-expanded='false' aria-label='brand'>
                <text class="text-white Tnormal">MENU</text>
            </button>
            <!-- Menú -->
            <div id="tocollapse" class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link nav-link-on text-white Tnormal" href="#">Presentaci&oacute;n</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-on text-white Tnormal" href="paginas/habilidades.php">Preparaci&oacute;n</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-on text-white Tnormal" href="paginas/portafolio.php">Portafolio</a></li>
                </ul>
            </div>
        </nav>
        <a name="inicio" id="a"></a>
        <div class="hero" id="hero">
            <div id="canva1">                
            </div>
            <div class="super bigTitle-div">
                <center>
                    <audio src="scr/audio/kwg.mp3" class="music" autoplay loop controls></audio>
                    <img class="img-Portada" src="scr/imgs/foto.png"/>
                    <div class="espacioPequeño"></div>
                    <text class="bigTitle Tlight text-white">Sa&uacute;l Ulises Hern&aacute;ndez Cruz<text>
                    <hr class="whiteBar" style="margin-top: 0px; margin-bottom: -1vw"/>
                    <text class="subTitle text-white Tlight">
                    T&eacute;cnico en Programaci&oacute;n/Estudiante Dise&ntilde;o de la Comunicaci&oacute;n Gr&aacute;fica
                    <div class="espacio"></div>
                    <div class="Tnormal big-Text" style="width: 70%">
                        "Soy un amante de las artes visuales como el dibujo, dise&ntilde;o y pintura a las cuales me dedico en mis tiempos libres.
                        La m&uacute;sica es otro de mis gustos predilectos, la apreciaci&oacute;n de esta y tocar algunos instrumentos."
                    </div>
                    <div class="espacio"></div>
                    <div><a class="nav-link bigTitle text-white Tnormal" href="#contacto"><div style="transform: rotate(-90deg);"><<</div></a></div>
                </center>
            </div>
        </div>
        <div class="espacio"></div>
    <text class="bigTitle Tnormal text-dark"><center>Contacto</center></text>
    <hr class="blueBar""/>
    <div class="espacio"></div>
    <div class='container' id='con'></div>
</div>
<div class="espacio"><a name="contacto" id="a"></a></div>
</div>
</body>
</html>
