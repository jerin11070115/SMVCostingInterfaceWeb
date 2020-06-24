 function loadFile (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('uploaded_image');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function addbuyer() {
    var buyerName = $('#buyerText').val();
    if (buyerName === '') {
        Swal("Please Enter Buyer Name");
    }
    var isActive = $('#IsActiveSelect').val();

    var data = new FormData();
    var files = $("#uploadFile").get(0).files;

    if (files.length > 0) {
        data.append("UploadedImage", files[0]);
        data.append("BuyerName", buyerName);
        data.append("IsActive", isActive);

        var route = localApiPath + "api/Admin/Buyer/LogoUpload";
        var input = data;

        var ajaxRequest = $.ajax({
            type: "POST",
            url: route.toLowerCase(),
            contentType: false,
            processData: false,
            data: data
        });

        ajaxRequest.done(function (xhr, textStatus) {
            Swal("Buyer Insert Success");
              $('#buyerText').val('');
            $('#IsActiveSelect').val('');
            $("#uploadFile").remove('src');
        });
    }
    else {
        Swal("Please Upload a Image");
    }




}
