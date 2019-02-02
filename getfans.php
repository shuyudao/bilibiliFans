<?php
header('Access-Control-Allow-Origin:*');
header("Content-type: text/html; charset=utf-8"); 
 
error_reporting(E_ALL ^ E_NOTICE);
$uid = $_GET["uid"];
 
if ($uid != null) {
    $file_contents = curl_get_https('https://api.bilibili.com/x/relation/stat?vmid=' . $uid);
    echo $file_contents;
}

if ($_GET['info_uid']!=null) {
	 $file_contents = curl_get_https('https://api.bilibili.com/x/space/acc/info?mid=' . $_GET['info_uid']);
	 echo $file_contents;
}

function curl_get_https($url){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    $tmpInfo = curl_exec($curl);
    curl_close($curl);
    return $tmpInfo;
}
?>