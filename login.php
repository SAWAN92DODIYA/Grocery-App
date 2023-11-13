<?php
    $emailType = $_POST['emailType'];
    $passwordType = $_POST['passwordType'] ;  
    // database connection....
    $conn = new mysqli('localhost','root','','grocery_app');
    if($conn-> connect_error){
        
    }
?>