const baseUrl = "https://studentverify.onrender.com/";

// Example: Mark student attendance
async function markAttendance(studentId, code) {
    const response = await fetch(`${baseUrl}/student/mark`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            studentId: studentId,
            code: code,
        }),
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message); // Success
    } else {
        alert(`Error: ${data.message}`); // Error
    }
}

// Event listener for form submission
document.querySelector("#attendanceForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const studentId = document.querySelector("#studentId").value;
    const code = document.querySelector("#code").value;
    markAttendance(studentId, code);
});
