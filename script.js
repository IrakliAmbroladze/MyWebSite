document.getElementById('userForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  });
  fetchUsers();
  // if (response.ok) {
  //   alert('User added successfully');
  //   fetchUsers(); // Refresh the user list
  // } else {
  //   alert('Failed to add user');
  // }
});

async function fetchUsers() {
  const response = await fetch('/api/users');
  if (response.ok) {
    const users = await response.json();

    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  } else {
    console.error('Failed to fetch users');
  }
}

// Fetch and display users on page load
fetchUsers();
