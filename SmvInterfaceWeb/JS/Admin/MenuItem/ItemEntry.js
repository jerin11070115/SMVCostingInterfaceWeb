function AddItem() {
    var item = $('#ItemText').val();
    var subSubCategoryId = $('#subSubCategorySelect').val();
    var subCategoryId = $('#subCategorySelect').val();
    var categoryId = $('#CategorySelect').val();
    var isActive = $('#IsActiveSelect').val();
    var description = $('#DescriptionTextArea').val();

    if (description === '') {
        description = '';
    }

    if (item === '') {
        Swal("Please Enter Item Name");
    }

    else if (categoryId === '0') {
        Swal("Please Select A Category Name");
    }
    else if (subCategoryId === '0') {
        Swal("Please Select A Sub Category Name");
    }
    else if (subSubCategoryId === '0') {
        Swal("Please Select A Category Name");
    }
    else {
        var ItemModel = {
            ItemName: item,
            SubSubCategoryId: parseInt(subSubCategoryId),
            CategoryId: parseInt(categoryId),
            SubCategoryId: parseInt(subCategoryId),
            IsActive: parseInt(isActive),
            Description: description
        };


        var route = localApiPath + "api/Admin/MenuItem/Item/Insert";
        var input = JSON.stringify(ItemModel);

        var returnItemInsertResponse = function (data) {

            Swal({
                position: 'center',
                type: 'success',
                title: ItemModel.ItemName + ' Item has been saved',
                showConfirmButton: false,
                timer: 2000
            });


            //console.log(data);
            $('#ItemText').val('');
            $("#subSubCategoryText").val('');
            $("#CategorySelect").val('0');
            $("#subCategorySelect").val('0');
            $("#IsActiveSelect").val('0');
            $('#DescriptionTextArea').val('');
        };
        var responseData = CallServerMethod('Post', route, input, 'false', returnItemInsertResponse);

    }
}
function LoadItemTable() {
    var route = localApiPath + "api/Admin/MenuItem/GetAllItems";
    var input = ""
    var returnItemTableResponse = function (data) {
        var output = '';
        if (data.length > 0) {
            output = ' <table class="table table-striped table-bordered table-hover">';
            output += ' <thead class="thin-border-bottom">';
            output += ' <tr>';
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
                output += '<td style="text-align:center;">' + data[i].ItemName + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubSubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].CategoryName + '</td>';

                output += '</tr>';

            }
            output += '</tbody>';
            output += ' </table>';

            $('#loadItemTable').empty();
            $('#loadItemTable').append(output);
        }
    }

    var responseData = CallServerMethod('GET', route, input, 'false', returnItemTableResponse);
}