<?php 

  header('Content-Type: application/json');
  
  require 'db.php';

  $result = [];

  $name = $_GET['name'];

  foreach ($cds as $cd) {
    
    $author = strtolower($cd['author']);

    if ( strpos($name, substr($author, 0, strlen($name))) !== false ) {

      $result[] = $cd;

    }

  }

  echo json_encode($result);

?>
