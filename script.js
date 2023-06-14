function startTimer() {
    const timeInMinutes = document.getElementById('timeInMinutes').value;
    const timeInMilliseconds = timeInMinutes * 60000;
    const ticketLabel = document.getElementById('ticketLabel').value;

    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            const notification = new Notification('Cronômetro ' + ticketLabel + ' iniciado', {});

            setTimeout(() => {
                console.log('Cronômetro finalizado. Enviando notificação.');
                console.log(ticketLabel);
                const notification = new Notification('Cronômetro ' + ticketLabel + ' finalizado!', {
                    body: 'O tempo definido foi atingido.'
                });
            }, timeInMilliseconds);
        } else {
            window.alert('Permissão para notificações não concedida');
        }
    });
    resetInputs()
}

function resetInputs() {
    document.getElementById('timeInMinutes').value = "";
    document.getElementById('ticketLabel').value = "";
}