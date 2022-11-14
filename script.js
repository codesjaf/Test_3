function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message {
    username;
    time;
    text;
    constructor(username, text, time = this.gettime()) {
        this.username = username;
        this.time = time;
        this.text = text;
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

    toHtml() {
        return `<p>${this.time} ${this.name} ${this.text}</p>`
    }

}

class Messenger {
    messages = [];

    show_history() {
        let sms_hist = [];
        this.messages.forEach(sms => sms_hist.push(sms.toHtml()));
        return sms_hist;
    }

    send(author, text) {
        this.messages.push(new Message(author, text))
    }
}

let messenger = new Messenger();

const author = document.querySelector('#name');
const message = document.querySelector('#message');
const sendb = document.querySelector('.btn-send');
const showh = document.querySelector('.btn-show');
sendBtn.addEventListener('click', () => {
    let name = author.value;
    let text = message.value;
    message.value = '';
    messenger.send(name, text);
});
const history = document.querySelector('.history');
showHistory.addEventListener('click', () => {
    history.innerHTML = messenger.show_history();
});