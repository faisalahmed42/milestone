
// Define types for each form section
type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
};

type Education = {
    degree: string;
    institution: string;
    graduationYear: string;
};

type WorkExperience = {
    jobTitle: string;
    company: string;
    duration: string;
    responsibilities: string;
};

type ResumeData = {
    personalInfo: PersonalInfo;
    education: Education;
    skills: string[];
    workExperience: WorkExperience;
};

// Function to gather form data and create the resume
function generateResume(): void {
    // Capture user input
    const personalInfo: PersonalInfo = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value
    };

    const education: Education = {
        degree: (document.getElementById("degree") as HTMLInputElement).value,
        institution: (document.getElementById("institution") as HTMLInputElement).value,
        graduationYear: (document.getElementById("graduationYear") as HTMLInputElement).value
    };

    const skills: string[] = (document.getElementById("skills") as HTMLInputElement).value.split(',');

    const workExperience: WorkExperience = {
        jobTitle: (document.getElementById("jobTitle") as HTMLInputElement).value,
        company: (document.getElementById("company") as HTMLInputElement).value,
        duration: (document.getElementById("duration") as HTMLInputElement).value,
        responsibilities: (document.getElementById("responsibilities") as HTMLInputElement).value
    };

    const resumeData: ResumeData = { personalInfo, education, skills, workExperience };

    displayResume(resumeData);
}

// Function to display the generated resume on the page
function displayResume(data: ResumeData): void {
    const resumeSection = document.getElementById("generatedResume")!;
    resumeSection.innerHTML = `
        <h2>${data.personalInfo.name}</h2>
        <p>Email: ${data.personalInfo.email}</p>
        <p>Phone: ${data.personalInfo.phone}</p>
        
        <h3>Education</h3>
        <p>${data.education.degree}, ${data.education.institution} (${data.education.graduationYear})</p>
        
        <h3>Skills</h3>
        <p>${data.skills.join(", ")}</p>
        
        <h3>Work Experience</h3>
        <p>${data.workExperience.jobTitle} at ${data.workExperience.company}</p>
        <p>${data.workExperience.duration}</p>
        <p>Responsibilities: ${data.workExperience.responsibilities}</p>
    `;
}