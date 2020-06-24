$(document).ready(function () {
    localStorage.clear();
});


$(function () {
    $("#styleText").autocomplete({

        source: function (request, response) {
            var styleNumber = $('#styleText').val();
            var buyerId = $('#buyerSelect').val();
            $('.ui-autocomplete').css('z-index', '1000');
            var operationSearchBodyModel = {

                BuyerId: parseInt(buyerId),               
                StyleNumber: styleNumber
            };

            var route = localApiPath + "api/site/operation/GetBuyerStyleNumber";
            var input = JSON.stringify(operationSearchBodyModel);

            var operationSearchResponse = function (data) {
                response($.map(data, function (item) {
                    return {
                        value: item.OperationName,                        
                    };
                }));
            };


            var responseData = CallServerMethod('Post', route, input, 'false', operationSearchResponse);
        },
        select: function (event, ui) {
            var style = ui.item.value;            
            $('#styleText').val(style);
            return false;
        },

        minLength: 1
    });
});

function LoadSummaryData() {

    var styleNumber = $('#styleText').val();
    var buyerId = $('#buyerSelect').val();    
    var operationSearchBodyModel = {

        BuyerId: parseInt(buyerId),
        StyleNumber: styleNumber
    };

    var route = localApiPath + "api/site/operation/GetOperationbBulletinSummary";
    var input = JSON.stringify(operationSearchBodyModel);

    var operationSearchResponse = function (data) {

        var output = '';
        if (data.length > 0) {
            output = ' <table class="table table-striped table-bordered table-hover">';
            output += ' <thead class="thin-border-bottom">';
            output += ' <tr>';
            output += ' <th style="text-align:center">Item';
            output += ' </th>';
            output += ' <th style="text-align:center">Wearer';
            output += ' </th>';
            output += ' <th style="text-align:center">Item Category';
            output += ' </th>';
            output += ' <th style="text-align:center">Fabric';
            output += ' </th>';
            output += ' <th style="text-align:center">Product Category';
            output += ' </th>';
            output += ' <th style="text-align:center">Buyer';
            output += ' </th>';
            output += ' <th style="text-align:center">Buyer Category';
            output += ' </th>';
            output += ' <th style="text-align:center">Component';
            output += ' </th>';
            output += ' <th style="text-align:center">Style Number';
            output += ' </th>';
            output += ' <th style="text-align:center">Design Number';
            output += ' </th>';
            output += ' <th style="text-align:center">Sample Date';
            output += ' </th>';
            output += ' <th style="text-align:center">SampleStage';
            output += ' </th>';
            output += ' <th style="text-align:center">PostedOn';
            output += ' </th>';
            output += ' <th style="text-align:center">Show More';
            output += ' </th>';
            output += ' </tr>';
            output += ' </thead>';
            output += '<tbody>';
            for (var i = 0; i < data.length; i++) {
                output += '<tr>';
                output += '<td style="text-align:center;">' + data[i].CategoryName + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubSubCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].ItemName + '</td>';
                output += '<td style="text-align:center;">' + data[i].SubItemName + '</td>';
                output += '<td style="text-align:center;">' + data[i].BuyerName + '</td>';
                output += '<td style="text-align:center;">' + data[i].BuyerCategory + '</td>';
                output += '<td style="text-align:center;">' + data[i].Component + '</td>';
                output += '<td style="text-align:center;">' + data[i].StyleNumber + '</td>';
                output += '<td style="text-align:center;">' + data[i].DesignNumber + '</td>';
                output += '<td style="text-align:center;">' + data[i].SampleDate + '</td>';
                output += '<td style="text-align:center;">' + data[i].SampleStage + '</td>';
                output += '<td style="text-align:center;">' + data[i].PostedOn + '</td>';
                output += '<td style="text-align:center;" data-toggle="modal" data-target="#ShowDataModal" onclick=' + 'LoadObDetails(' + '"' + data[i].GroupId + '"' + ')' + '>' + 'Details' + '</td>';

          
                output += '</tr>';

            }
            output += '</tbody>';
            output += ' </table>';

            $('#dataSummary').empty();
            $('#dataSummary').append(output);

        }
    }

        var responseData = CallServerMethod('Post', route, input, 'false', operationSearchResponse);
    
}





//function LoadObDetails(value) {
//    var groupId = value;

//    var operationSearchBodyModel = {
//        GroupId: groupId
//    };

//    var route = localApiPath + "api/site/operation/GetOperationbBulletinDetails";
//    var input = JSON.stringify(operationSearchBodyModel);

//    var operationSearchResponse = function (data) {

//        var output = '';
//        var fotter = '';
//        if (data.length > 0) {
//            output = ' <table class="table table-striped table-bordered table-hover">';
//            output += ' <thead class="thin-border-bottom">';
//            output += ' <tr>';
//            output += ' <th style="text-align:center">Component';
//            output += ' </th>';
//            output += ' <th style="text-align:center">Style Number';
//            output += ' </th>';
//            output += ' <th style="text-align:center">Design Number';
//            output += ' </th>';
//            output += ' <th style="text-align:center">Sample Date';
//            output += ' </th>';
//            output += ' <th style="text-align:center">SampleStage';
//            output += ' </th>';
//            output += ' <th style="text-align:center">Season';
//            output += ' </th>';

