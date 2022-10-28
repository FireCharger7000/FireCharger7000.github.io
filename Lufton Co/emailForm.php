<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $number = $_POST['number'];  
  $date = $_POST['date'];
  $startTime = $_POST['startTime'];
  $endTime = $_POST['endTime'];
  $message = $_POST['message'];


	$email_subject = "Hall Booking Request";  
	$email_body = "You have received a booking request".
                "Name: $name \n".
                "Email: $email \n".
                "Number: $number \n".
                "Date: $date \n".
                "Time: $startTime : $endTime \n".
                "Message:\n".$message;


  $fromEmail = "luftonco@gmail.com";                
  $toEmail = "luftonco@gmail.com";

  $headers = "From: $fromEmail \r\n";
  $headers .= "Reply-To: $email \r\n";
  mail($toEmail,$email_subject,$email_body,$headers);
?>