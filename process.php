<?php
$name = $email = $gender = $fname = $fulname= $res= "";
$tam = $eng = $math =$sci = $ss = $mbno = 0;
$tot = $avg = 0;
$con =mysqli_connect("localhost","root","","test")or die("Connection Failed..");
    if(!$con)
    {
      echo "<script>alert('Connection Affected!');</script>";
    }
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $name = test_input($_POST["name"]);
    $fname = test_input($_POST["fname"]);

    $fulname=$name." ".$fname;
    $add = test_input($_POST["add"]);
    $email = test_input($_POST["mail"]);
    $mbno = test_input($_POST["mbno"]);
    $gender = test_input($_POST["gender"]);

    $tam = test_input($_POST["tam"]);
    $eng = test_input($_POST["eng"]);
    $math = test_input($_POST["math"]);
    $sci = test_input($_POST["sci"]);
    $ss = test_input($_POST["ss"]);

    $tot=$tam+$eng+$math+$sci+$ss;
    $avg=$tot/5;

    if($tam>=35 && $eng>=35 && $math>=35 && $sci>=35 && $ss>=35)
    {
      $res = "Pass";
    }
    else{
      $res = "Fail";
    }

    try{
      $sql = "INSERT INTO Students(StuName,Mail,Phone,Gender,Total,Average,Result) VALUES('$fulname','$email',$mbno,'$gender',$tot,$avg,'$res')";

    if(mysqli_query($con,$sql))
    {
      echo "<script>alert('Data Submitted Successfully');</script>";
    }
    else{
      echo "Error Occured";
    }
    }
    catch (MySQLDuplicateKeyException $e) {
      // duplicate entry exception
      $e->getMessage();
      echo "<script>alert('Already Submitted!');</script>";
  }
  catch (MySQLException $e) {
      // other mysql exception (not duplicate key entry)
      $e->getMessage();
      echo "<script>alert('Data Repetation Occurred!');</script>";
  }
  catch (Exception $e) {
      // not a MySQL exception
      $e->getMessage();
      echo "<script>alert('Error Occurred!!');</script>";
  }
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  
?>