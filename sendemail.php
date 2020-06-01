<?php 
    $destino = "saululises1912@gmail.com";
    $correo = $_POST["correo"];
    $msj = $_POST["msj"];
    $contenido = "Correo: " . $correo . "\nMensaje: ". $msj . "";
    mail($destino,"correo, página CV", $contenido);
    header("Location:../SaulPage/index.php#contacto");
?>


<div class="carousel-item active">
                        <center>
                            <div style="width:80%">
                                <div class="row" >
                                    <div class="col-md-2">
                                        <center>
                                            <a href="https://www.conamat.com/" target="_blank">
                                                <img class="escudo-prep zoom" src="../scr/imgs/css3.svg">
                                            </a>
                                        </center>
                                    </div>
                                    <div class="col-md-2">
                                        <center>
                                            <a href="https://www.conamat.com/" target="_blank">
                                                <img class="escudo-prep zoom" src="../scr/imgs/html5.svg">
                                            </a>
                                        </center>
                                    </div>
                                    <div class="col-md-4">
                                        <center>
                                            <a href="https://www.conamat.com/" target="_blank">
                                                <img class="escudo-prep zoom" src="../scr/imgs/java.svg">
                                            </a>
                                        </center>
                                    </div>
                                    <div class="col-md-2">
                                        <center>
                                            <a href="https://www.conamat.com/" target="_blank">
                                                <img class="escudo-prep zoom" src="../scr/imgs/js.svg">
                                            </a>
                                        </center>
                                    </div>
                                    <div class="col-md-2">
                                        <center>
                                            <a href="https://www.conamat.com/" target="_blank">
                                                <img class="escudo-prep zoom" src="../scr/imgs/mysql.svg">
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div class="espacio"></div>
                            <div class="espacio"></div>
                            <div class="carousel-caption d-none d-md-block">
                                <p><p class="Tnormal subTitle" style="margin-top: -8px;">Herramientas de programaci&oacute;n</p>
                            </div>
                        </center>
                    </div>