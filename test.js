var firstNama = document.getElementById('fName');
var lastName = document.getElementById('fName');
var user_Id = document.getElementById('user-Id');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var age = document.getElementById('age');
var infor = document.getElementById('info');
var userInfor = document.getElementById('userInfo');


userInfor.addEventListener('click', () => {

    if (!firstNama.value || !lastName.value || !user_Id.value || !email.value || !phone.value || !age.value) {
        alert('All fields must be filled out.');
        return;
    }
    var products =
        {
            first_name: firstNama.value,
            last_name: lastName.value,
            user_id: user_Id.value,
            user_email: email.value,
            user_phone: phone.value,
            user_age: age.value,           
        }

        var userArray = JSON.parse(localStorage.getItem('user_information')) || [];
        userArray.push(products);
        localStorage.setItem('user_information', JSON.stringify(userArray));        
})