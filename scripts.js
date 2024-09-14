var _a;
// Function to generate resume on click event
(_a = document.getElementById("generate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var formData = getFormData(["name", "email", "phone", "education", "experience", "skills", "courses"]);
    if (!validateEmail(formData.email)) {
        alert("Please enter a valid email address.");
        return;
    }
    var resumeOutput = generateResume(formData);
    document.getElementById("resume-output").innerHTML = resumeOutput;
});
// General function to extract form data
function getFormData(fields) {
    var data = {};
    fields.forEach(function (field) {
        data[field] = document.getElementById(field).value;
    });
    return data;
}
// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// Function to generate the resume output
function generateResume(formData) {
    return "\n    <h2>".concat(formData.name, "</h2>\n    <div class=\"resume-section\">\n      <h3>Contact Information</h3>\n      <p><strong>Email:</strong> ").concat(formData.email, "</p>\n      <p><strong>Phone:</strong> ").concat(formData.phone, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Education</h3>\n      <p>").concat(formData.education, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Experience</h3>\n      <p>").concat(formData.experience, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Skills</h3>\n      <p>").concat(formData.skills, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Courses</h3>\n      <p>").concat(formData.courses, "</p>\n    </div>\n  ");
}
