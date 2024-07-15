$(document).ready(function () {
    $("#loginForm").on("submit", function (e) {
        e.preventDefault();

        var username = $("#loginUsername").val();
        var password = $("#loginPassword").val();

        console.log("Sending login request with username:", username);

        $.ajax({
            url: "https://130.162.195.228/mhs714220020/login",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username: username, password: password }),
            success: function (response) {
                console.log("Login response received:", response);
                if (response.token) {
                    alert("Login successful");
                    localStorage.setItem("authToken", response.token);
                    window.location.href = './index.html';
                } else {
                    alert("Login failed: " + response.message);
                }
            },
            error: function (xhr, status, error) {
                console.error("Login error:", xhr.responseText);
                alert("Login failed: " + xhr.responseText);
            }
        });
    });

    $("#registerForm").on("submit", function (e) {
        e.preventDefault();

        var username = $("#registerUsername").val();
        var email = $("#registerEmail").val();
        var password = $("#registerPassword").val();

        console.log("Sending registration request with username:", username, "and email:", email);

        $.ajax({
            url: "https://130.162.195.228/mhs714220020/regis",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username: username, email: email, password: password }),
            success: function (response) {
                console.log("Registration response received:", response);
                alert("Registration successful: " + response.message);
            },
            error: function (xhr, status, error) {
                console.error("Registration error:", xhr.responseText);
                alert("Registration failed: " + xhr.responseText);
            }
        });
    });
});
