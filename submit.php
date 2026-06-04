<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gender = $_POST['gender'] ?? 'Not selected';
    $interest = $_POST['interest'] ?? [];
    $city = $_POST['city'];
    $address = $_POST['address'];

    echo "<h2>Form Submitted Successfully!</h2>";
    echo "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
    echo "<p><strong>Gender:</strong> " . htmlspecialchars($gender) . "</p>";
    echo "<p><strong>City:</strong> " . htmlspecialchars($city) . "</p>";
    echo "<p><strong>Address:</strong> " . htmlspecialchars($address) . "</p>";
    echo "<p><strong>Interests:</strong> " . implode(", ", $interest) . "</p>";
    echo '<a href="form.html">Go Back</a>';
} else {
    echo "No form data received!";
}
?>