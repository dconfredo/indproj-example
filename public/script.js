/*    Project:  Ch. 2 Individual Project
      Author: Dominic Confredo
      Date:
      Purpose:
*/ 


function calcTotal(){
  var itemTotal = 0;
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var item5 = document.getElementById("item5");
  var item6 = document.getElementById("item6");
  (item1.checked) ? (itemTotal += 50) : (itemTotal += 0);
  (item2.checked) ? (itemTotal += 60) : (itemTotal += 0);
  (item3.checked) ? (itemTotal += 70) : (itemTotal += 0);
  (item4.checked) ? (itemTotal += 80) : (itemTotal += 0);
  (item5.checked) ? (itemTotal += 20) : (itemTotal += 0);
  (item6.checked) ? (itemTotal += 35) : (itemTotal += 0);
  var salesTaxRate = 0.06;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  alert("Your order total is $" + orderTotal);
  /* listed each item with their individual prices. Then created a sales tax rate and created the equation for it to work together and do the right math.*/
}

var submitButton = document.getElementById("sButton");
submitButton.addEventListener("click", calcTotal, false);