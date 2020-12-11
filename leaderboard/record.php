a<?php
    $error="Please fill out the box";
    $message = 'You have been recorded into your records';
    if(isset($_POST['submit']))
    {
        if(empty($_POST["name"]))
        {
            alert($error)
        }
    }
    else
    {
        if(file_exists('leaderboard.json'))
        {
            $current_data = file_get_contents("leaderboard.json");
            json_decode($current_data, true);
            $newwinner = array(
                'rank' =>
                'name' => $_POST['name'],
                'saved'=>
                'tanks'=>
            );
            $newdata[]= $newwinner;
            $final_data = json_encode($newdata);
            if(file_put_contents("leaderboard.json", $final_data))
            {
                alert($message)
            }
        }
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <script type="text/javascript" src="jquery-1.4.3.min.js"></script>
        <script type="text/javascript" src="leaderboard.js"></script>
        <script type="text/javascript" src="leaderboard.json"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <style>
            body{
                background-image:url('outer_space.jpg');
                background-repeat:repeat;
                color:white;
            }
        </style>
    </head>
  <body>
      <form method='POST'>
          <Label>Name</Label>
          <input type="text" name = "name" class='form-control'/><br/>
          <input type="submit" name='submit' value="Data" class='btn'>
      </form>
  </body>
</html>