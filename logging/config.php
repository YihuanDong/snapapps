<?php

$enable_viewer = true;
$db = "cellular";
$user = "root";
$password = "root";
$host = "localhost";
$table = "trace";
$userTable= "users";
$lastSavedTable = "last_saved";
// Note: don't lose this string! You must keep it the same or your users
// will all be lost. It must be 22+ characters
$salt = "random static salt of at least 22 characters";

// If true, user IDs will be hashed before saving to the database
$hashUserID = false;
?>
