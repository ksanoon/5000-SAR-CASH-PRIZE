// Show Google Form on button click
document.querySelector('.receive-btn').addEventListener('click', () => {
  document.getElementById('giftForm').style.display = 'block';
});

// Close Google Form popup on "X" click
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('giftForm').style.display = 'none';
});
