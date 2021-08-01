class Card {
    constructor(name, proffesion, email) {
        this.name = name;
        this.proffesion = proffesion;
        this.email = email;
    }
}


function addCardToList(card) {
    const cardList = document.querySelector('#cardList');
    const card1 = document.createElement('div');
    card1.classList.add('card');
    const nameField = document.createElement('p');
    nameField.innerHTML = `Name:  ${card.name}`
    const proffesionField = document.createElement('p');
    proffesionField.innerHTML = `Proffesion:  ${card.proffesion}`
    const emailField = document.createElement('p');
    emailField.innerHTML = `Email:  ${card.email}`
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteBtn')
    deleteButton.innerHTML = 'X';
    const header = document.createElement('div');
    header.classList.add('header');

    cardList.appendChild(card1);
    card1.appendChild(header)
    header.appendChild(nameField);
    header.appendChild(deleteButton);
    card1.appendChild(proffesionField);
    card1.appendChild(emailField);
}

function deleteCard(el) {
    if (el.classList.contains('deleteBtn')) {
        el.parentElement.parentElement.remove();
    }
}

function showAlert() {
    const msg = document.querySelector('.msg');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
}

function clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#profession').value = '';
    document.querySelector('#email').value = '';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


document.querySelector('.btn').addEventListener('click', (e) => {
    let nameInput = document.querySelector('#name').value;
    let professionInput = document.querySelector('#profession').value;
    let emailInput = document.querySelector('#email').value;
    professionInput = professionInput.split("פקיד").join("");

    if (nameInput === '' || professionInput === '' || emailInput === '' || nameInput.length < 2) {
        showAlert();
    }

    else {
        if (validateEmail(emailInput)) {
            emailInput = emailInput;
        }
        else {
            emailInput = 'valid@gmail.com';
        }
        const card = new Card(nameInput, professionInput, emailInput);
        addCardToList(card);
        clearFields();
    }

});

document.querySelector('#cardList').addEventListener('click', (e) => {
    deleteCard(e.target);
});