<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REGISTER PAGE</title>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" /> -->
    <link rel = "stylesheet" href = "syle.css">
    
</head>
<body>

    <div class="container">
        <form class="signup-form">
          <h2>Sign Up</h2>
          <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
          </div>
          <div class="form-group">
            <label for="idcard">ID Card Number</label>
            <input type="text" id="idcard" name="idcard" required>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" name="age" required>
          </div>
          <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required>
          </div>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="login.php">Sign In here</a></p>
        </form>
      </div>


</body>
</html>


