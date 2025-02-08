var _a, _b, _c;
// Function to generate the resume dynamically
function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var location = document.getElementById('location').value;
    var contact = document.getElementById('contact').value;
    // Display resume
    var resumeHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <p><strong>Location:</strong> ").concat(location, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    var resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    // Hide the form and show the download button
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('downloadButton').style.display = 'block';
    document.getElementById('editButton').style.display = 'block';
}
// Function to download the resume as PDF
function downloadResumeAsPDF() {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    // Fetch input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var location = document.getElementById('location').value;
    var contact = document.getElementById('contact').value;
    // Add content to the PDF
    doc.text("".concat(name, "'s Resume"), 10, 10);
    doc.text("Email: ".concat(email), 10, 20);
    doc.text("Contact: ".concat(contact), 10, 30);
    doc.text("Location: ".concat(location), 10, 40);
    doc.text('Education:', 10, 50);
    doc.text(education, 10, 60);
    doc.text('Skills:', 10, 80);
    doc.text(skills, 10, 90);
    doc.text('Work Experience:', 10, 110);
    doc.text(experience, 10, 120);
    // Save the PDF
    doc.save("".concat(name, "_Resume.pdf"));
}
// Function to edit the resume again
function editResume() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('resumeDisplay').innerHTML = '';
    document.getElementById('editButton').style.display = 'none';
    document.getElementById('downloadButton').style.display = 'none';
}
// Attach functions to buttons
(_a = document.getElementById('generateButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
(_b = document.getElementById('downloadButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadResumeAsPDF);
(_c = document.getElementById('editButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', editResume);
