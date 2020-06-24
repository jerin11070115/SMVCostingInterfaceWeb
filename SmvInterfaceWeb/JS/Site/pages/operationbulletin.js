$(document).ready(function () {
    getfinalcomponentdata();
    pdfcomponentdata();

    flatpickr('#sampleDateText', {
        "minDate": false,
        "maxDate": new Date().fp_incr(0)
    });
});

function getfinalcomponentdata() {
    $('#finalcomponent').empty();
    var flag = localStorage.getItem('Flag');
    var BuyerInfo = [];
    var finaldata = [];
    var HeadingData = [];
    var output = '';
    var groupedData = [];
    var categoryid = '';
    var subcategoryid = '';
    var subsubcategoryid = '';
    var itemid = '';
    var subitemid = '';
    var buyerid = '';
    var buyercategoryid = '';
    var styleNumber = '';
    var designNumber = '';
    var sampleDate = '';
    var sampleStage = '';
    var season = '';
    var route = '';
    var input = '';
    if (flag == '0') {
         finaldata = JSON.parse(localStorage.getItem('AddComponents'));

         groupedData = _.groupBy(finaldata, function (d) { return d.Component; });
        
         HeadingData = Object.keys(groupedData);

         categoryid = localStorage.getItem('CategoryId');
         subcategoryid = localStorage.getItem('SubCategoryId');
         subsubcategoryid = localStorage.getItem('SubSubCategoryId');
         itemid = localStorage.getItem('ItemId');
         subitemid = localStorage.getItem('SubItemId');
         buyerid = localStorage.getItem('BuyerId');        
         buyercategoryid = localStorage.getItem('BuyerCategoryId');
         styleNumber = localStorage.getItem('StyleNumber');
         designNumber = localStorage.getItem('DesignNumber');
         sampleDate = localStorage.getItem('SampleDate');
         sampleStage = localStorage.getItem('SampleStage');
         season = localStorage.getItem('Season');

    }
    else {
        finaldata = JSON.parse(localStorage.getItem('AddComponents'));

        groupedData = _.groupBy(finaldata, function (d) { return d.Component; });

        HeadingData = Object.keys(groupedData);

        categoryid = localStorage.getItem('CategoryId');
        subcategoryid = localStorage.getItem('SubCategoryId');
        subsubcategoryid = localStorage.getItem('SubSubCategoryId');
        itemid = localStorage.getItem('ItemId');
        subitemid = localStorage.getItem('SubItemId');
        buyerid = localStorage.getItem('BuyerId');
        buyercategoryid = localStorage.getItem('BuyerCategoryId');
        styleNumber = localStorage.getItem('StyleNumber');
        designNumber = localStorage.getItem('DesignNumber');
        sampleDate = localStorage.getItem('SampleDate');
        sampleStage = localStorage.getItem('SampleStage');
        season = localStorage.getItem('Season');
    }
    

    if (styleNumber == null) {
        styleNumber = '';
    }
    if (designNumber == null) {
        designNumber = '';
    }
    if (sampleDate == null) {
        sampleDate = '';
    }
    if (sampleStage == null) {
        sampleStage = '';
    }
    //else {
    //    sampleStage = sampleStage.split('_').join(' ');
    //}
    if (season == null) {
        season = '';
    }
    

    var operationBuyerInfoBodyModel = {
        CategoryId: parseInt(categoryid),
        SubCategoryId: parseInt(subcategoryid),
        SubSubCategoryId: parseInt(subsubcategoryid),
        ItemId: parseInt(itemid),
        SubItemId: parseInt(subitemid),
        BuyerId: parseInt(buyerid),
        //SampleStageId: parseInt(samplestageid),
        BuyerCategoryId: parseInt(buyercategoryid)
    };

     route = localApiPath + "api/site/operation/GetOperationBuyerInfo";
     input = JSON.stringify(operationBuyerInfoBodyModel);

    var operationBuyerResponse = function (data) {
        BuyerInfo = data;
        //console.log(BuyerInfo);

        if (HeadingData.length > 0) {

            var alltotal = 0;
            output += '<table class="table table-striped table-bordered table-hover">';
            output += '<tr>';
            output += '<td style="font-weight:Bold; background-color:#536878;color:#B2D8D8" colspan="1"> Buyer Name';
            output += '</td>';
            output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;"colspan="2">' + BuyerInfo[0].BuyerName;
            output += '</td>';
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1"> Style number';
            output += '</td>';
            output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;text-align:left;" colspan="2">' + styleNumber;
            output += '</td>';
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1"> Design number';
            output += '</td>';
            output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + designNumber;
            output += '</td>';
            output += '</tr>';

            //output += '<tr>';
            //output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1"> Item';
            //output += '</td>';
            //output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + BuyerInfo[0].CategoryName;
            //output += '</td>';
            //output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1"> Wearer';
            //output += '</td>';
            //output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + BuyerInfo[0].SubCategory;
            //output += '</td>';
            //output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1"> Item Category';
            //output += '</td>';
            //output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + BuyerInfo[0].SubSubCategory;
            //output += '</td>';
            //output += '</tr>';

            output += '<tr>';
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8"  colspan="1"> Fabric';
            output += '</td>';
            output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + BuyerInfo[0].ItemName;
            output += '</td>';
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1">Product Category';
            output += '</td>';
            output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + BuyerInfo[0].SubItemName;
            output += '</td>';
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1">Sample Stage';
            output += '</td>';
            output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + sampleStage;
            output += '</td>';
            output += '</tr>';

            output += '<tr>';
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1">Buyer Category';
            output += '</td>';
            if (BuyerInfo[0].BuyerCategory == null) {
                output += '<td colspan="2">';
                output += '</td>';
            }
            else {
                output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + BuyerInfo[0].BuyerCategory;
                output += '</td>';
            }
            
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1">Season';
            output += '</td>';
            output += '<td style="font-size:12px;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + season;
            output += '</td>';
            output += '<td style="font-weight:Bold;background-color:#536878;color:#B2D8D8" colspan="1">Sample Date';
            output += '</td>';
            output += '<td style="font-size:12px;text-align:left;background-color:#A3C1AD;font-weight:Bold;" colspan="2">' + sampleDate;
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
                output += '<th style="text-align:center;background-color:#536878;color:#B2D8D8" colspan="5">' + HeadingData[i];
                output += '</th>';
                output += '</tr >';
                output += ' <tr>';
                output += ' <th style="text-align:center; font-size:13px;background-color:#333333; color:white;" colspan="1">Operation Name';
                output += ' </th>';
                output += ' <th style="text-align:center; font-size:13px;background-color:#333333; color:white;" colspan="1">Smv';
                output += ' </th>';
                output += ' <th style="text-align:center; font-size:13px;background-color:#333333; color:white;" colspan="1">Machine';
                output += ' </th>';
                output += '<th style="text-align:center;font-size:13px;background-color:#333333; color:white;" colspan="1">Comments';
                output += '</th>';
                output += ' <th style="text-align:center;background-color:#999999" colspan="1">Action';
                output += ' </th>';
                output += ' </tr>';
                output += ' </thead>';
                output += '<tbody>';
                for (var j = 0; j < finaldata.length; j++) {

                    if (HeadingData[i] == finaldata[j].Component) {
                        totalSmv += parseFloat(finaldata[j].SmvValue);

                        output += '<tr>';
                        output += '<td style="text-align:left;font-size:12px" colspan="1">' + finaldata[j].OperationName + '</td>';
                        output += '<td style="text-align:center;font-size:12px;background-color:#A3C1AD;font-weight:Bold" colspan="1">' + finaldata[j].SmvValue + '</td>';
                        output += '<td style="text-align:center;font-size:12px" colspan="1">' + finaldata[j].Machine + '</td>';
                        if (finaldata[i].Comments != null) {
                            output += '<td style="text-align:center;font-size:12px" colspan="1">' + finaldata[j].Comments + '</td>';
                        }
                        else {
                            output += '<td style="text-align:center;" colspan="1">' + '' + '</td>';
                        }
                        output += '<td style="text-align:center;" colspan="1"><i class="fa fa-trash fa-spin" style="font-size:25px;color: red;" Onclick="DeleteData(' + j + ')"></i>  <i class="fa fa-edit" style="font-size:25px;color: blue;" Onclick="EditData(' + j + ')" data-toggle="modal" data-target="#editOperationModal"></i>  <i class="fa fa-plus" style="font-size:25px;color: green;"  data-toggle="modal" data-target="#addOperationModal"></i>  <i class="fa fa-angle-up" style="font-size:25px;color: black;"  data-toggle="modal" data-target="#addOperationModal"></i><i class="fa fa-angle-down" style="font-size:25px;color: black;"  data-toggle="modal" data-target="#addOperationModal"></i></td>';
                        output += '</tr>';

                       
                    }
                }

                output += '<tr>';
                //output += '<td style="text-align:center;" colspan="3"><b>Sub Total Smv</b></td>';
                output += '<td style="text-align:center;" colspan="1"></td>';
                output += '<td style="text-align:center;" colspan="1"><b>' + totalSmv.toFixed(3) + '</b></td>';
                output += '<td style="text-align:center;" colspan="3"></td>';
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
            output += '<td style="text-align:center;"colspan="3"><b>Total Smv</b></td>';
            output += '<td style="text-align:center;"colspan="2"><b>' + alltotal.toFixed(3) + '</b></td>';
            output += '</tr>';
            output += '</tbody>';
            output += ' </table>';

            $('#finalcomponent').empty();
            $('#finalcomponent').append(output);
        }


        else {
            window.location.href = sitePath + "home.html";
        }

    };


    var responseData = CallServerMethod('Post', route, input, 'false', operationBuyerResponse);

}



