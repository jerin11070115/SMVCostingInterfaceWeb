function AddSampleStage() {
    var buyerId = $('#BuyerSelect').val();
    var isActive = $('#IsActiveSelect').val();
    var sampleStage = $('#sampleText').val();

    if (sampleStage === '') {
        Swal("Please enter a buyer sample stage.. ");
    }
    else if (buyerId === '0') {
        Swal("Please select a buyer");
    }
    else {
        var SampleStageModel = {
            BuyerId: parseInt(buyerId),
            IsActive: parseInt(isActive),
            SampleStage: sampleStage
        }

        var route = localApiPath + "api/Admin/Buyer/AddSampleStage";
        var input = JSON.stringify(SampleStageModel);


        var buyerSampleResponse = function (data) {
            Swal({
                position: 'center',
                type: 'success',
                title: SampleStageModel.SampleStage + ' buyer sample stage has been saved',
                showConfirmButton: false,
                timer: 2000
            });

            $('#sampleText').val('');
            $('#BuyerSelect').val('0');
            $('#IsActiveSelect').val('0');

        }
        var responseData = CallServerMethod('Post', route, input, 'false', buyerSampleResponse);
    }
    
}

