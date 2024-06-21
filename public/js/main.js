const socket = io();

const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput.value && messageInput.value) {
        const message = {
            author: usernameInput.value,
            text: messageInput.value
        };
        socket.emit('chat message', message);
        messageInput.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = `${msg.author}: ${msg.text}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
