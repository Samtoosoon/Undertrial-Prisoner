// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBiIrPpQJpay-02Lm0pzNXHm4zxwCXA2hU",
    authDomain: "loginsignup-page-541c1.firebaseapp.com",
    projectId: "loginsignup-page-541c1",
    storageBucket: "loginsignup-page-541c1.appspot.com",
    messagingSenderId: "842148234758",
    appId: "1:842148234758:web:72acfc5167dff0aa86a587",
    measurementId: "G-EK1HL13TWT"
  };
  

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const idcard = document.getElementById('idcard').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;

    // Validate input fields
    if (!validate_email(email) || !validate_password(password)) {
        alert('Email or password is incorrect!');
        return;
    }
    if (!validate_field(fullname) || !validate_field(dob) || !validate_field(age)) {
        alert('Please fill all fields properly!');
        return;
    }

    // Move on with authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser;
            var database_ref = database.ref();
            var user_data = {
                email: email,
                fullname: fullname,
                idcard: idcard,
                age: age,
                dob: dob,
                last_login: Date.now()
            };
            database_ref.child('users/' + user.uid).set(user_data);
            alert('User created successfully!');
            window.location.href = "login.html";
        })
        .catch(function(error) {
            var error_message = error.message;
            alert(error_message);
        });
});

function validate_email(email) {
    var expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    return password.length >= 6;
}

function validate_field(field) {
    return field !== null && field.length > 0;
}
