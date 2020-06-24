$(document).ready(function () {
    GetBuyers();
});


function LoadSubItem() {
    var itemId = $('#itemSelect').val();

    var route = localApiPath + "api/Admin/MenuItem/GetSubItems/" + itemId;
    var input = "";

    var responseGetSubItems = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Sub Item' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].SubItemId + '>' + data[loop].SubItemName + '</option>';
        }
        $('#subItemSelect').empty();
        $('#subItemSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetSubItems);
}


function GetBuyers() {

    var route = localApiPath + "api/Admin/MenuItem/GetBuyers";
    var input = "";

    var responseGetBuyer = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Buyer' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].BuyerId + '>' + data[loop].BuyerName + '</option>';
        }
        $('#buyerSelect').empty();
        $('#buyerSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetBuyer);
}


function AddBuyerMapping() {
    var categoryId = $('#CategorySelect').val();
    var subCategoryId = $('#subCategorySelect').val();
    var subSubcategoryId = $('#subSubCategorySelect').val();
    var itemId = $('#itemSelect').val();
    var subItemId = $('#subItemSelect').val();
    var buyerId = $('#buyerSelect').val();
    var isActive = $('#IsActiveSelect').val();

    if (categoryId === '0') {
        Swal("Please enter a category name.. ");
    }
    else if (subCategoryId === '0') {
        Swal("Please select a sub category");
    }
    else if (subSubcategoryId === '0') {
        Swal("Please select a sub sub category");
    }
    else if (itemId === '0') {
        Swal("Please select an item");
    }
    else if (subItemId === '0') {
        Swal("Please select a subitem");
    }
    else if (buyerId === '0') {
        Swal("Please select a buyer");
    }
    else {

        var BuyerMappingBodyModel = {
            CategoryId: parseInt(categoryId),
            SubCategoryId: parseInt(subCategoryId),
            SubSubCategoryId: parseInt(subSubcategoryId),
            ItemId: parseInt(itemId),
            SubItemId: parseInt(subItemId),
            BuyerId: parseInt(buyerId),
            IsActive: parseInt(isActive)
        };
        var route = localApiPath + "api/Admin/Buyer/AddBuyerMapping";
        var input = JSON.stringify(BuyerMappingBodyModel);

        var buyerMappingResponse = function (data) {
            Swal({
                position: 'center',
                type: 'success',
                title:  'This buyer has been maped',
                showConfirmButton: false,
                timer: 2000
            });

            $('#CategorySelect').val('0');
            $('#subCategorySelect').val('0');
            $('#subSubCategorySelect').val('0');
            $('#itemSelect').val('0');
            $('#subItemSelect').val('0');
            $('#buyerSelect').val('0');
            $('#IsActiveSelect').val('0');

        }
        var responseData = CallServerMethod('Post', route, input, 'false', buyerMappingResponse);
    }
}