function pdfcomponentdata() {
    var finaldata = JSON.parse(localStorage.getItem('AddComponents'));

    var groupedData = _.groupBy(finaldata, function (d) { return d.Component; });
    var output = '';
    var HeadingData = Object.keys(groupedData);

    var BuyerInfo = [];

    var categoryid = localStorage.getItem('CategoryId');
    var subcategoryid = localStorage.getItem('SubCategoryId');
    var subsubcategoryid = localStorage.getItem('SubSubCategoryId');
    var itemid = localStorage.getItem('ItemId');
    var subitemid = localStorage.getItem('SubItemId');
    var buyerid = localStorage.getItem('BuyerId');
    //var samplestageid = localStorage.getItem('SampleStageId');
    var buyercategoryid = localStorage.getItem('BuyerCategoryId');

    var styleNumber = localStorage.getItem('StyleNumber');
    var designNumber = localStorage.getItem('DesignNumber');

    if (styleNumber == null) {
        styleNumber = '';
    }
    if (designNumber == null) {
        designNumber = '';
    }


    var operationBuyerInfoBodyModel = {
        CategoryId: parseInt(categoryid),
        SubCategoryId: parseInt(subcategoryid),
        SubSubCategoryId: parseInt(subsubcategoryid),
        ItemId: parseInt(itemid),
        SubItemId: parseInt(subitemid),
        BuyerId: parseInt(buyerid),
        //SampleStageId: parseInt(samplestageid),
        BuyerCategoryId: parseInt(buyercategoryid)
    };

    var route = localApiPath + "api/site/operation/GetOperationBuyerInfo";
    var input = JSON.stringify(operationBuyerInfoBodyModel);

    var operationBuyerResponse = function (data) {
        BuyerInfo = data;
        //console.log(BuyerInfo);

        if (HeadingData.length > 0) {

            output += '<table class="table table-striped table-bordered table-hover">';
            output += '<tr>';
            output += '<td colspan="1"> Buyer Name';
            output += '</td>';
            output += '<td colspan="2">' + BuyerInfo[0].BuyerName;
            output += '</td>';
            output += '<td colspan="1"> Style number';
            output += '</td>';
            output += '<td colspan="2">' + styleNumber;
            output += '</td>';
            output += '<td colspan="1"> Design number';
            output += '</td>';
            output += '<td colspan="2">' + designNumber;
            output += '</td>';
            output += '</tr>';

            output += '<tr>';

            output += '</tr>';

            output += '<tr>';
            output += '<td colspan="1"> Category';
            output += '</td>';
            output += '<td colspan="2">' + BuyerInfo[0].CategoryName;
            output += '</td>';
            output += '<td colspan="1"> Sub Category';
            output += '</td>';
            output += '<td colspan="2">' + BuyerInfo[0].SubCategory;
            output += '</td>';
            output += '<td colspan="1"> Sub Sub Category';
            output += '</td>';
            output += '<td colspan="2">' + BuyerInfo[0].SubSubCategory;
            output += '</td>';
            output += '</tr>';

            output += '<tr>';
            output += '<td colspan="1"> item';
            output += '</td>';
            output += '<td colspan="2">' + BuyerInfo[0].ItemName;
            output += '</td>';
            output += '<td colspan="1">sub item';
            output += '</td>';
            output += '<td colspan="2">' + BuyerInfo[0].SubItemName;
            output += '</td>';
            output += '<td colspan="1">Sample Stage';
            output += '</td>';
            output += '<td colspan="2">' + BuyerInfo[0].SampleStage;
            output += '</td>';
            output += '</tr>';

            output += '<tr>';
            output += '<td colspan="3">buyer category';
            output += '</td>';
            if (BuyerInfo[0].BuyerCategory != null) {
                output += '<td colspan="6">' + BuyerInfo[0].BuyerCategory;
                output += '</td>';
            }
            else {
                output += '<td colspan="6">';
                output += '</td>';
            }
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
                output += ' <th style="text-align:center" colspan="1">Action';
                output += ' </th>';
                output += ' </tr>';
                output += ' </thead>';
                output += '<tbody>';
                for (var j = 0; j < finaldata.length; j++) {

                    if (HeadingData[i] == finaldata[j].Component) {
                        totalSmv += parseFloat(finaldata[j].SmvValue);

                        output += '<tr>';
                        output += '<td style="text-align:center;" colspan="1">' + finaldata[j].OperationName + '</td>';
                        output += '<td style="text-align:center;" colspan="1">' + finaldata[j].SmvValue + '</td>';
                        output += '<td style="text-align:center;" colspan="1">' + finaldata[j].Machine + '</td>';
                        if (finaldata[i].Comments != null) {
                            output += '<td style="text-align:center;" colspan="1">' + finaldata[j].Comments + '</td>';
                        }
                        else {
                            output += '<td style="text-align:center;" colspan="1">' + '' + '</td>';
                        }
                        //output += '<td style="text-align:center;" colspan="1"><i class="fa fa-close" style="font-size:25px;color: red;" Onclick="DeleteData(' + j + ')"></i>  <i class="fa fa-edit" style="font-size:25px;color: blue;" Onclick="EditData(' + j + ')" data-toggle="modal" data-target="#editOperationModal"></i>  <i class="fa fa-plus" style="font-size:25px;color: green;"  data-toggle="modal" data-target="#addOperationModal"></i></td>';
                        
                        output += '<td style="text-align:center;" colspan="1"><i class="fa fa-close" style="font-size:36px" Onclick="DeleteData(' + j + ')"></i>  <i class="fa fa-edit" style="font-size:36px" Onclick="EditData(' + j + ')" data-toggle="modal" data-target="#editOperationModal"></i>  <i class="fa fa-plus" style="font-size:36px"  data-toggle="modal" data-target="#addOperationModal"></i></td>';
                        output += '</tr>';

                    }
                }

                output += '<tr>';
                output += '<td style="text-align:center;" colspan="3"><b>Total Smv</b></td>';
                output += '<td style="text-align:center;" colspan="2"><b>' + totalSmv + '</b></td>';
                output += '</tr>';
                output += '</tbody>';
                output += ' </table>';
                output += '</div >';
            }

            $('#pdfcomponent').empty();
            $('#pdfcomponent').append(output);
        }
    };


    var responseData = CallServerMethod('Post', route, input, 'false', operationBuyerResponse);
}

