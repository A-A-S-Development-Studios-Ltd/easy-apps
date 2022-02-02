<?php
// define variables and set to empty values
$tname = $contact = $tnameErr = $contactErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  if (empty($_POST["tname"])) {
    $tnameErr = "Name is required";
  } else {
    $tname = secureData($_POST["tname"]);
  }
  
  if (empty($_POST["contact"])) {
    $contactErr = "Contact info is required";
  } else {
    $contact = secureData($_POST["contact"]);
  }
  
}

function secureData($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>