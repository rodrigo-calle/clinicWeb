<?php
    $document = filter_input(INPUT_POST, 'document');
    $name_complete = filter_input(INPUT_POST, 'name_complete');
    $phone = filter_input(INPUT_POST, 'phone');
    $address = filter_input(INPUT_POST, 'address');
    if (!empty($document)) {
        if (!empty($name_complete)) {
            if (!empty($phone)) {
                if (!empty($address)) {

                    $host = "us-cdbr-east-04.cleardb.com";
                    $dbusername = "b0acb43e4b9e57";
                    $dbpassword = "e2560c7d";
                    $dbname = "heroku_61cefa9251888fd";
                    // Create connection
                    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
                    if (mysqli_connect_error()) {
                        die('Connect Error (' . mysqli_connect_errno() . ') '
                            . mysqli_connect_error());
                    } else {
                        $sql = "INSERT INTO appointments (document, name_complete, phone, address )
    values ('$document','$name_complete', '$phone', '$address')";
                        if ($conn->query($sql)) {
                            
                          header("Location: formResponse.html"); 
die();
                            /* echo "New record is inserted sucessfully"; */
                        } else {
                            echo "Error: " . $sql . "
" . $conn->error;
                        }
                        $conn->close();
                    }
                } else {
                    echo "address should not be empty";
                    die();
                }
            } else {
                echo "phone should not be empty";
                die();
            }
        } else {
            echo "Name should not be empty";
            die();
        }
    } else {
        echo "Document should not be empty";
        die();
    }


/* 
?> */
