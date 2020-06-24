$(document).ready(function () {  
    LoadMenubar();
});

function LoadMenubar() {
    var route = localApiPath + "api/site/navbar/Menubar";
    var input = "";

    var responseGetCategory = function (data) {
        var response = data;
        var output = '<ul id="navbar">';
        //CategoryId
        output += '<li onclick="GoHome()">Home</li>';
        output += '<li>More page';
        output += '<ul id="subnav">';
        output += '<li onclick="MorePage(1)">Buyers</li>';
        output += '<li onclick="MorePage(2)">Components</li>';

        output += '</ul>';
        output += '</li>';
        for (var i = 0; i < response.length; i++) {
            output += '<li>' + response[i].CategoryName;
            if (response[i].SubCategories !== null) {
                output += '<ul id="subnav">';
                for (var j = 0; j < response[i].SubCategories.length; j++) {
                   
                    output += '<li>' + response[i].SubCategories[j].SubCategory;
                    if (response[i].SubCategories[j].SubSubCategories !== null) {
                        output += '<ul id="subsubnav">';
                        for (var k = 0; k < response[i].SubCategories[j].SubSubCategories.length; k++) {
                                output += '<li>' + response[i].SubCategories[j].SubSubCategories[k].SubSubCategory;
                                if (response[i].SubCategories[j].SubSubCategories[k].Items !== null) {
                                    output += '<ul id="itemnav">';
                                    for (var l = 0; l < response[i].SubCategories[j].SubSubCategories[k].Items.length; l++) {                                        
                                            output += '<li>' + response[i].SubCategories[j].SubSubCategories[k].Items[l].ItemName;
                                            if (response[i].SubCategories[j].SubSubCategories[k].Items[l].SubItems !== null) {
                                                output += '<ul id="subitemnav">';
                                                for (var m = 0; m < response[i].SubCategories[j].SubSubCategories[k].Items[l].SubItems.length; m++) {                             
                                                    output += '<li onclick="GetSubItemValue(' + response[i].CategoryId +',' + response[i].SubCategories[j].SubCategoryId + ',' + response[i].SubCategories[j].SubSubCategories[k].SubSubCategoryId + ',' + response[i].SubCategories[j].SubSubCategories[k].Items[l].ItemId +',' + response[i].SubCategories[j].SubSubCategories[k].Items[l].SubItems[m].SubItemId +')">' + response[i].SubCategories[j].SubSubCategories[k].Items[l].SubItems[m].SubItemName;
                                                        output += '</li>';
                                                }
                                                output += '</ul>';
                                            }
                                            output += '</li>';                                       
                                    }
                                    output += '</ul>';
                                }
                                output += '</li>';
                            
                        }
                        output += '</ul>';
                    }
                    output += '</li>';
                
                }
                
                output += '</ul>';
            }
            output += '</li>';
        }
        output += '<li><a href="buyeroperationhistory.html"><i class="fa fa-search" style="color:white;" aria-hidden="true"></i></a></li>';
        output += '</ul>';
        $('#menubar').empty();
        $('#menubar').append(output);

        //console.log(output)
    };
    var responseData = CallServerMethod('Get', route, input, 'false', responseGetCategory);
}


function GetSubItemValue(cat, subcat, subsubcat,item,subItem) {
    localStorage.clear();

    localStorage.removeItem('CategoryId');
    localStorage.removeItem('SubCategoryId');
    localStorage.removeItem('SubSubCategoryId');
    localStorage.removeItem('ItemId');
    localStorage.removeItem('SubItemId');

    localStorage.setItem('CategoryId', cat);
    
    localStorage.setItem('SubCategoryId', subcat);
    
    localStorage.setItem('SubSubCategoryId', subsubcat);
    
    localStorage.setItem('ItemId', item);
    
    localStorage.setItem('SubItemId', subItem);
   

    window.location.href = sitePath + "buyers.html";
}

function GoHome() {
    window.location.href = sitePath + "home.html";
}

function MorePage(value) {
    if (value == 1) {
        window.location.href = sitePath + "buyers.html";
    }
    else if (value == 2) {
        window.location.href = sitePath + "component.html";
    }
}