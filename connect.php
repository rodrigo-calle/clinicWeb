<?php
    $document = filter_input(INPUT_POST, 'document');
    $name_complete = filter_input(INPUT_POST, 'name_complete');
    $phone = filter_input(INPUT_POST, 'phone');
    $address = filter_input(INPUT_POST, 'address');
    if (!empty($document)) {
        if (!empty($name_complete)) {
            if (!empty($phone)) {
                if (!empty($address)) {

                    $host = "localhost";
                    $dbusername = "root";
                    $dbpassword = "root";
                    $dbname = "citas";
                    // Create connection
                    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);
                    if (mysqli_connect_error()) {
                        die('Connect Error (' . mysqli_connect_errno() . ') '
                            . mysqli_connect_error());
                    } else {
                        $sql = "INSERT INTO appointment (document, name_complete, phone, address )
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
