// Add this to your registration page
async function handleRegistration(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('action', 'register');
    formData.append('fullname', document.getElementById('fullname').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('role', document.getElementById('role').value);

    const response = await fetch('process.php', {
        method: 'POST',
        body: formData
    });
    
    const result = await response.json();
    alert(result.message);
    if (result.status === 'success') window.location.href = 'pa.html';
}