$(document).ready(function () {
    LoadCategory();
});

function LoadCategory() {
    var route = localApiPath + "api/admin/menuitem/category/getcategory";
    var input = "";

    var responseGetCategory = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Category' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].CategoryId + '>' + data[loop].CategoryName + '</option>';
        }
        $('#CategorySelect').empty();
        $('#CategorySelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetCategory);
}

function AddSubCategory() {
    var subCategory = $('#subCategoryText').val();
    var categoryId = $('#CategorySelect').val();
    var isActive = $('#IsActiveSelect').val();

    if (subCategory === '') {
        Swal("Please Enter Sub Category Name");
    }
    else if (categoryId === '0') {
        Swal("Please Select A Category Name");
    }
    else {

        var SubcategoryModel = {
            SubCategory: subCategory,
            CategoryId: parseInt(categoryId),
            IsActive: parseInt(isActive)
        };


        var route = localApiPath + "api/Admin/MenuItem/SubCategory/Insert";
        var input = JSON.stringify(SubcategoryModel);

        var returnSubCategoryInsertResponse = function (data) {

            Swal({
                position: 'center',
                type: 'success',
                title: SubcategoryModel.SubCategory + ' SubCategory has been saved',
                showConfirmButton: false,
                timer: 2000
            });


            //console.log(data);
            $("#subCategoryText").val('');
            $("#CategorySelect").val('0');
            $("#IsActiveSelect").val('0');
        };
        var responseData = CallServerMethod('Post', route, input, 'false', returnSubCategoryInsertResponse);
    }
}
function LoadSubCategoryTable() {
    var route = localApiPath + "api/Admin/MenuItem/GetAllSubCategory";
    var input = ""
    var returnSubCategoryTableResponse = function (data) {
        var output = '';
        if (data.length > 0) {
            output = ' <table class="table table-striped table-bordered table-hover">';
            output += ' <thead class="thin-border-bottom">';
            output += ' <tr>';
            output += ' <th style="text-align:center">SubCategory Name';
            output += ' </th>';
            output += ' <th style="text-align:center">Category Name';
            output += ' </th>';
            output += ' <th style="text-align:center">IsActive';
            output += ' </th>';
            
            output += ' </tr>';
            output += ' </thead>';
            output += '<tbody>';
            for (var i = 0; i < data.length; i++) {
                output += '<tr>';
                output += '<td style="text-align:center;">' + data[i].SubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].CategoryName + '</td>';
                output += '<td style="text-align:center;">' + data[i].IsActive + '</td>';
                
                output += '</tr>';

            }
            output += '</tbody>';
            output += ' </table>';

            $('#loadSubCategoryTable').empty();
            $('#loadSubCategoryTable').append(output);
        }
    }
    
    var responseData = CallServerMethod('GET', route, input, 'false', returnSubCategoryTableResponse);
}