function DeleteData(value) {
    var deleteValue = value;
    var finaldata = JSON.parse(localStorage.getItem('AddComponents'));
    for (var i = 0; i < finaldata.length; i++) {
        if (i == deleteValue) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {

                    finaldata.splice(deleteValue, 1);                  
                    var resultdata = JSON.stringify(finaldata);
                    localStorage.setItem('AddComponents', resultdata);
                    getfinalcomponentdata();
                    pdfcomponentdata();
                   
                }
            });
        }
    } 
}

var updateid = '';
function EditData(value) {
    var editvalue = value;

    var finaldata = JSON.parse(localStorage.getItem('AddComponents'));
    //var smvValue = 0;
    //var machine = '';
    updateid = editvalue;
    for (var i = 0; i < finaldata.length; i++) {
        if (editvalue == i) {            
            $('#smvText').val(finaldata[editvalue].SmvValue);           
            $('#machineText').val(finaldata[editvalue].Machine);
            $('#commentText').val(finaldata[editvalue].Comments);
        }
    }
    
}

function UpdateData() {

    var finaldata = JSON.parse(localStorage.getItem('AddComponents'));

    var smvValue = $('#smvText').val();
    var machine = $('#machineText').val();
    var comments = $('#commentText').val();




    //for (var i = 0; i < finaldata.length; i++) {
    //    if (updateid == i) {
            finaldata[updateid].SmvValue = smvValue;
            finaldata[updateid].Machine = machine;
            finaldata[updateid].Comments = comments;
            var resultdata = JSON.stringify(finaldata);
            localStorage.setItem('AddComponents', resultdata);
    //    }
    //}
    getfinalcomponentdata();
    pdfcomponentdata();

    //Swal('Your Modify data index : ' + updateid + ' </br> Smv value : ' + smvValue + ' </br> Machine is : ' + machine);

}

