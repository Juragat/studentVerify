const apiUrl = "https://studentverify.onrender.com/";

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(`${apiUrl}/teacher/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (response.status === 200) {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('generate-code').style.display = 'block';
        } else {
            document.getElementById('login-message').textContent = data.message;
        }
    })
    .catch(error => {
        document.getElementById('login-message').textContent = 'An error occurred. Please try again.';
    });
}

// Generate one-time code function
function generateCode() {
    fetch(`${apiUrl}/teacher/generate_code`, {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('code-message').textContent = `Generated Code: ${data.code}`;
        document.getElementById('mark-attendance').style.display = 'block';
    })
    .catch(error => {
        document.getElementById('code-message').textContent = 'An error occurred while generating the code.';
    });
}

// Mark attendance function
function markAttendance() {
    const studentId = document.getElementById('student-id').value;
    const code = document.getElementById('attendance-code').value;

    fetch(`${apiUrl}/student/mark`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, code }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('attendance-message').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('attendance-message').textContent = 'An error occurred while marking attendance.';
    });
}
