<?php
include_once("con_bd.php");


// $query = "SELECT * FROM participantes";
// $data = mysqli_query($cnn,$query);
// $result = mysqli_fetch_all($data,MYSQLI_ASSOC);


echo "hola";
$request_body = json_decode(file_get_contents("php://input"));

$action = $request_body->action;
$data_user = $request_body->data;
if ($action) {
    add_user($data_user, $cnn);
}

function validate_ci($ci, $cnn)
{
    $query = "SELECT count(par_id) as 'count' from participantes where par_ci='" . $ci . "';";
    $data = mysqli_query($cnn, $query);
    $result = mysqli_fetch_all($data, MYSQLI_ASSOC);
    return $result;
}

function add_user($data, $cnn)
{

    $validate_ci = validate_ci($data->par_ci, $cnn)[0]['count'];
    if ($validate_ci < 1) {
        $query = "INSERT INTO `participantes` (`par_ci`, `par_nom`, `par_ape`, `par_fecnac`, `par_sexo`, `par_tel`, `par_email`, `par_pais`, `par_prov`, `par_ciu`, `par_club`, `par_talla`, `par_cont_emer`, `par_cond_med`)" .
            " VALUES ('" . $data->par_ci . "', '"
            . $data->par_nom . "', '"
            . $data->par_ape . "', '"
            . $data->par_fecnac . "', '"
            . $data->par_sexo . "', '"
            . $data->par_tel . "', '"
            . $data->par_email . "', '"
            . $data->par_pais . "', '"
            . $data->par_prov . "', '"
            . $data->par_ciu . "', '"
            . $data->par_club . "', '"
            . $data->par_talla . "', '"
            . $data->par_cont_emer . "', '"
            . $data->par_cond_med . "');";
        // $response = mysqli_query($cnn, $query);
        // echo json_encode($response);
        echo "Guardado";
    } else {
        http_response_code(500); 
        echo json_encode(array("error" => "Mensaje de error que deseas enviar"));
        exit();
    }
}
