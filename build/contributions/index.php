<?php

if(!isset($_POST['username'])) {
  echo '';
  exit;
}

$url = 'https://github.com/users/' . $_POST['username'] . '/contributions';

function retrieve_contributions_calendar() {
  return file_get_contents($url);
}

echo retrieve_contributions_calendar();

?>