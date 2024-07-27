function sendMessage() {
    var inputField = document.getElementById('mensaje');
    var mensaje = inputField.value;
    if (mensaje.trim() !== '') {
        var chatBox = document.getElementById('chat-box');
        var newMessage = document.createElement('div');
        newMessage.classList.add('message', 'saliente'); // Añadir la clase saliente
        newMessage.textContent = mensaje;
        chatBox.appendChild(newMessage);
        inputField.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
document.getElementById('mensaje').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();
    }
    
});