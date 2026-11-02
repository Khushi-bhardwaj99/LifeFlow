
const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Check that the form is valid
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Collect registration details
    const registration = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        role: document.getElementById("role").value
    };

    if (
        !registration.name ||
        !registration.email ||
        !registration.phone ||
        !registration.role
    ) {
        message.textContent = "Please fill in all the details.";
        message.style.color = "#b5122a";
        return;
    }

    try {
        const previous = JSON.parse(
            localStorage.getItem("lifeflowRegistrations") || "[]"
        );

        if (!Array.isArray(previous)) {
            throw new Error("Invalid registration data");
        }

        previous.push(registration);

        localStorage.setItem(
            "lifeflowRegistrations",
            JSON.stringify(previous)
        );

        // Registration complete: open original homepage
        window.location.href = "home.html";

    } catch (error) {
        message.textContent =
            "Could not save the demo registration. Please try again.";
        message.style.color = "#b5122a";
    }
});