function addData() {
    //var editvalue = value;
    var finaldata = JSON.parse(localStorage.getItem('AddComponents'));
    //Swal('Add value ' + editvalue);
    var smvValue = $('#addSmvText').val();
    var operationName = $('#addOperationText').val();
    var machine = $('#addmachineText').val();
    var comments = $('#addcommentText').val();
    var operationId = localStorage.getItem('SearchOperationId');
    var componentId = localStorage.getItem('SearchComponentId');
    var component = localStorage.getItem('SearchComponent');


    var categoryId = localStorage.getItem('CategoryId');
    var subCategoryId = localStorage.getItem('SubCategoryId');
    var subSubCategoryId = localStorage.getItem('SubSubCategoryId');
    var itemId = localStorage.getItem('ItemId');
    var subItemId = localStorage.getItem('SubItemId');
    var buyerId = localStorage.getItem('BuyerId');
    var buyerCatId = localStorage.getItem('BuyerCategoryId');

    var designNumber = localStorage.getItem('DesignNumber');
    var sampleDate = localStorage.getItem('SampleDate');
    var sampleStage = localStorage.getItem('SampleStage');
    var season = localStorage.getItem('Season');
    var styleNumber = localStorage.getItem('StyleNumber');
    var groupId = localStorage.getItem('GroupId');

    if (designNumber == null) {
        designNumber = '';
    }
    if (sampleDate == null) {
        sampleDate = '';
    }
    if (sampleStage == null) {
        sampleStage = '';
    }
    if (season == null) {
        season = '';
    }
    if (styleNumber == null) {
        styleNumber = '';
    }
    if (groupId == null) {
        groupId = '';
    }
    if (operationId == null) {
        operationId = 0;
    }
    if (componentId == null) {
        componentId = 0;
    }
    if (component == null) {
        component ='Additional Operation';
    }



    var OperationModel = {
        ComponentId: parseInt(componentId),
        OperationId: parseInt(operationId),
        BuyerCatId: parseInt(buyerCatId),
        BuyerId: parseInt(buyerId),
        SubItemId: parseInt(subItemId),
        ItemId: parseInt(itemId),
        SubSubCategoryId: parseInt(subSubCategoryId),
        SubCategoryId: parseInt(subCategoryId),
        CategoryId: parseInt(categoryId),
        SmvValue: parseFloat(smvValue),
        GroupId: groupId,
        Season: season,
        SampleStage: sampleStage,
        SampleDate: sampleDate,
        DesignNumber: designNumber,
        StyleNumber: styleNumber,
        Component: component,
        Comments: comments,
        Machine: machine,
        OperationName: operationName

    };


    if (OperationModel != null) {
        
            finaldata.push(OperationModel)
        
        
    }
    var resultdata = JSON.stringify(finaldata);

    localStorage.setItem('AddComponents', resultdata);
    getfinalcomponentdata();
    pdfcomponentdata();

     $('#addSmvText').val('');
    $('#addOperationText').val('');
    $('#addmachineText').val('');
    $('#addcommentText').val('');
}

