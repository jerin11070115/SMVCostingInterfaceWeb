function myFunction() {

    var categoryName = $("#categoryText").val();
    var isActive = $("#IsActiveSelect").val();

    if (categoryName === '') {
        Swal("Please Enter Category Name");        
    }
    else {
        var CategoryModel = {
            CategoryName: categoryName,
            IsActive: isActive
        };

        var route = localApiPath + "api/Admin/MenuItem/Category/Insert";
        var input = JSON.stringify(CategoryModel);

        var returnCategoryInsertResponse = function (data) {

            Swal({
                position: 'center',
                type: 'success',
                title: CategoryModel.CategoryName + ' category has been saved',
                showConfirmButton: false,
                timer: 2000
            });


            //console.log(data);
            $("#categoryText").val('');
            $("#IsActiveSelect").val('0');
        };
        var responseData = CallServerMethod('Post', route, input, 'false', returnCategoryInsertResponse);        
        
    }
}

function LoadCategoryTable() {

    var route = localApiPath + "api/Admin/MenuItem/GetAllCategory";
    var input = ''

    var returnCategoryTableResponse = function (data) {
        var output = '';
        if (data.length > 0) {
            output = ' <table class="table table-striped table-bordered table-hover">';
            output += ' <thead class="thin-border-bottom">';
            output += ' <tr>';
            output += ' <th style="text-align:center">Category Id';
            output += ' </th>';
            output += ' <th style="text-align:center">Category Name';
            output += ' </th>';
            output += ' <th style="text-align:center">IsActive';
            output += ' </th>';
            output += '<th style="text-align:center">Posted On';
            output += '</th>';
            output += ' </tr>';
            output += ' </thead>';
            output += '<tbody>';
            for (var i = 0; i < data.length; i++) {
                output += '<tr>';
                output += '<td style="text-align:center;">' + data[i].CategoryId + '</td>';
                output += '<td style="text-align:center;">' + data[i].CategoryName + '</td>';
                output += '<td style="text-align:center;">' + data[i].IsActive + '</td>';
                output += '<td style="text-align:center;">' + data[i].PostedOn  + '</td>';
                output += '</tr>';

            }
            output += '</tbody>';
            output += ' </table>';

            $('#loadCategoryTable').empty();
            $('#loadCategoryTable').append(output);
        }
    }

    var responseData = CallServerMethod('GET', route, input, 'false', returnCategoryTableResponse);
} 