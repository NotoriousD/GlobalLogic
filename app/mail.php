<?php

$recepient = 'danylo.kruhlikov@nure.ua';
$sitename = 'Nazvanie sayta';

$name = trim($_POST["firstName"]);
$last = trim($_POST["lastName"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phoneNumber"]);
$password = trim($_POST["password"]);
$message = '$name \n$last \n$email \n$phone \n$password';

mail($recepient, $message, "Content-type :text/plain; charset=\"utf-8\"\n From: $recepient");