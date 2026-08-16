function generateToken() {
    return Math.random().toString(36).substring(2);
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        console.log("Please enter email and password.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) ?? [];

    if (users.length > 0) {
        let user = users.filter((user) => user.email === email);

        if (user.length > 0) {
            let obj = user[0];

            if (obj.password === password) {
                localStorage.setItem("currentUser", JSON.stringify({
                        email: email,
                        password: password,
                        token: generateToken()
                    })
                );
                window.location.href = "../profile/profile.html";
                console.log("Login successful!");
                console.log("Current User:", localStorage.getItem("currentUser"));
            } 
            else {
                console.log("Incorrect password.");
            }
        }
        else {
            console.log("User not found.");
        }
    } else {
        console.log("No users registered.");
    }
});