$(document).ready(function () {
    sessionStorage.clear();
});

function LoginMathod() {
    var username = $('#usertext').val();
    var password = $('#passwordtext').val();


    var UserModel = {
        UserName: username,
        Password: password 
    };

    var route = localApiPath + "api/site/navbar/CheckUserForLogin";
    var input = JSON.stringify(UserModel);



    var UserReturnModel = function (data) {

         

        if (data[0].UserName == username && data[0].Password == password) {

            sessionStorage.setItem("UserName", data[0].UserName);
            sessionStorage.setItem("FullName", data[0].FullName);

            window.location.href = sitePath + "home.html";


        }


    };
    var responseData = CallServerMethod('Post', route, input, 'false', UserReturnModel);

}