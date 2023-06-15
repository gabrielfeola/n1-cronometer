function startTimer() {
    const timeInMinutes = document.getElementById('timeInMinutes').value;
    const timeInMilliseconds = timeInMinutes * 1000;
    const ticketLabel = document.getElementById('ticketLabel').value;

    if (timeInMinutes > 0 && timeInMinutes != '') {

        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                const notification = new Notification('Cronômetro ' + ticketLabel + ' iniciado', {});

                setTimeout(() => {
                    console.log('Cronômetro finalizado. Enviando notificação.');
                    const notification = new Notification('Cronômetro ' + ticketLabel + ' finalizado!', {
                        body: 'O tempo definido foi atingido.'
                    });
                }, timeInMilliseconds);
            } else {
                window.alert('Permissão para notificações não concedida');
            }
        });
        resetInputs()
    } else {
        window.alert('Insira uma quantidade válida de minutos');
        resetInputs()
    }
}

function resetInputs() {
    document.getElementById('timeInMinutes').value = "";
    document.getElementById('ticketLabel').value = "";
}