

$(document).ready(function () {
    getdata();
});
var ComponentData = '';
function getdata() {
    var BuyerCategoryId = localStorage.getItem('BuyerCategoryId');
    var BuyerId = localStorage.getItem('BuyerId');
    var ComponentId = localStorage.getItem('ComponentId');
    var ComponentCatId = localStorage.getItem('ComponentCatId');
    var ComponentSubCatId = localStorage.getItem('ComponentSubCatId');

    var model = {
        BuyerId: parseInt(BuyerId),
        BuyerCatId: parseInt(BuyerCategoryId),
        ComponentId: parseInt(ComponentId),
        ComponentCatId: parseInt(ComponentCatId),
        ComponentSubCatId: parseInt(ComponentSubCatId)
    };

    var route = localApiPath + "api/site/operation/GetOperationData";
    var input = JSON.stringify(model);
    var operationResponse = function (data) {
        var output = '';
        var btnOut = '';
        
        if (data.length > 0) {
            output = ' <table class="table table-striped table-hover" id="loadTable">';
            output += ' <thead>';
            output += ' <tr>';
            output += ' <th style="text-align:center">Operation Name';
            output += ' </th>';
            output += ' <th style="text-align:center">Smv';
            output += ' </th>';
            output += ' <th style="text-align:center">Machine';
            output += ' </th>';
            //output += ' <th style="text-align:center">GSD';
            //output += ' </th>';
            //output += ' <th style="text-align:center">Video';
            //output += ' </th>';
            output += ' </tr>';
            output += ' </thead>';
            output += '<tbody>';
            

            for (var i = 0; i < data.length; i++) {
                output += '<tr>';
                output += '<td style="text-align:center; font-size:12px; text-align:inherit;">' + data[i].OperationName + '</td>';
                output += '<td style="text-align:center;">' + data[i].SmvValue + '</td>';
                output += '<td style="text-align:center;">' + data[i].Machine + '</td>';
               // output += '<td style="text-align:center;">' + '<embed src="' + filePath + '/GSD/' + data[i].OperationId + '.pdf"/>' + '</td>';
                
                //output += '<td style="text-align:center;">' + '' + '</td>';
                output += '</tr>';
            }


           
            output += '</tbody>';
            output += ' </table>';
            
            btnOut = '<input id="AddComponentButton" type="button" value="Add Component" class="btn btn-info" onclick="addcomponent()"/>';
            btnOut += '<input id="obButton" type="button" value="OB" class="btn btn-primary" onclick="obcomponent()"/>';
            $('#operationtable').empty();
            $('#operationtable').append(output);
            $('#operationbtndiv').empty();
            $('#operationbtndiv').append(btnOut);

            ComponentData = data;           
        }
        else {
            window.location.href = sitePath + "component.html";
        }
    }
    var responseData = CallServerMethod('Post', route, input, 'false', operationResponse);
}


function addcomponent() {
    var data = [];
    
    if (JSON.parse(localStorage.getItem('AddComponents')) != null) {
        data = JSON.parse(localStorage.getItem('AddComponents'));
    }

    for (var i = 0; ComponentData.length > i; i++) {
        data.push(ComponentData[i]);
    }
    

    var resultdata = JSON.stringify(data);

    localStorage.setItem('AddComponents', resultdata);
    
    //console.log(resultdata);
    //localStorage.removeItem('AddComponents');
    window.location.href = sitePath + "component.html";
}

function obcomponent() {
    var data = [];

    if (JSON.parse(localStorage.getItem('AddComponents')) != null) {
        data = JSON.parse(localStorage.getItem('AddComponents'));
    }

    for (var i = 0; ComponentData.length > i; i++) {
        data.push(ComponentData[i]);
    }


    var resultdata = JSON.stringify(data);

    localStorage.setItem('AddComponents', resultdata);
    var flag = '0';
    localStorage.setItem('Flag', flag);
    //localStorage.removeItem('AddComponents');
    window.location.href = sitePath + "operationbulletin.html";
}