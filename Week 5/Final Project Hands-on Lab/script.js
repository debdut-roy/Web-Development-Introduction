function updateRate() 
{
    //reads the value of the range slider and 
    //dynamically displays it adjacent to the slider
    var rateval = document.getElementById("interestRate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
    var principal = document.getElementById("principal").value;
    // Alert if the user enters zero or negative values
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById('principal').focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal+"</span>,\<br\>at an interest rate of <span class='highlight'>"+rate+"</span>%\.\<br\>You will receive an amount of <span class='highlight'>"+interest+"</span>,\<br\>in the year <span class='highlight'>"+year+"</span>\<br\>"
}
