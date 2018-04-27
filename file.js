$(document).ready(function(){
    $("#formInfo").submit(function(){
        var new_row = "<tr>";
        var first2 = ($("#first input").val());
        var last2 = ($("#last input").val());
        var email2 = ($("#email input").val());
        var phone2 = ($("#phone input").val());

        new_row += "<td>"+first2+"</td>";
        new_row += "<td>"+last2+"</td>";
        new_row += "<td>"+email2+"</td>";
        new_row += "<td>"+phone2+"</td>";
        new_row += "</tr>";

        $("#tableAddition").append(new_row);

        $("#formInfo").find("input:text").val(""); 

        return false;
    })

})