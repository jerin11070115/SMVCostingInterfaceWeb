function adduser() {
    var fullName = $('#fullNameText').val();
    var userName = $('#userNameText').val();
    var password = $('#passwordText').val();
    var isActive = $('#IsActiveSelect').val();
    

    if (fullName === '') {
        Swal("Please enter the full name.. ");
    }
    else if (userName === '') {
        Swal("Please entry the user name");
    }
    else if (password === '') {
        Swal("Please entry the password");
    }
    
    else {

        var UserAccountModel = {
            UserName: userName,
            FullName: fullName,
            Password: password,
            IsActive: parseInt(isActive)
        };
        var route = localApiPath + "api/Admin/Buyer/AddUserAccount";
        var input = JSON.stringify(UserAccountModel);

        var ReturnUserAccountModel = function (data) {
            Swal({
                position: 'center',
                type: 'success',
                title: fullName+' user has been saved ',
                showConfirmButton: false,
                timer: 2000
            });

            $('#fullNameText').val('');
            $('#userNameText').val('');
            $('#IsActiveSelect').val('0');
           $('#passwordText').val('');
        }
        var responseData = CallServerMethod('Post', route, input, 'false', ReturnUserAccountModel);
    }
}