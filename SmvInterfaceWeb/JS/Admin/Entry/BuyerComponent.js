function loadComponentFile(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('uploaded_image');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

function LoadBuyerCategory() {
    //var sampleStageId = $('#SampleStageSelect').val();
    var buyerId = $('#BuyerSelect').val();

    var route = localApiPath + "api/Admin/Buyer/GetBuyerCategory/" + buyerId;
    var input = "";

    var responseGetBuyerCategory = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Buyer Category' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].BuyerCategoryId + '>' + data[loop].BuyerCategory + '</option>';
        }
        $('#BuyerCategorySelect').empty();
        $('#BuyerCategorySelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetBuyerCategory);

}

function AddBuyerComponent() {
    var buyerId = $('#BuyerSelect').val();
    //var sampleStageId = $('#SampleStageSelect').val();
    var buyerCategoryId = $('#BuyerCategorySelect').val();
    var component = $('#componentText').val();
    var isActive = $('#IsActiveSelect').val();

    if (buyerId === '0') {
        Swal("Please Select A Buyer");
    }
    //else if (sampleStageId === '0') {
    //    Swal("Please Select A SampleStage");
    //}
    //else if (buyerCategoryId === '0') {
    //    Swal("Please Select A Buyer Category");
    //}
    else if (component === '') {
        Swal("Please Enter A Name");
    }
    else {

        //var BuyerComponentModel = {
        //    BuyerId: parseInt(buyerId),
        //    BuyerCategoryId: parseInt(buyerCategoryId),
        //    Component: component,
        //    IsActive: parseInt(isActive)
           
        //};

        var data = new FormData();
        var files = $("#uploadFile").get(0).files;
        if (files.length > 0) {

            data.append("UploadedImage", files[0]);
            data.append("BuyerId", buyerId);
            data.append("BuyerCategoryId", buyerCategoryId);
            data.append("Component", component);
            data.append("IsActive", isActive);

            var route = localApiPath + "api/Admin/Buyer/AddComponent";
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
        //var returnComponentInsertResponse = function (data) {

        //    Swal({
        //        position: 'center',
        //        type: 'success',
        //        title: BuyerComponentModel.Component + ' Component has been saved',
        //        showConfirmButton: false,
        //        timer: 2000
        //    });

            
        //    $("#componentText").val('');
        //    $("#BuyerSelect").val('0');
        //    $("#BuyerCategorySelect").val('0');
        //    $("#IsActiveSelect").val('0');
        //};
        //var responseData = CallServerMethod('Post', route, input, 'false', returnComponentInsertResponse);

    }

}