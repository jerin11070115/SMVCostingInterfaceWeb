function loadItems() {
    var subSubCategoryId = $('#subSubCategorySelect').val();

    var route = localApiPath + "api/Admin/MenuItem/GetItems/" + subSubCategoryId;
    var input = "";

    var responseGetItems = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Item' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].ItemId + '>' + data[loop].ItemName + '</option>';
        }
        $('#itemSelect').empty();
        $('#itemSelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetItems);
    
}







function AddSubItems() {
    subItemName = $('#subItemText').val();
    isActive = $('#IsActiveSelect').val();
    categoryId = $('#CategorySelect').val();
    subCategoryId = $('#subCategorySelect').val();
    subSubCategoryId = $('#subSubCategorySelect').val();
    itemId = $('#itemSelect').val();

    if (subItemName === '') {
        Swal("Please Enter Sub Item Name");
    }
    else if (categoryId === '0') {
        Swal("Please Select A Category Name");
    }
    else if (subCategoryId === '0') {
        Swal("Please Select A Sub Category Name");
    }
    else if (subSubCategoryId === '0') {
        Swal("Please Select A Sub Sub Category Name");
    }
    else if (itemId === '0') {
        Swal("Please Select A Item Name");
    }
    else {
        var SubItemModel = {
            SubItemName: subItemName,
            CategoryId: parseInt(categoryId),
            SubCategoryId: parseInt(subCategoryId),
            SubSubCategoryId: parseInt(subSubCategoryId),
            ItemId: parseInt(itemId),           
            IsActive: parseInt(isActive)
        };


        var route = localApiPath + "api/Admin/MenuItem/SubItem/Insert";
        var input = JSON.stringify(SubItemModel);

        var returnSubItemInsertResponse = function (data) {

            Swal({
                position: 'center',
                type: 'success',
                title: SubItemModel.SubItemName + ' Sub Item has been saved',
                showConfirmButton: false,
                timer: 2000
            });


            //console.log(data);
            $('#subItemText').val('');
            $('#subSubCategorySelect').val('0');
            $("#CategorySelect").val('0');
            $("#subCategorySelect").val('0');
            $("#IsActiveSelect").val('0');
            $('#itemSelect').val('0');
        };
        var responseData = CallServerMethod('Post', route, input, 'false', returnSubItemInsertResponse);

    }
}
function LoadSubItemTable() {
    var route = localApiPath + "api/Admin/MenuItem/GetAllSubItems";
    var input = ""
    var returnSubItemTableResponse = function (data) {
        var output = '';
        if (data.length > 0) {
            output = ' <table class="table table-striped table-bordered table-hover">';
            output += ' <thead class="thin-border-bottom">';
            output += ' <tr>';
            output += ' <th style="text-align:center">Sub Item Name';
            output += ' </th>';
            output += ' <th style="text-align:center">Item Name';
            output += ' </th>';
            output += ' <th style="text-align:center">Sub Sub Category';
            output += ' </th>';
            output += ' <th style="text-align:center">Sub Category';
            output += ' </th>';
            output += ' <th style="text-align:center">Category Name';
            output += ' </th>';

            output += ' </tr>';
            output += ' </thead>';
            output += '<tbody>';
            for (var i = 0; i < data.length; i++) {
                output += '<tr>';
                output += '<td style="text-align:center;">' + data[i].SubItemName + '</td>';
                output += '<td style="text-align:center;">' + data[i].ItemName + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubSubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].CategoryName + '</td>';

                output += '</tr>';

            }
            output += '</tbody>';
            output += ' </table>';

            $('#loadSubItemTable').empty();
            $('#loadSubItemTable').append(output);
        }
    }

    var responseData = CallServerMethod('GET', route, input, 'false', returnSubItemTableResponse);
}