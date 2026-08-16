let error = document.getElementById("error");

document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        error.textContent = "Please fill all fields.";
    } 
    else if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
    } 
    else {
        let users = JSON.parse(localStorage.getItem("users")) ?? [];
        let filteredUsers = users.filter((user) => user.email === email);

        if (filteredUsers.length > 0) {
            error.textContent = "User already exists.";
        } 
        else {
            users.push({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                createdAt: new Date()
            });
            localStorage.setItem("users", JSON.stringify(users));
            error.textContent = "";
            document.getElementById("signupForm").reset();
            console.log("Users:", users);
        }
    }
});