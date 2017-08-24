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
  return file_get_contents($url);
}

echo retrieve_contributions_calendar();

?>
