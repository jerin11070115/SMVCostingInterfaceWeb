function LoadBuyerComponent() {
    var CategoryId = $('#BuyerCategorySelect').val();
    var BuyerId = $('#BuyerSelect').val();
    var route = localApiPath + "api/Admin/Buyer/GetBuyerComponent/" + BuyerId+'/'+ CategoryId;
    var input = "";

    var responseGetBuyerComponent= function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Component' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].ComponentId + '>' + data[loop].Component + '</option>';
        }
        $('#BuyerComponentSelect').empty();
        $('#BuyerComponentSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetBuyerComponent);

}


function LoadBuyerComponentStage() {
    var componentId = $('#BuyerComponentSelect').val();

    var route = localApiPath + "api/Admin/Buyer/GetBuyerComponentStages/" + componentId;
    var input = "";

    var responseGetBuyerComponentStage = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Select Component Stage' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].ComponentStageId + '>' + data[loop].ComponentStage + '</option>';
        }
        $('#BuyerComponentStageSelect').empty();
        $('#BuyerComponentStageSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetBuyerComponentStage);

}


function AddComponentStage() {
    var componentId = $('#BuyerComponentSelect').val();
    var isActive = $('#IsActiveSelect').val();
    var componentStage = $('#componentStageText').val();
    //var parentId = $('#BuyerComponentSelect').val();
    var parentId = '0';
    var componentStageId = $('#BuyerComponentStageSelect').val();

    if (componentStageId == '0') {
        parentId = '0';
    }
    else {
        parentId = componentStageId;
    }






    var componentStageBodyModel = {
        ComponentStage:componentStage,
        ParentId:parseInt(parentId),
        ComponentId:parseInt(componentId),
        IsActive : parseInt(isActive)
    }
   
    var route = localApiPath + "api/Admin/Buyer/AddComponentStages";
    var input = JSON.stringify(componentStageBodyModel);

    var returnComponentStageInsertResponse = function (data) {

        Swal({
            position: 'center',
            type: 'success',
            title: componentStageBodyModel.ComponentStage + ' Component Stage has been saved',
            showConfirmButton: false,
            timer: 2000
        });


        $('#BuyerSelect').val('0');
        $('#BuyerCategorySelect').val('0');
        $('#IsActiveSelect').val('0');
        $('#componentStageText').val('');
        $('#BuyerComponentSelect').val('0');
    };
    var responseData = CallServerMethod('Post', route, input, 'false', returnComponentStageInsertResponse);

}




function LoadComponentStage() {
    var ComponentId = $('#BuyerComponentSelect').val();

    var route = localApiPath + "api/Admin/Buyer/GetBuyerComponentStages/" + ComponentId;
    var input = "";

    var responseGetBuyerComponentStage = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Component Stage' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].ComponentStageId + '>' + data[loop].ComponentStage + '</option>';
        }
        $('#BuyerComponentStageSelect').empty();
        $('#BuyerComponentStageSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetBuyerComponentStage);

}