//your JS code here. If required.
// Get references to elements
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Helper function that returns a promise which resolves after ms milliseconds
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async handler
async function handleClick() {
  const text = textInput.value;
  const delay = parseInt(delayInput.value, 10);

  // Optional: basic validation
  if (!text || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and delay.";
    return;
  }

  // Wait for the specified delay
  await wait(delay);

  // After delay, set the message
  outputDiv.textContent = text;
}

// Add click event listener
btn.addEventListener('click', handleClick);
