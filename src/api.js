// src/api.js

async function fetchData() {
  // Example fetch implementation
  const response = await fetch('https://api.example.com/data');
  return response.json();
}

const data = await fetchData();

module.exports = { fetchData, data };
