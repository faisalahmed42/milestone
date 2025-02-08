// Include jsPDF
declare var jspdf: any; // Declare jsPDF to avoid TypeScript errors

// Function to generate the resume dynamically
function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;

    // Display resume
    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Location:</strong> ${location}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>
    `;

    const resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }

    // Hide the form and show the download button
    document.getElementById('formContainer')!.style.display = 'none';
    document.getElementById('downloadButton')!.style.display = 'block';
    document.getElementById('editButton')!.style.display = 'block';
}

// Function to download the resume as PDF
function downloadResumeAsPDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Fetch input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;

    // Add content to the PDF
    doc.text(`${name}'s Resume`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Contact: ${contact}`, 10, 30);
    doc.text(`Location: ${location}`, 10, 40);

    doc.text('Education:', 10, 50);
    doc.text(education, 10, 60);

    doc.text('Skills:', 10, 80);
    doc.text(skills, 10, 90);

    doc.text('Work Experience:', 10, 110);
    doc.text(experience, 10, 120);

    // Save the PDF
    doc.save(`${name}_Resume.pdf`);
}

// Function to edit the resume again
function editResume() {
    document.getElementById('formContainer')!.style.display = 'block';
    document.getElementById('resumeDisplay')!.innerHTML = '';
    document.getElementById('editButton')!.style.display = 'none';
    document.getElementById('downloadButton')!.style.display = 'none';
}

// Attach functions to buttons
document.getElementById('generateButton')?.addEventListener('click', generateResume);
document.getElementById('downloadButton')?.addEventListener('click', downloadResumeAsPDF);
document.getElementById('editButton')?.addEventListener('click', editResume);