$(document).ready(function () {
    getvalue();

});

function getvalue() {
    var buyerCategoryId = localStorage.getItem('BuyerCategoryId');
    var buyerId = localStorage.getItem('BuyerId');
    getComponent(buyerCategoryId, buyerId);

    //localStorage.removeItem('BuyerCategoryId');
}

function getComponent(buyerCategoryId, buyerId) {

    var url = localApiPath + "/api/site/buyer/GetComponentDataNew/" + buyerCategoryId + '/' + buyerId;
    var input = "";

    var getComponentResponse = function (data) {

        if (data.length>0) {

            var output = '';


            for (var i = 0; i < data.length; i++) {
                output += '<div class="col-lg-4">';
                //output += '<div class="col-lg-6 imgdiv">';
                //output += '<img class="componentsmallimg" style="width: 254px;height: 210px;"  src=' + '"' + imagePath + '/components/' + buyerId + buyerCategoryId + data[i].Component + '.jpg' + '" alt="Component Image"' + '/>';
                //output += '<img class="componentlargeimg" style="width: 870px;height: 870px;"  src=' + '"' + imagePath + '/components/' + buyerId + buyerCategoryId + data[i].Component + '.jpg' + '" alt="Component Image"' + '/>';
                //output += '</div>';
                output += '<div class="col-lg-12">';               
                output += '<ul class="col-lg-12 componentdiv btn btn-primary">';
                if (data[i].ComponentStageViewModel.length > 0) {                    
                    output += '<li class="componentspan" value=' + data[i].ComponentId + '><b>' + data[i].Component+'</b>';
                    output += '<ul class="componentstage">';
                    for (var j = 0; j < data[i].ComponentStageViewModel.length; j++) {
                        if (data[i].ComponentStageViewModel[j].ComponentCatViewModel.length > 0) {
                            output += '<li value=' + data[i].ComponentStageViewModel[j].ComponentStageId + '>' + data[i].ComponentStageViewModel[j].ComponentStage;
                            //if (data[i].ComponentStageViewModel[j].ComponentCatViewModel[k].ComponentCatViewModel.length > 0) {
                            output += '<ul class="componentcatstage">';
                            for (var k = 0; k < data[i].ComponentStageViewModel[j].ComponentCatViewModel.length; k++) {
                                output += '<li value=' + data[i].ComponentStageViewModel[j].ComponentCatViewModel[k].ComponentStageCatId + ' onclick="getCmponentValue(' + data[i].ComponentId + ',' + data[i].ComponentStageViewModel[j].ComponentStageId + ',' + data[i].ComponentStageViewModel[j].ComponentCatViewModel[k].ComponentStageCatId + ')">' + data[i].ComponentStageViewModel[j].ComponentCatViewModel[k].ComponentStageCat;
                                output += '</li>';
                            }

                            output += '</ul>';
                            //}

                            output += '</li>';
                        }
                        else {
                            output += '<li value=' + data[i].ComponentStageViewModel[j].ComponentStageId + ' onclick="getCmponentValue(' + data[i].ComponentId + ',' + data[i].ComponentStageViewModel[j].ComponentStageId + ',' + 0 + ')">' + data[i].ComponentStageViewModel[j].ComponentStage;
                            output += '</li>';
                        }

                    }
                    output += '</ul>';
                }
                else {
                    output += '<li class="componentspan" value=' + data[i].ComponentId + ' onclick="getCmponentValue(' + data[i].ComponentId + ',' + 0 + ',' + 0 + ')">' + data[i].Component;
                }
                output += '</li>';
                output += '</ul>';
                output += '</div>';
                output += '</div>';
            }

            $('#componentdetails').empty();
            $('#componentdetails').append(output);
        }
        else {
            window.location.href = sitePath + "buyers.html";
        }
    };

    CallServerMethod('get', url, input, 'false', getComponentResponse);

}



function getCmponentValue(componentId, componentCatId, componentSubCatId) {
    localStorage.removeItem('ComponentId');
    localStorage.removeItem('ComponentCatId');
    localStorage.removeItem('ComponentSubCatId');


    localStorage.setItem('ComponentId', componentId);
    localStorage.setItem('ComponentCatId', componentCatId);
    localStorage.setItem('ComponentSubCatId', componentSubCatId);

    var BuyerCategoryId = localStorage.getItem('BuyerCategoryId');
    var BuyerId = localStorage.getItem('BuyerId');
    var ComponentId = localStorage.getItem('ComponentId');
    var ComponentCatId = localStorage.getItem('ComponentCatId');
    var ComponentSubCatId = localStorage.getItem('ComponentSubCatId');
    //if (ComponentSubCatId === null) {
    //    ComponentSubCatId = 0;
    //}

    var model = {
        BuyerId: BuyerId,
        BuyerCategoryId: BuyerCategoryId,
        ComponentId: ComponentId,
        ComponentCatId: ComponentCatId,
        ComponentSubCatId: ComponentSubCatId
    };

    var input = JSON.stringify(model);

    window.location.href = sitePath + "operation.html";
    //console.log(input);
}