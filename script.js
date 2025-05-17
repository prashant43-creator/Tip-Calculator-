function calculate(){
  
  let bill =parseFloat(document.getElementById("bill").value);
  let tip =parseFloat(document.getElementById("tip").value);
  let people =parseInt(document.getElementById("people").value);
  
  if (!bill || bill <= 0 || people <= 0) {
   document.getElementById("result").innerText = "please Input Any Value"
   return
  }
  let tipAmount = bill * tip ;
  let totalAmount = bill + tipAmount;
  let eachPay = totalAmount/people;
  
  let result = document.getElementById("result").innerText = 
  `Tip = ₹${tipAmount.toFixed(2) }
  \nTotal = ₹${totalAmount.toFixed(2) }
  \nप्रत्येक जण देणार  ₹${eachPay.toFixed(2) }`
  
}