function HTMLtoPDF() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    //$('#pdfcomponent').css('display', 'block');
    source = $('#finalcomponent')[0];
    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    }
    margins = {
        top: 50,
        left: 60,
        width: 545
    };
    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , margins.left // x coord
        , margins.top // y coord
        , {
            'width': margins.width // max width of content on PDF
            , 'elementHandlers': specialElementHandlers
        },
        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save('html2pdf.pdf');
        }
        
    )
    //$('#pdfcomponent').css('display', 'none');
}



$(function () {
    $("#addOperationText").autocomplete({
        
        source: function (request, response) {
            var operationName = $('#addOperationText').val();
            var buyerCategoryId = localStorage.getItem('BuyerCategoryId');
            var buyerId = localStorage.getItem('BuyerId');
            $('.ui-autocomplete').css('z-index', '1100');
            var operationSearchBodyModel = {

                BuyerId: parseInt(buyerId),
                BuyerCategoryId: parseInt(buyerCategoryId),
                Keyword: operationName
            };
            
            var route = localApiPath + "api/site/operation/GetOperationSearchData";
            var input = JSON.stringify(operationSearchBodyModel);

            var operationSearchResponse = function (data) {


                response($.map(data, function (item) {
                    return {
                        value: item.OperationName,
                        id: item.OperationId,
                        smv: item.SmvValue,
                        comment: item.Comments,
                        machine: item.Machine,
                        componentid: item.ComponentId,
                        component: item.Component
                    };
                }));
            };
                

            var responseData = CallServerMethod('Post', route, input, 'false', operationSearchResponse);
        },
        select: function (event, ui) {
            var selectedOperationName = ui.item.value;
            //console.log(ui.item.smv)
            var selectedSmvValue = ui.item.smv;
            var selectedMachine = ui.item.machine;
            var selectedComments = ui.item.comment;
            localStorage.setItem('SearchOperationId', ui.item.id);
            localStorage.setItem('SearchComponentId', ui.item.componentid);
            localStorage.setItem('SearchComponent', ui.item.component);

            $('#addOperationText').val(selectedOperationName);
            $('#addSmvText').val(selectedSmvValue);
            $('#addmachineText').val(selectedMachine);
            $('#addcommentText').val(selectedComments);

            

            return false;
        },

        minLength: 3 
    });
});



