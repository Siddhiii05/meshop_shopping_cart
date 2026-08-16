// Get current user
let currentUser = JSON.parse(localStorage.getItem("currentUser"));


// ================================
// UPDATE PROFILE
// ================================

document.getElementById("profileForm").addEventListener("submit", (event) => {

    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();

    let profileSuccess = document.getElementById("profileSuccess");
    let profileError = document.getElementById("profileError");

    profileSuccess.textContent = "";
    profileError.textContent = "";

    if (!currentUser) {
        profileError.textContent = "Please login first.";
        return;
    }

    if (firstName === "" || lastName === "") {
        profileError.textContent = "Please fill all fields.";
        return;
    }

    // Get users array
    let users = JSON.parse(localStorage.getItem("users")) ?? [];

    // Find current user
    let userIndex = users.findIndex((user) => {
        return user.email === currentUser.email;
    });

    if (userIndex === -1) {
        profileError.textContent = "User not found.";
        return;
    }

    // Update user object
    users[userIndex].firstName = firstName;
    users[userIndex].lastName = lastName;

    // Update currentUser object
    currentUser.firstName = firstName;
    currentUser.lastName = lastName;

    // Update localStorage
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    profileSuccess.textContent = "Profile updated successfully!";

    document.getElementById("profileForm").reset();

    console.log("Updated users:", users);
    console.log("Updated currentUser:", currentUser);
});


// ================================
// CHANGE PASSWORD
// ================================

document.getElementById("passwordForm").addEventListener("submit", (event) => {

    event.preventDefault();

    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let passwordSuccess = document.getElementById("passwordSuccess");
    let passwordError = document.getElementById("passwordError");

    passwordSuccess.textContent = "";
    passwordError.textContent = "";

    if (!currentUser) {
        passwordError.textContent = "Please login first.";
        return;
    }

    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
        passwordError.textContent = "Please fill all fields.";
        return;
    }

    // Get users array
    let users = JSON.parse(localStorage.getItem("users")) ?? [];

    // Find current user
    let userIndex = users.findIndex((user) => {
        return user.email === currentUser.email;
    });

    if (userIndex === -1) {
        passwordError.textContent = "User not found.";
        return;
    }

    // Check old password
    if (users[userIndex].password !== oldPassword) {
        passwordError.textContent = "Old password is incorrect.";
        return;
    }

    // Check new password and confirm password
    if (newPassword !== confirmPassword) {
        passwordError.textContent = "New passwords do not match.";
        return;
    }

    // Update password in users array
    users[userIndex].password = newPassword;

    // Update password in currentUser
    currentUser.password = newPassword;

    // Save updated data
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    passwordSuccess.textContent = "Password changed successfully!";

    document.getElementById("passwordForm").reset();

    console.log("Updated users:", users);
    console.log("Updated currentUser:", currentUser);
});