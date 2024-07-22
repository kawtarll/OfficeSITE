<?php 
$UtilisateurNom = filter_input(INPUT_POST, 'UtilisateurNom', FILTER_SANITIZE_STRING);
$UtilisateurGmail = filter_input(INPUT_POST, 'UtilisateurGmail', FILTER_SANITIZE_EMAIL);

if (!empty($UtilisateurNom)) {
    if (!empty($UtilisateurGmail)) {
        $host = "localhost";
        $dbUtilisateurNom = "root";
        $dbUtilisateurGmail = "";
        $dbname = "office";
        $conn = new mysqli($host, $dbUtilisateurNom, $dbUtilisateurGmail, $dbname);

        if ($conn->connect_error) {
            die('Connection Error ('.$conn->connect_errno.') '.$conn->connect_error);
        } else {
            $stmt = $conn->prepare("INSERT INTO newsletter (UtilisateurNom, UtilisateurGmail) VALUES (?, ?)");
            $stmt->bind_param("ss", $UtilisateurNom, $UtilisateurGmail);

            if ($stmt->execute()) {
                echo "New record inserted successfully";
            } else {
                echo "Error: " . $stmt->error;
            }

            $stmt->close();
            $conn->close();
        }
    } else {
        echo "Email should not be empty";
        die();
    }
} else {
    echo "Username should not be empty";
    die();
}
?>



