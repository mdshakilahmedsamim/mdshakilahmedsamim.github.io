var firstNama = document.getElementById('fName');
var lastName = document.getElementById('lName');
var user_Id = document.getElementById('user-Id');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var age = document.getElementById('age');
var infor = document.getElementById('info');
var userInfor = document.getElementById('userInfo');

userInfor.addEventListener('click', () =>{
        if(!firstNama.value ||!lastName.value ){
                alert('Please Give Your Information In The Field');
                return;
                console.log("Please Give Your Information In The Field");
        }

        var userInformation = {
                first_name: firstNama.value,
                Last_name: lastName.value,
                user_id: user_Id.value,
                user_email: email.value,
                user_phone: phone.value,
                user_age: age.value,
        }
        var testArray = {
                first_name: firstNama.value,
                Last_name: lastName.value,
                user_id: user_Id.value,
                user_email: email.value,
                user_phone: phone.value,
                user_age: age.value,
        }
        var test = {
                first_name: firstNama.value,
                Last_name: lastName.value,
                user_id: user_Id.value,
                user_email: email.value,
                user_phone: phone.value,
                user_age: age.value,
        }

        infor.innerHTML = "Success The form information";
        infor.style.color = "black";
        infor.style.fontSize = "80px"

                localStorage.setItem('user_data', JSON.stringify(userInformation));
                localStorage.setItem('test_array', JSON.stringify(testArray));
                localStorage.setItem('test', JSON.stringify(test));
                var dataPush = [];
                dataPush.push(userInformation, testArray, test);
                console.log('Click data:',dataPush);
                
                var userLocal = JSON.parse(localStorage.getItem('user_all_information')) || [];
                userLocal.push(dataPush);
                localStorage.setItem('user_all_information', JSON.stringify(userLocal));
                console.log('LocalStorage data:', userLocal)

                console.log(userInformation, testArray, test);
})


