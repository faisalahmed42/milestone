// Function to gather form data and create the resume
function generateResume() {
    // Capture user input
    var personalInfo = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };
    var education = {
        degree: document.getElementById("degree").value,
        institution: document.getElementById("institution").value,
        graduationYear: document.getElementById("graduationYear").value
    };
    var skills = document.getElementById("skills").value.split(',');
    var workExperience = {
        jobTitle: document.getElementById("jobTitle").value,
        company: document.getElementById("company").value,
        duration: document.getElementById("duration").value,
        responsibilities: document.getElementById("responsibilities").value
    };
    var resumeData = { personalInfo: personalInfo, education: education, skills: skills, workExperience: workExperience };
    displayResume(resumeData);
}
// Function to display the generated resume on the page
function displayResume(data) {
    var resumeSection = document.getElementById("generatedResume");
    resumeSection.innerHTML = "\n        <h2>".concat(data.personalInfo.name, "</h2>\n        <p>Email: ").concat(data.personalInfo.email, "</p>\n        <p>Phone: ").concat(data.personalInfo.phone, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(data.education.degree, ", ").concat(data.education.institution, " (").concat(data.education.graduationYear, ")</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(data.skills.join(", "), "</p>\n        \n        <h3>Work Experience</h3>\n        <p>").concat(data.workExperience.jobTitle, " at ").concat(data.workExperience.company, "</p>\n        <p>").concat(data.workExperience.duration, "</p>\n        <p>Responsibilities: ").concat(data.workExperience.responsibilities, "</p>\n    ");
}
