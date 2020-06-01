<html>
    <head>
        <meta charset="UTF-8">
        <title>Saúl H. | Preparaci&oacute;n</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <link rel="icon" type="image/png" href="../scr/imgs/foto.png">
        <script src="../scr/p5/p5.js" type="text/javascript"></script>
        <link href="../scr/css/generalCss.css" rel="stylesheet" type="text/css"/>
        <link href="../scr/css/portCss.css" rel="stylesheet" type="text/css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="../scr/js/portafolio.js" type="text/javascript"></script>
    </head>
    <body onload="cambio();" onresize="cambio();"> 
        <nav class="navbar fixed-top navbar-expand-md bg-dark">
            <a class="navbar-brand" href="../index.php#inicio" id='brand'>
                <img class="logo" src="../scr/imgs/foto.png">
            </a>
            <button id="toggler" class="navbar-toggler navbar-toggler-right text-white" type="buton" data-toggle="collapse" data-target="#tocollapse" aria-controls='tocollapse' aria-expanded='false' aria-label='brand'>
                <text class="text-white Tnormal">MENU</text>
            </button>
            <!-- Menú -->
            <div id="tocollapse" class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link nav-link-on text-white Tnormal" href="../index.php#inicio">Presentaci&oacute;n</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-on text-white Tnormal" href="habilidades.php">Preparaci&oacute;n</a></li>
                    <li class="nav-item"><a class="nav-link nav-link-on text-white Tnormal" href="#">Portafolio</a></li>
                </ul>
            </div>
        </nav>
        <div class="bigTitle Tnormal text-dark div-video">
            <div class="espacioPequeño"></div><div class="espacioPequeño"></div><div class="espacioPequeño"></div><div class="hide espacio" id="espacio-C"></div>
            <center>
                Experiencia Laboral
                <hr class="blueBar" style="margin-top: 0px; width: 42.5vw;"/>
                <div class="espacio"></div>
            </center>
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators text-dark">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <center>
                            <div style="width:80%" id="slide1"></div>
                        </center>
                        <div class="espacio"></div><div class="espacio"></div><div class="espacio" id="espacio-C"></div><div class="espacio" id="espacio-C"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <p><p class="Tnormal big-Text text-dark" style="margin-top: -8px;">Programaci&oacute;n</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <center>
                            <div style="width:80%" id="slide2"></div>
                        </center>
                        <div class="espacio"></div><div class="espacio"></div><div class="espacio" id="espacio-C"></div><div class="espacio" id="espacio-C"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <p><p class="Tnormal big-Text text-dark" style="margin-top: -8px;">Dise&ntilde;o</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <center>
                            <div style="width:80%">
                                <div class="row" >
                                    <div class="col-md-2" id='colch'></div>
                                    <div class="col-md-3" id='colch1'>
                                        <center>
                                            <img class="escudo-prep shine" src="../scr/imgs/UAM.svg"/>
                                            <p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Universidad Aut&oacute;noma Metropolitana</p>
                                            <text class="Tlight little-text">(2020)</text>
                                        </center>                 
                                    </div>
                                    <div class="col-md-2" id='colch2'>
                                        <center>
                                            <img class="escudo-prep shine" src="../scr/imgs/alcachofa.svg"/>
                                            <p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Coraz&oacute;n de Alcachofa</p>
                                            <text class="Tlight little-text">(2018)</text>
                                        </center>               
                                    </div>
                                    <div class="col-md-3" id='colch3'>
                                        <center>
                                            <img class="escudo-prep shine" src="../scr/imgs/conamat.png"/>
                                            <p><p class="Tnormal subTitle" style="margin-bottom: 0px;">Colegio Nacional de Matem&aacute;ticas (CONAMAT)</p>
                                            <text class="Tlight little-text">(2018-2019)</text>
                                        </center>               
                                    </div>
                                    <div class="col-md-2" id='colch4'></div>
                                </div>
                                <div class="espacioPequeño"></div>
                                <div class="row" >
                                    <div class="col-md-2" id='colch5'></div>
                                    <div class="col-md-3" id='colch6'>
                                        <p class="Tnormal subTitle" style="margin-bottom: 0px;">
                                            Profesor de programaci&oacute;n (Cursos)
                                        </p>
                                        <p class="Tlight subTitle" style="margin-bottom: 0px;">
                                            Impartia cursos de introducci&oacute;n a la programaci&oacute;n como parte de apoyo acad&eacute;mico para la comunidad de la instituci&oacute;n.
                                        </p>
                                    </div>
                                    <div class="col-md-2" id='colch7'>
                                        <p class="Tnormal subTitle" style="margin-bottom: 0px;">
                                            Profesor de Ingl&eacute;s
                                        </p>
                                        <p class="Tlight subTitle" style="margin-bottom: 0px;">
                                            Impartia clases de ingl&eacte;s b&aacute;sico como preparaci&oacute;n para el ex&aacute;men CENEVAL.
                                        </p>
                                    </div>
                                    <div class="col-md-3" id='colch8'>
                                        <p class="Tnormal subTitle" style="margin-bottom: 0px;">
                                            Profesor
                                        </p>
                                        <p class="Tlight subTitle" style="margin-bottom: 0px;">
                                            Impart&iacute;a clases en el area de matem&aacute;ticas, qu&iacute;mica, historia e historia del arte nivel bachillerato y universidad.
                                        </p>
                                    </div>
                                    <div class="col-md-2" id='colch9'></div>
                                </div>
                            </div>
                        </center>
                        <div class="espacio"></div><div class="espacio"></div>
                        <div class="espacio"></div><div class="espacioPequeño"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <p><p class="Tnormal big-Text text-dark" style="margin-top: -8px;">Educaci&oacute;n</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev text-dark" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                    <span class=" sr-only text-dark">Previous</span>
                </a>
                <a class="carousel-control-next text-dark" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                    <span class="sr-only text-dark">Next</span>
                </a>
            </div>
        </div>
    </body>
</html>
