// app.js — Main application logic
// This file loads users and sets up the page

// ✅ Load users from data (simulated here since we can't fetch locally)
const users = [
  { id: 1, name: "Alice Johnson",  role: "Developer",  email: "alice@example.com" },
  { id: 2, name: "Bob Smith",      role: "Designer",   email: "bob@example.com"   },
  { id: 3, name: "Charlie Brown",  role: "Manager",    email: "charlie@example.com"},
  { id: 4, name: "Diana Prince",   role: "Tester",     email: "diana@example.com" },
];

// ✅ Display users on the page
function loadUsers() {
  const container = document.getElementById("users-list");

  if (!container) return;

  container.innerHTML = ""; // Clear loading text

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <strong>#${user.id} — ${user.name}</strong>
      <span>Role: ${user.role}</span>
      <span>Email: ${user.email}</span>
    `;
    container.appendChild(card);
  });
}

// ✅ Run when the page loads
window.onload = function () {
  loadUsers();
  console.log("✅ App loaded successfully!");
  console.log(`Total users: ${users.length}`);
};