//            output += ' <th style="text-align:center">Operation Name';
//            output += ' </th>';
//            output += ' <th style="text-align:center">SmvValue';
//            output += ' </th>';
//            output += ' <th style="text-align:center">Machine';
//            output += ' </th>';
//            output += ' <th style="text-align:center">Comments';
//            output += ' </th>';
            
//            output += ' </tr>';
//            output += ' </thead>';
//            output += '<tbody>';
//            for (var i = 0; i < data.length; i++) {
//                output += '<tr>';
//                output += '<td style="text-align:center;">' + data[i].Component + '</td>';
//                output += '<td style="text-align:center;">' + data[i].StyleNumber + '</td>';
//                output += '<td style="text-align:center;">' + data[i].DesignNumber + '</td>';
//                output += '<td style="text-align:center;">' + data[i].SampleDate + '</td>';
//                output += '<td style="text-align:center;">' + data[i].SampleStage + '</td>';
//                output += '<td style="text-align:center;">' + data[i].Season + '</td>';

//                output += '<td style="text-align:center;">' + data[i].OperationName + '</td>';

//                output += '<td style="text-align:center;">' + data[i].SmvValue + '</td>';

//                output += '<td style="text-align:center;">' + data[i].Machine + '</td>';

//                output += '<td style="text-align:center;">' + data[i].Comments + '</td>';


          

//                output += '</tr>';
                
//            }
//            output += '</tbody>';
//            output += ' </table>';

//            fotter += ' <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ';
//            fotter += ' <button type = "button" class="btn btn-primary" data-dismiss="modal" onclick=' + 'setOperation(' + data[0].CategoryId + ',' + data[0].SubCategoryId + ',' + data[0].SubSubCategoryId + ',' + data[0].ItemId + ',' + data[0].SubItemId + ',' + data[0].BuyerId + ',' + data[0].BuyerCatId + ',' + '"' + data[0].StyleNumber + '"' + ',' + '"' + data[0].DesignNumber + '"' + ',' + '"' + data[0].Season + '"' + ')' + ' > Set Operation</button > ';


//            $('#showDetailsTable').empty();
//            $('#showDetailsTable').append(output);
//            $('#modalfooter').empty();
//            $('#modalfooter').append(fotter);
//        }
//    }

//    var responseData = CallServerMethod('Post', route, input, 'false', operationSearchResponse);

//}

