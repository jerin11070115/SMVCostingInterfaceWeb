$(document).ready(function () {
    getbuyer();

});

function getbuyer() {
    //var url = localApiPath + "api/Admin/MenuItem/GetBuyers";
    
    var subItem = localStorage.getItem('SubItemId');
    var url = localApiPath + "/api/site/navbar/BuyerMenu/" + subItem;
   

    var input = "";
    var getBuyerResponse = function (data) {
        var output = '';

        for (var loop = 0; loop < data.length; loop++) {   
            output += '<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">';
            output += '<div class="buyerimagediv">';
            output += '<a href="#"><img class="buyerimage" style="width: 100px;height: 75px;"  src=' + '"' + imagePath + '/buyers/' + data[loop].BuyerName + '_logo.png' + '"' + ' /></a>';
            
            
            if (data[loop].BuyerCategorys.length > 0) {
                output += '<div class="dropdown box-dropdown">';
                output += '<button class="btn btn-seemore dropdown-toggle" type="button" data-toggle="dropdown" style="width: 110px;"><b>' + data[loop].BuyerName;
                output += '<span class="caret"></span>';
                output += '</b></button>';
                output += '<ul class="dropdown-menu" style="width: 100px;">';
                for (var categoryloop = 0; categoryloop < data[loop].BuyerCategorys.length; categoryloop++) {
                    output += '<li style="text-align: center;" onclick="GetValue(' + data[loop].BuyerId + ',' + data[loop].BuyerCategorys[categoryloop].BuyerCategoryId + ')">' + data[loop].BuyerCategorys[categoryloop].BuyerCategory;
                    output += '</li>';
                }
                output += '</ul>';

            }  
            else {
                output += '<div class="dropdown box-dropdown" style="width: 100px;">';
                output += '<button class="btn btn-seemore dropdown-toggle" type="button" onclick="GetValue(' + data[loop].BuyerId + ',' + 0 + ')"><b>' + data[loop].BuyerName;
                output += '</b></button>';
            }
           
            output +='</div > ';
            output += '</div > ';
            output += '</div>';
        }

        $('#buyerdetails').empty();
        $('#buyerdetails').append(output);
    };

    CallServerMethod('get', url, input, 'false', getBuyerResponse);
}

function GetValue(buyerId,buyerCategoryId) {
    
    localStorage.removeItem('BuyerCategoryId');
    localStorage.removeItem('BuyerId');

    localStorage.setItem('BuyerId', buyerId);
    localStorage.setItem('BuyerCategoryId', buyerCategoryId);

    window.location.href=sitePath + "component.html";
}