<?php
if(!isset($_REQUEST['username'])) {
  echo 'no data';
  exit;
}

$url = 'https://github.com/users/' . $_REQUEST['username'] . '/contributions';

function retrieve_contributions_calendar() {
  $data = file_get_contents($url);
  return $data;
}

echo retrieve_contributions_calendar();
?>
