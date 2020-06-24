$(document).ready(function () {
    getbuyer();

});


function getbuyer() {
    var url = localApiPath + "api/Admin/MenuItem/GetBuyers";
    var input = "";
    var getBuyerResponse = function (data) {

        var output = '';
        output = '<option value="0">Please select a buyer</option>';

        for (var loop = 0; loop < data.length; loop++) {
            output += '<option value=' + data[loop].BuyerId + '>' + data[loop].BuyerName+'</option>';
        }

        $('#BuyerSelect').empty();
        $('#BuyerSelect').append(output);
    };

    CallServerMethod('get', url, input, 'false', getBuyerResponse);
}


function getSampleStage() {
    var buyerId = parseInt ($('#BuyerSelect').val());

    var url = localApiPath + "api/Admin/Buyer/GetBuyerSampleStages/" + buyerId;
    var input = "";
    var getSampleStageResponse = function (data) {

        var output = '';
        output = '<option value="0">Please select a sample stage</option>';

        for (var loop = 0; loop < data.length; loop++) {
            output += '<option value=' + data[loop].SampleStageId + '>' + data[loop].SampleStage + '</option>';
        }

        $('#SampleStageSelect').empty();
        $('#SampleStageSelect').append(output);
    };

    CallServerMethod('get', url, input, 'false', getSampleStageResponse);
}


function AddBuyerCategory() {
    
    var buyerCategory = $('#BuyerCategoryText').val();
    var buyerId = $('#BuyerSelect').val();
    var isActive = $('#IsActiveSelect').val();
    //var sampleStageId = $('#SampleStageSelect').val();

    if (buyerCategory === '') {
        Swal("Please enter a buyer category name.. ");
    }
    else if (buyerId === '0') {
        Swal("Please select a buyer");
    }
    //else if (sampleStageId === '0') {
    //    Swal("Please select a buyer's Sample Stage");
    //}
    else {

        var BuyerCategoryModel = {
            BuyerCategory: buyerCategory,
            BuyerId: parseInt(buyerId),
            IsActive: parseInt(isActive),
           // SampleStageId: parseInt(sampleStageId)
        };
        
        var route = localApiPath + "api/Admin/Buyer/AddBuyerCategory";
        var input = JSON.stringify(BuyerCategoryModel);

        var buyerCategoryResponse = function (data) {
            Swal({
                position: 'center',
                type: 'success',
                title: BuyerCategoryModel.BuyerCategory + ' buyer category has been saved',
                showConfirmButton: false,
                timer: 2000
            });

            $('#BuyerCategoryText').val('');
            $('#BuyerSelect').val('0');
            $('#IsActiveSelect').val('0');
            //$('#SampleStageSelect').val('0');

        }
        var responseData = CallServerMethod('Post', route, input, 'false', buyerCategoryResponse);
    }
}