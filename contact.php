<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $complete_name = $_POST['Complete_Name'];
    $email_address = $_POST['Email_Address'];
    $phone_no = $_POST['Phone_No'];
    $city_live = $_POST['City_Live'];
    $age_old = $_POST['Age_Old'];

    $to = "payonner2000@gmail.com"; // Replace with your email address
    $subject = "New Signup Submission";

    $message = "Complete Name: $complete_name\n";
    $message .= "Email Address: $email_address\n";
    $message .= "Phone Number: $phone_no\n";
    $message .= "City: $city_live\n";
    $message .= "Age: $age_old\n";

    $headers = "From: no-reply@yourdomain.com\r\n"; // Replace with your domain
    $headers .= "Reply-To: $email_address\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for signing up!";
    } else {
        echo "There was an error processing your request. Please try again later.";
    }
}
?>
