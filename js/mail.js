function sendEmail() {
  // Retrieve form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate form fields
  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

 

  // If user clicked Cancel, proceed to send
  const parms = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  // Send email via EmailJS
  emailjs.send("service_g6ie456", "template_5p9w3ij", parms)
    .then(() => {
      showToast("Mail was sent ✅", "success");
      // Clear form fields after successful send
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      showToast("Mail not sent ❌", "error");
      console.error("EmailJS error:", error);
    });
}