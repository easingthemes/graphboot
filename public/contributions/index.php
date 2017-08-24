<?php
if(!isset($_REQUEST['username'])) {
  echo 'no data';
  exit;
}

$url = 'https://github.com/users/' . $_REQUEST['username'] . '/contributions/';
$data = file_get_contents($url);

echo  $data;
?>
