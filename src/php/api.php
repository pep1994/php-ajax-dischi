<?php 

  header('Content-Type: application/json');

  require 'db.php';

  $result = [];

  $name = $_GET['name'];

  foreach ($cds as $cd) {
    $author = strtolower($cd['author']);

    if (strpos($author, $name) !== false) {
      $result[] = $cd;
    }

  }
  
  echo json_encode($result);

?>