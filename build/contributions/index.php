<?php
foreach ($_POST as $key => $value){
  echo "{$key} = {$value}\r\n";
}
if(!isset($_POST['username'])) {
  echo 'no data';
  exit;
}

$url = 'https://github.com/users/' . $_POST['username'] . '/contributions';

function retrieve_contributions_calendar() {
  return file_get_contents($url);
}

echo retrieve_contributions_calendar();

?>
