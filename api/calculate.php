<?php

$raw_html_data = file_get_contents('php://input');

error_log("raw_html_data: " . $raw_html_data);

header("Content-Type: application/json; charset=UTF-8");

$amount = 0;
$rate = 0;


if (isset($raw_html_data)) {

    $json_data = json_decode($raw_html_data);


    $amount = $json_data->amount;
    $rate = $json_data->rate;


    $tax = ($amount * $rate) / 100;

    $total = $amount + $tax;
} else {
    error_log("expected some HTML body in this request, defaulting to zero");
}


$data = array(
    "tax" => $tax,
    "total" => $total
);

echo json_encode($data);
