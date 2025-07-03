// Fetch and display user data
function fetchUsers() {
  const usersContainer = document.getElementById('users');
  const errorContainer = document.getElementById('error');

  usersContainer.innerHTML = '';
  errorContainer.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-card');
        userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        usersContainer.appendChild(userDiv);
      });
    })
    .catch((error) => {
      errorContainer.textContent = '⚠️ Failed to fetch users. Please check your connection.';
      console.error('Error:', error);
    });
}

// Auto-load users on page load
window.onload = fetchUsers;