function addStyle() {

    var categoryid = localStorage.getItem('CategoryId');
    var subcategoryid = localStorage.getItem('SubCategoryId');
    var subsubcategoryid = localStorage.getItem('SubSubCategoryId');
    var itemid = localStorage.getItem('ItemId');
    var subitemid = localStorage.getItem('SubItemId');
    var buyerid = localStorage.getItem('BuyerId');
    //var samplestageid = localStorage.getItem('SampleStageId');
    var buyercategoryid = localStorage.getItem('BuyerCategoryId');

    var stylenumber = $('#styleText').val();
    var designNumber = $('#designText').val();
    var sampledate = $('#sampleDateText').val();
    var samplestage = $('#SampleStageSelect').val();
    var season = $('#SeasonSelect').val();

    localStorage.setItem('StyleNumber', stylenumber);
    localStorage.setItem('DesignNumber', designNumber);
    localStorage.setItem('SampleDate', sampledate);
    localStorage.setItem('SampleStage', samplestage);
    localStorage.setItem('Season', season);
    

    var d = new Date();
    var currentDate = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString();

    var groupId = categoryid + subcategoryid + subsubcategoryid + itemid + subitemid + buyerid + buyercategoryid + '-' + stylenumber + '-' + designNumber + '-' + sampledate + '-' + samplestage + '-' + season + '-' + currentDate;
    groupId = groupId.replace(/\s+/g, '-'); 
    localStorage.setItem('GroupId', groupId);
    var DataModel = {
        CategoryId: categoryid,
        SubCategoryId: subcategoryid,
        SubSubCategoryId: subsubcategoryid,
        ItemId: itemid,
        SubItemId: subitemid,
        BuyerId: buyerid,
        BuyerCatId: buyercategoryid,
        StyleNumber: stylenumber,
        DesignNumber: designNumber,
        SampleDate: sampledate,
        SampleStage: samplestage,
        Season: season,
        GroupId: groupId
    };

    var finaldata = JSON.parse(localStorage.getItem('AddComponents'));

    for (var i = 0; i < finaldata.length; i++) {
        finaldata[i].CategoryId = parseInt(DataModel.CategoryId);
        finaldata[i].SubCategoryId = parseInt(DataModel.SubCategoryId);
        finaldata[i].SubSubCategoryId = parseInt(DataModel.SubSubCategoryId);

        finaldata[i].ItemId = parseInt(DataModel.ItemId);
        finaldata[i].SubItemId = parseInt(DataModel.SubItemId);
        finaldata[i].BuyerId = parseInt(DataModel.BuyerId);
        finaldata[i].BuyerCatId = parseInt(DataModel.BuyerCatId);
        finaldata[i].StyleNumber = DataModel.StyleNumber;
        finaldata[i].DesignNumber = DataModel.DesignNumber;
        finaldata[i].SampleDate = DataModel.SampleDate;
        finaldata[i].SampleStage = DataModel.SampleStage;
        finaldata[i].Season = DataModel.Season;
        finaldata[i].GroupId = DataModel.GroupId;
        if (finaldata[i].Comments == null) {
            finaldata[i].Comments = '';
        }
    }
    var resultdata = JSON.stringify(finaldata);
    localStorage.setItem('AddComponents', resultdata);

    localStorage.removeItem('StyleNumber');
    localStorage.removeItem('DesignNumber');
    localStorage.removeItem('SampleDate');
    localStorage.removeItem('SampleStage');
    localStorage.removeItem('Season');






    localStorage.setItem('StyleNumber', stylenumber);

    localStorage.setItem('DesignNumber', designNumber);
    localStorage.setItem('SampleDate', sampledate);
    localStorage.setItem('SampleStage', samplestage);
    localStorage.setItem('Season', season);

    getfinalcomponentdata();
    pdfcomponentdata();
}

