const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

function appendMessage(message, isUser) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  if (isUser) {
    messageDiv.style.textAlign = 'right';
    messageDiv.style.backgroundColor = '#007BFF';
    messageDiv.style.color = '#fff';
  }

  // If the message is a string, set it as innerText; otherwise, append the element itself.
  if (typeof message === 'string') {
    messageDiv.innerText = message;
  } else {
    messageDiv.appendChild(message);
  }

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function createTechnicianLink(technician) {
  const link = document.createElement('a');
  link.innerText = technician;
  link.href = '#'; // You can set the actual URL here if you have more details about the technician
  link.addEventListener('click', handleTechnicianClick);
  return link;
}

function handleTechnicianClick(event) {
  event.preventDefault();
  const technicianName = event.target.innerText;
  console.log('Technician clicked:', technicianName);
  // Add any additional actions here when a technician is clicked.
}

function sendMessage() {
  const message = userInput.value;
  appendMessage(message, true);

  if (message.toLowerCase().includes('find a technician in london')) {
    // Simulate technician search
    const technicianResults = [
      'Technician A',
      'Technician B',
      'Technician C',
      'Technician D',
      'Technician E',
    ];

    // Display technician results
    appendMessage('Here are 5 technicians in London:', false);
    technicianResults.forEach((technician) => {
      const link = createTechnicianLink(technician);
      appendMessage(link, false); // Append the link element directly instead of its outerHTML.
    });
  } else {
    appendMessage('I\'m sorry, I can\'t help you with that request.', false);
  }

  userInput.value = '';
}
