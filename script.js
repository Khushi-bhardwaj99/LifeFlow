// =========================================================================
// 0. INDEX.HTML - POPUP CONTROLLER (Controls Opening/Closing the Popup)
// =========================================================================
function toggleEligibilityCard() {
    const modal = document.getElementById("eligibilityModal");
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
}

// =========================================================================
// 1. INDEX.HTML - ELIGIBILITY LOGIC (Checks Age and Weight)
// =========================================================================
function checkEligibility() {
    const age = document.getElementById("userAge").value;
    const weight = document.getElementById("userWeight").value;
    const resultText = document.getElementById("resultMessage");

    // Check if fields are empty
    if (age === "" || weight === "") {
        resultText.innerText = "Please enter both your age and weight.";
        resultText.style.color = "orange";
        return;
    }

    // Criteria: Age 18-65 and Weight >= 50kg
    if (age >= 18 && age <= 65 && weight >= 50) {
        resultText.innerText = "🎉 Congratulations! You are eligible to donate blood.";
        resultText.style.color = "green";
    } else {
        resultText.innerText = "❌ Sorry, you do not meet the criteria to donate blood at this time.";
        resultText.style.color = "red";
    }
}

// =========================================================================
// 2. CONTACT.HTML - FORM VALIDATION (Checks Contact Page Form)
// =========================================================================
function validateContactForm(event) {
    // Prevents the page from refreshing automatically
    event.preventDefault(); 

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const formStatus = document.getElementById("formStatusMessage");

    // Check if any of the fields are left completely empty
    if (name === "" || email === "" || subject === "" || message === "") {
        formStatus.innerText = "All fields are required. Please fill them out.";
        formStatus.style.color = "red";
        return;
    }

    // Basic layout verification check for a valid email structure
    if (!email.includes("@") || !email.includes(".")) {
        formStatus.innerText = "Please enter a valid email address.";
        formStatus.style.color = "red";
        return;
    }

    // Display the success notification on the screen
    formStatus.innerText = "Thank you! Your message has been sent successfully.";
    formStatus.style.color = "green";

    // Instantly clear all input fields after successful submission
    document.getElementById("contactForm").reset();
}
// find a donation camp javascript

function searchCamps() {
    let location = document.getElementById("location").value.trim().toLowerCase();
    let date = document.getElementById("date").value;
    let organizer = document.getElementById("organizer").value;

    let camps = document.querySelectorAll(".camp-a");
    let found = 0;

    camps.forEach(function(camp) {
        let text = camp.innerText.toLowerCase();

        let locationMatch = location === "" || text.includes(location);
        let dateMatch = date === "" || text.includes(date);
        let organizerMatch = organizer === "All organizers" ||
                             text.includes(organizer.toLowerCase());

        if (locationMatch && dateMatch && organizerMatch) {
            camp.style.display = "";
            found++;
        } else {
            camp.style.display = "none";
        }
    });

    let message = document.getElementById("search-message");

    if (!message) {
        message = document.createElement("p");
        message.id = "search-message";
        document.querySelector(".search-comp").insertAdjacentElement("afterend", message);
    }

    if (found === 0) {
        message.textContent = "No donation camps found. Try another search.";
    } else {
        message.textContent = found + " donation camp(s) found!";
    }
}

