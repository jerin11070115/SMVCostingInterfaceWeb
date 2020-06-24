function AddComponentOperation() {

    var data = new FormData();
    var operationName = $('#OperationText').val();
    var smvValue = $('#smvText').val();
    var machine = $('#MachineText').val();
    var buyerId = $('#BuyerSelect').val();
    var buyerCategoryId = $('#BuyerCategorySelect').val();
    var buyerComponentId = $('#BuyerComponentSelect').val();
    var componentCatId = $('#BuyerComponentStageSelect').val();
    var componentSubCatId = $('#BuyerComponentSubStageSelect').val();
    var isActive = $('#IsActiveSelect').val();

    var gsdfiles = $("#uploadPdfFile").get(0).files;
   // var videofiles = $("#uploadVideoFile").get(0).files;


    if (gsdfiles.length > 0 /*&& videofiles.length > 0*/) {

        data.append("UploadedGsd", gsdfiles[0]);
      //  data.append("UploadedVideo", videofiles[0]);

        data.append("OperationName", operationName);
        data.append("SmvValue", smvValue);
        data.append("Machine", machine);
        data.append("BuyerId", buyerId);
        data.append("BuyerCatId", buyerCategoryId);
        data.append("ComponentId", buyerComponentId);
        data.append("ComponentCatId", componentCatId);
        data.append("ComponentSubCatId", componentSubCatId);
        data.append("IsActive", isActive);

        var route = localApiPath + "api/Admin/Operation/AddOperation";
        var input = data;



        var ajaxRequest = $.ajax({
            type: "POST",
            url: route.toLowerCase(),
            contentType: false,
            processData: false,
            data: input
        });

        ajaxRequest.done(function (xhr, textStatus) {
         Swal({
            position: 'center',
            type: 'success',
             title: ' operation has been saved',
            showConfirmButton: false,
            timer: 2000
        });
       $('#OperationText').val('');
       $('#smvText').val('');
       $('#MachineText').val('');
       $('#BuyerSelect').val('0');
       $('#BuyerCategorySelect').val('0');
       $('#BuyerComponentSelect').val('0');
       $('#BuyerComponentStageSelect').val('0');
       $('#BuyerComponentSubStageSelect').val('0');
       $('#IsActiveSelect').val('0');
        });
    }
    else {
        Swal("Please Upload a file of video");
    }
    //var componentOperationBodyModel = {
    //    OperationName: operationName,
    //    SmvValue: parseFloat(smvValue),
    //    Machine: machine,
    //    BuyerId: parseInt(buyerId),
    //    BuyerCatId: parseInt(buyerCategoryId),
    //    ComponentId: parseInt(buyerComponentId),
    //    ComponentCatId: parseInt(componentCatId),
    //    ComponentSubCatId: parseInt(componentSubCatId),
    //    IsActive: parseInt(isActive)
    //}

    //var route = localApiPath + "api/Admin/Operation/AddOperation";
    //var input = JSON.stringify(componentOperationBodyModel);

    //var returnComponentOperationInsertResponse = function (data) {

    //    Swal({
    //        position: 'center',
    //        type: 'success',
    //        title: componentOperationBodyModel.OperationName + ' operation has been saved',
    //        showConfirmButton: false,
    //        timer: 2000
    //    });

    //    $('#OperationText').val('');
    //    $('#smvText').val('');
    //    $('#MachineText').val('');
    //    $('#BuyerSelect').val('0');
    //    $('#BuyerCategorySelect').val('0');
    //    $('#BuyerComponentSelect').val('0');
    //    $('#BuyerComponentStageSelect').val('0');
    //    $('#BuyerComponentSubStageSelect').val('0');
    //    $('#IsActiveSelect').val('0');
    //};
    //var responseData = CallServerMethod('Post', route, input, 'false', returnComponentOperationInsertResponse);

}


function LoadBuyerComponentSubStage() {
    var componentStageId = $('#BuyerComponentStageSelect').val();

    var route = localApiPath + "api/Admin/Buyer/GetBuyerComponentSubStages/" + componentStageId;
    var input = "";

    var responseGetBuyerComponentStage = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Select Component Stage' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].ComponentStageId + '>' + data[loop].ComponentStage + '</option>';
        }
        $('#BuyerComponentSubStageSelect').empty();
        $('#BuyerComponentSubStageSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetBuyerComponentStage);

}
