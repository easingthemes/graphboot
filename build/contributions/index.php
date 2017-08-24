<?php
foreach ($_REQUEST as $key => $value){
  echo "{$key} = {$value}\r\n";
}
if(!isset($_REQUEST['username'])) {
  echo 'no data';
  exit;
}

$url = 'https://github.com/users/' . $_REQUEST['username'] . '/contributions';
echo $url;
function retrieve_contributions_calendar() {
  $data = file_get_contents($url);
  return $data;
}

echo retrieve_contributions_calendar();

?>
