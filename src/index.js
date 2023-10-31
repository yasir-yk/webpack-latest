// Import your CSS to include it in your bundle
import './styles/main.scss';

// Your JavaScript code can start here
document.addEventListener('DOMContentLoaded', function () {
  // Add your JavaScript functionality here
  const header = document.querySelector('header h1');
  header.textContent = 'Welcome to Your Webpack Project';
});
