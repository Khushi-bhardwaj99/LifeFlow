
const form = document.getElementById("reservationForm");
const dateInput = document.getElementById("date");
const message = document.getElementById("message");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const age = Number(document.getElementById("age").value);
    const phone = document.getElementById("phone").value.trim();
    const camp = document.getElementById("camp").value;
    const date = dateInput.value;

    if (name.length < 2) {
        showMessage("Please enter your full name.", false);
        return;
    }

    if (age < 18 || age > 65) {
        showMessage("Please check the applicable age requirements.", false);
        return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
        showMessage("Please enter a valid 10-digit mobile number.", false);
        return;
    }

    if (!camp || !date) {
        showMessage("Please select a camp and date.", false);
        return;
    }

    if (date < dateInput.min) {
        showMessage("Please select today or a future date.", false);
        return;
    }

    showMessage(
        "Your reservation form has been submitted successfully! Please contact the camp to confirm availability. Final donation eligibility will be decided by the medical staff.",
        true
    );

    form.reset();
    dateInput.min = `${year}-${month}-${day}`;
});

function showMessage(text, success) {
    message.textContent = text;
    message.className = success ? "success" : "error";
}
