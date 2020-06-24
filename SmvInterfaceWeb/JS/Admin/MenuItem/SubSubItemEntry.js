function loadSubItems() {
    var ItemId = $('#itemSelect').val();

    var route = localApiPath + "api/Admin/MenuItem/GetSubItems/" + ItemId;
    var input = "";

    var responseGetItems = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Item' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].SubItemId + '>' + data[loop].SubItemName + '</option>';
        }
        $('#subItemSelect').empty();
        $('#subItemSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetItems);

}

function AddSubSubItems() {
    var subSubItem = $('#subSubItemText').val();
    var subItemId = $('#subItemSelect').val();
    var itemId = $('#itemSelect').val();
    var subSubCategoryId = $('#subSubCategorySelect').val();
    var subCategoryId = $('#subCategorySelect').val();
    var categoryId = $('#CategorySelect').val();
    var isActive = $('#IsActiveSelect').val();

    if (subSubItem === '') {
        Swal("Please Enter Sub Sub Item Name");
    }
    else if (categoryId === '0') {
        Swal("Please Select A Category");
    }
    else if (subCategoryId === '0') {
        Swal("Please Select A Sub Category");
    }
    else if (subSubCategoryId === '0') {
        Swal("Please Select A Sub Sub Category");
    }
    else if (itemId === '0') {
        Swal("Please Select A Item");
    }
    else if (subItemId === '0') {
        Swal("Please Select A Sub Item");
    }
    else {
        var SubSubItemModel = {
            SubSubItem: subSubItem,
            SubItemId: parseInt(subItemId),
            ItemId: parseInt(itemId),
            SubSubCategoryId: parseInt(subSubCategoryId),
            SubCategoryId: parseInt(subCategoryId),
            CategoryId: parseInt(categoryId),
            IsActive: parseInt(isActive)
        };


        var route = localApiPath + "api/Admin/MenuItem/SubSubItem/Insert";
        var input = JSON.stringify(SubSubItemModel);

        var returnSubSubItemInsertResponse = function (data) {

            Swal({
                position: 'center',
                type: 'success',
                title: SubSubItemModel.SubSubItem + ' Sub Sub Item has been saved',
                showConfirmButton: false,
                timer: 2000
            });


            //console.log(data);
            $('#subSubItemText').val('');
            $('#subItemSelect').val('0');
            $('#itemSelect').val('0');
            $('#subSubCategorySelect').val('0');
            $('#subCategorySelect').val('0');
            $('#CategorySelect').val('0');
            $('#IsActiveSelect').val('0');
        };
        var responseData = CallServerMethod('Post', route, input, 'false', returnSubSubItemInsertResponse);

    }
}