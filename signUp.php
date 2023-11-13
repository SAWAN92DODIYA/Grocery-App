  

<?php
     echo "ramuu";
    $textType = $_POST['textType'];
    $emailType = $_POST['emailType'];
    $passwordType = $_POST['passwordType'];
    
    // connection to the database
    $conn = new mysqli('localhost', 'root', '', 'grocery_app');
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO signup (name, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $textType, $emailType, $passwordType);
        
        if($stmt->execute()) {
            echo "SignUp Successfully....";
        } else {
            echo "Error: " . $stmt->error;
        }
        
        $stmt->close();
        $conn->close();
    }
?>