function LoadObDetails(value) {
    var groupId = value;

    var operationSearchBodyModel = {
        GroupId: groupId
    };

    var route = localApiPath + "api/site/operation/GetOperationbBulletinDetails";
    var input = JSON.stringify(operationSearchBodyModel);

    

    var operationSearchResponse = function (data) {
        var groupedData = _.groupBy(data, function (d) { return d.Component; });
        var output = '';
        var HeadingData = Object.keys(groupedData);
        var fotter = '';

        var resultdata = JSON.stringify(data);
        localStorage.removeItem('AddComponents');
        localStorage.setItem('AddComponents', resultdata);

        if (HeadingData.length > 0) {
            var alltotal = 0;
            output += '<table class="table table-striped table-bordered table-hover">';
            output += '<tr>';
            output += '<td colspan="1"> Buyer Name';
            output += '</td>';
            output += '<td colspan="2">' + data[0].BuyerName;
            output += '</td>';
            output += '<td colspan="1"> Style number';
            output += '</td>';
            output += '<td colspan="2">' + data[0].StyleNumber;
            output += '</td>';
            output += '<td colspan="1"> Design number';
            output += '</td>';
            output += '<td colspan="2">' + data[0].DesignNumber;
            output += '</td>';
            output += '</tr>';

            output += '<tr>';
            output += '<td colspan="1"> Category';
            output += '</td>';
            output += '<td colspan="2">' + data[0].CategoryName;
            output += '</td>';
            output += '<td colspan="1"> Sub Category';
            output += '</td>';
            output += '<td colspan="2">' + data[0].SubCategory;
            output += '</td>';
            output += '<td colspan="1"> Sub Sub Category';
            output += '</td>';
            output += '<td colspan="2">' + data[0].SubSubCategory;
            output += '</td>';
            output += '</tr>';

            //output += '<tr>';
            //output += '<td colspan="1"> item';
            //output += '</td>';
            //output += '<td colspan="2">' + data[0].ItemName;
            //output += '</td>';
            //output += '<td colspan="1">sub item';
            //output += '</td>';
            //output += '<td colspan="2">' + data[0].SubItemName;
            //output += '</td>';
            //output += '<td colspan="1">Sample Stage';
            //output += '</td>';
            //output += '<td colspan="2">' + data[0].SampleStage;
            //output += '</td>';
            //output += '</tr>';

            output += '<tr>';
            output += '<td colspan="1">Buyer Category';
            output += '</td>';
            if (data[0].BuyerCategory == null) {
                output += '<td colspan="2">';
                output += '</td>';
            }
            else {
                output += '<td colspan="2">' + data[0].BuyerCategory;
                output += '</td>';
            }

            output += '<td colspan="1">sub item';
            output += '</td>';
            output += '<td colspan="2">' + data[0].Season;
            output += '</td>';
            output += '<td colspan="1">Sample Date';
            output += '</td>';
            output += '<td colspan="2">' + data[0].SampleDate;
            output += '</td>';
            output += '</tr>';
            output += '<tr>';
            output += '</tr>';
            output += ' </table>';

            for (var i = 0; i < HeadingData.length; i++) {
                var totalSmv = 0;
                output += '<div class="col-lg-12">';
                output += '<table class="table table-striped table-bordered table-hover">';
                output += '<thead class="thin-border-bottom">';
                output += '<tr>';
                output += '<th style="text-align:center" colspan="5">' + HeadingData[i];
                output += '</th>';
                output += '</tr >';
                output += ' <tr>';
                output += ' <th style="text-align:center" colspan="1">Operation Name';
                output += ' </th>';
                output += ' <th style="text-align:center" colspan="1">Smv';
                output += ' </th>';
                output += ' <th style="text-align:center" colspan="1">Machine';
                output += ' </th>';
                output += '<th style="text-align:center" colspan="1">Comments';
                output += '</th>';
               
                output += ' </tr>';
                output += ' </thead>';
                output += '<tbody>';
                for (var j = 0; j < data.length; j++) {

                    if (HeadingData[i] == data[j].Component) {
                        totalSmv += parseFloat(data[j].SmvValue);

                        output += '<tr>';
                        output += '<td style="text-align:center;" colspan="1">' + data[j].OperationName + '</td>';
                        output += '<td style="text-align:center;" colspan="1">' + data[j].SmvValue + '</td>';
                        output += '<td style="text-align:center;" colspan="1">' + data[j].Machine + '</td>';
                        if (data[i].Comments != null) {
                            output += '<td style="text-align:center;" colspan="1">' + data[j].Comments + '</td>';
                        }
                        else {
                            output += '<td style="text-align:center;" colspan="1">' + '' + '</td>';
                        }
                        
                        output += '</tr>';


                    }
                }

                output += '<tr>';
                output += '<td style="text-align:center;" colspan="3"><b>Sub Total Smv</b></td>';
                output += '<td style="text-align:center;" colspan="2"><b>' + totalSmv.toFixed(3) + '</b></td>';
                output += '</tr>';
                output += '<tr>';
                output += '</tr>';
                output += '</tbody>';
                output += ' </table>';
                output += '</div >';
                alltotal += totalSmv;
            }
            output += '<table class="table table-striped table-bordered table-hover">';

            output += '<tr>';
            output += '<td style="text-align:center;"><b>Total Smv</b></td>';
            output += '<td style="text-align:center;"><b>' + alltotal.toFixed(3) + '</b></td>';
            output += '</tr>';
            output += '</tbody>';
            output += ' </table>';

            fotter += ' <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> ';
            fotter += ' <button type = "button" class="btn btn-primary" data-dismiss="modal" onclick=' + 'setOperation(' + data[0].CategoryId + ',' + data[0].SubCategoryId + ',' + data[0].SubSubCategoryId + ',' + data[0].ItemId + ',' + data[0].SubItemId + ',' + data[0].BuyerId + ',' + data[0].BuyerCatId + ',' + '"' + data[0].StyleNumber + '"' + ',' + '"' + data[0].DesignNumber + '"' + ',' + '"' + data[0].Season + '"' + ')' + ' > Set Operation</button > ';


            $('#showDetailsTable').empty();
            $('#showDetailsTable').append(output);
            $('#modalfooter').empty();
            $('#modalfooter').append(fotter);
        }
    }

    var responseData = CallServerMethod('Post', route, input, 'false', operationSearchResponse);

}



function setOperation(cat, subcat, subsubcat, item, subItem, buyerId, buyerCategoryId, stylenumber, designNumber, season) {

    localStorage.setItem('CategoryId', cat);

    localStorage.setItem('SubCategoryId', subcat);

    localStorage.setItem('SubSubCategoryId', subsubcat);

    localStorage.setItem('ItemId', item);

    localStorage.setItem('SubItemId', subItem);
    localStorage.setItem('BuyerId', buyerId);
    localStorage.setItem('BuyerCategoryId', buyerCategoryId);

    localStorage.setItem('StyleNumber', stylenumber);

    localStorage.setItem('DesignNumber', designNumber);
    localStorage.setItem('Season', season);

    var flag = '1';
    localStorage.setItem('Flag', flag);
    //window.location.href = sitePath + "component.html";
    window.location.href = sitePath + "operationbulletin.html";
}
