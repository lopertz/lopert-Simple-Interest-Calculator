function compute()
{
var principal = document.getElementById("amount").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

var interest = principal*years*rate/100;
		
const totalamt = parseInt(principal)+parseInt(interest);

var year = new Date().getFullYear()+parseInt(years);

function updateRate()
{
 var rateval = document.getElementById("rate").value;

document.getElementById("range").innerText=rateval;
}

document.getElementById("result").innerHTML="If you deposit "+principal+".00, at an interest rate of "+rate+"%, \<br\>you will receive an amount of "+totalamt+".00, in the year "+year+".\<br\>"
}
