<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "jane_eyre";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $msg = $_POST["msg"];

    // Prepare and execute the SQL query
    $sql = "INSERT INTO feedbacks (fullname,email,number,msg)
            VALUES ('$fullname', '$email', '$number', '$msg')";

    if ($conn->query($sql) === TRUE) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>





