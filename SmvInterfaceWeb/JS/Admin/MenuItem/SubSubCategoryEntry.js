function LoadSubCategory() {
    var categoryId = $('#CategorySelect').val();

    var route = localApiPath + "api/Admin/MenuItem/LoadSubcategory/" + categoryId;
    var input = "";

    var responseGetSubCategory = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Sub Category' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].SubCategoryId + '>' + data[loop].SubCategory + '</option>';
        }
        $('#subCategorySelect').empty();
        $('#subCategorySelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetSubCategory);

}


function LoadSubSubCategory() {
    var subCategoryId = $('#subCategorySelect').val();
    var route = localApiPath + "api/Admin/MenuItem/LoadSubSubcategory/" + subCategoryId;
    var input = "";

    var responseGetSubSubCategory = function (data) {
        var output = '';
        output += '<option value= 0 >' + 'Please Select Sub Sub Category' + '</option>';
        for (var loop = 0; loop < data.length; loop++) {

            output += '<option value=' + data[loop].SubSubCategoryId + '>' + data[loop].SubSubCategory + '</option>';
        }
        $('#subSubCategorySelect').empty();
        $('#subSubCategorySelect').append(output);
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetSubSubCategory);
}


function AddSubSubCategory() {
    var subSubCategory = $('#subSubCategoryText').val();
    var subCategoryId = $('#subCategorySelect').val();
    var categoryId = $('#CategorySelect').val();
    var isActive = $('#IsActiveSelect').val();

    if (subSubCategory === '') {
        Swal("Please Enter Sub Sub Category Name");
    }
    else if (categoryId === '0') {
        Swal("Please Select A Category Name");
    }
    else if (subCategoryId === '0') {
        Swal("Please Select A Sub Category Name");
    }
    else {
        var SubSubCategoryModel = {
            SubSubCategory: subSubCategory,
            CategoryId: parseInt(categoryId),
            SubCategoryId: parseInt(subCategoryId),
            IsActive: parseInt(isActive)
        };


        var route = localApiPath + "api/Admin/MenuItem/SubSubCategory/Insert";
        var input = JSON.stringify(SubSubCategoryModel);

        var returnSubSubCategoryInsertResponse = function (data) {

            Swal({
                position: 'center',
                type: 'success',
                title: SubSubCategoryModel.SubSubCategory + ' SubSubCategory has been saved',
                showConfirmButton: false,
                timer: 2000
            });


            //console.log(data);
            $("#subSubCategoryText").val('');
            $("#CategorySelect").val('0');
            $("#subCategorySelect").val('0');
            $("#IsActiveSelect").val('0');
        };
        var responseData = CallServerMethod('Post', route, input, 'false', returnSubSubCategoryInsertResponse);

    }  
}
function LoadSubSubCategoryTable() {
    var route = localApiPath + "api/Admin/MenuItem/GetAllSubSubCategory";
    var input = ""
    var returnSubSubCategoryTableResponse = function (data) {
        var output = '';
        if (data.length > 0) {
            output = ' <table class="table table-striped table-bordered table-hover">';
            output += ' <thead class="thin-border-bottom">';
            output += ' <tr>';
            output += ' <th style="text-align:center">Sub Sub Category';
            output += ' </th>';
            output += ' <th style="text-align:center">Sub Category';
            output += ' </th>';
            output += ' <th style="text-align:center">CategoryName';
            output += ' </th>';

            output += ' </tr>';
            output += ' </thead>';
            output += '<tbody>';
            for (var i = 0; i < data.length; i++) {
                output += '<tr>';
                output += '<td style="text-align:center;">' + data[i].SubSubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].CategoryName + '</td>';

                output += '</tr>';

            }
            output += '</tbody>';
            output += ' </table>';

            $('#loadSubSubCategoryTable').empty();
            $('#loadSubSubCategoryTable').append(output);
        }
    }

    var responseData = CallServerMethod('GET', route, input, 'false', returnSubSubCategoryTableResponse);
}