//function getSampleStage() {
//   // var buyerId = parseInt($('#BuyerSelect').val());
//    var buyerId = parseInt(localStorage.getItem('BuyerId'));
//    var sampleStage = '';
//    var url = localApiPath + "api/Admin/Buyer/GetBuyerSampleStages/" + buyerId;
//    var input = "";
//    var getSampleStageResponse = function (data) {

//        var output = '';
//        output = '<option value="0">Please select a sample stage</option>';

//        for (var loop = 0; loop < data.length; loop++) {
//            sampleStage = '';
//            sampleStage = data[loop].SampleStage.split(' ').join('_');
//            output += '<option value=' + sampleStage + '>' + data[loop].SampleStage + '</option>';
//        }

//        $('#SampleStageSelect').empty();
//        $('#SampleStageSelect').append(output);
//    };

//    CallServerMethod('get', url, input, 'false', getSampleStageResponse);
//}


function InsertOperationBulletin() {

    var designNumber = localStorage.getItem('DesignNumber');
    var sampleDate = localStorage.getItem('SampleDate');
    var sampleStage = localStorage.getItem('SampleStage');
    var season = localStorage.getItem('Season');
    var styleNumber = localStorage.getItem('StyleNumber');
    var groupId = localStorage.getItem('GroupId');

    if (designNumber == null || sampleDate == null || sampleStage == null || season == null || styleNumber == null || groupId == null || designNumber == '' || sampleDate == '' || sampleStage == '' || season == '' || styleNumber == '' || groupId == '') {
        Swal("Please Set The Style number Information ");
    }

    else {
        var finaldata = localStorage.getItem('AddComponents');
        var result = JSON.parse(finaldata);
        console.log(result);
        var route = localApiPath + "api/site/operation/AddOperationBulletin";

        var input = finaldata;

        var returnComponentInsertResponse = function (data) {

            tableToExcel();


        };
        var responseData = CallServerMethod('Post', route, input, 'false', returnComponentInsertResponse); }


    

}





function tableToExcel() {
    var table = 'finalcomponent';
    var filename = 'myfile.xls';
    var name = 'name';
    let uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><title></title><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
        base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }, format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }

    if (!table.nodeType)
    {
        table = document.getElementById(table);
    
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };

        var link = document.createElement('a');
        link.download = filename;
        link.href = uri + base64(format(template, ctx));
        link.click();
    }
}