// Function to generate resume on click event
document.getElementById("generate")?.addEventListener("click", () => {
  const formData = getFormData(["name", "email", "phone", "education", "experience", "skills", "courses"]);

  if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
  }

  const resumeOutput = generateResume(formData);
  (document.getElementById("resume-output") as HTMLElement).innerHTML = resumeOutput;
});

// General function to extract form data
const getFormData = (fields: string[]): { [key: string]: string } => {
  const data: { [key: string]: string } = {};
  fields.forEach(field => {
      data[field] = (document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement).value;
  });
  return data;
}

// Email validation function
const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Function to generate the resume output
const generateResume = (formData: { [key: string]: string }): string => {
  return `
    <h2>${formData.name}</h2>
    <div class="resume-section">
      <h3>Contact Information</h3>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
    </div>
    <div class="resume-section">
      <h3>Education</h3>
      <p>${formData.education}</p>
    </div>
    <div class="resume-section">
      <h3>Experience</h3>
      <p>${formData.experience}</p>
    </div>
    <div class="resume-section">
      <h3>Skills</h3>
      <p>${formData.skills}</p>
    </div>
    <div class="resume-section">
      <h3>Courses</h3>
      <p>${formData.courses}</p>
    </div>
  `;
}