// Add your code here


const myForm = document.querySelector('form');
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const dataName= document.querySelector('#userName').value;
    const dataEmail = document.querySelector('#userMail').value;
    submitData(dataName, dataEmail);

})
function submitData(name, email) {
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
        }),
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            let para = document.createElement("p");
            para.textContent = json.id;
            inputForm.appendChild(paragraph);
        })
        .catch(function (error) {
            let message = document.createElement("p");
            message.textContent = error.message;
            myForm.appendChild(message);
            return error.message;
        });
}