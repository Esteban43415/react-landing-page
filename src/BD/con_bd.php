<?php

global $cnn;

$servername = "localhost";
$username = "root";
$password = "";
$database = "bocadepez_bd";
// Conexion a base de datos casaochoa seleccionado
$cnn = new mysqli($servername, $username, $password, $database);
if ($cnn->connect_error) {
    die();
}
