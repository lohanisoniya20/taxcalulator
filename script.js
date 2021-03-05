 //// Reset Function
function resetFunction() {
document.getElementById("form").reset();
document.getElementById("Annualsalary").innerHTML = 0.00;
document.getElementById("Annual_tax").innerHTML = 0.00;
document.getElementById("Monthly_tax").innerHTML = 0.00;
document.getElementById("Tax_in_hand").innerHTML = 0.00;
}
  ////tax cal function
  function taxcalFunction() {
   let monthlyIncome = document.getElementById("monthly_income").value;
   // alert("test"+ monthlyIncome)
   document.getElementById("Annualsalary").innerHTML = monthlyIncome * 12;
   let maritalstatus = document.getElementById("Marital_status").value;
   let annualIncome = monthlyIncome * 12;
   //alert(annualIncome)
   let annualTax = 0;
   //alert (maritalstatus)
    if (maritalstatus==="single") {
     // alert("single one")
      if(annualIncome <= 400000){
      annualTax = (0.01 * annualIncome);
      } 
      else if (annualIncome >400000 && annualIncome <=500000) { 
      annualTax = 400000 * 0.01 + (annualIncome - 400000)* 0.1;
      }
      else if (annualIncome >500000 && annualIncome <=700000){
      annualTax =((annualIncome -500000)* 0.2 + 100000 * 0.1 + (0.01*400000));
      }
      else if (annualIncome >7000000 && annualIncome<=2000000) {
      annualTax = ((annualIncome -700000)* 0.3 + 200000 * 0.2 + 100000 * 0.1+ (0.01*400000));
      }
      else if (annualIncome>2000000) {
      annualTax = ((annualIncome -2000000)* 0.36 + 1300000 * 0.3 + 200000 * 0.2 + 100000 * 0.1+ (0.01*400000));

      }
    }

    else if (maritalstatus==="married") {
      if(annualIncome <= 450000){
      annualTax = (0.01 * annualIncome);
      } 
      else if (annualIncome >450000 && annualIncome <=550000) { 
      annualTax = 450000 * 0.01 + (annualIncome - 450000)* 0.1;
      }
      else if (annualIncome >550000 && annualIncome <=750000){
      annualTax =((annualIncome -550000)* 0.2 + 100000 * 0.1 + (0.01*450000));
      }
      else if (annualIncome >750000 && annualIncome <=2000000){
      annualTax =((annualIncome -750000)* 0.3 + 200000 * 0.2 + 100000 * 0.1+ (0.01*450000));
      }
      else if (annualIncome >2000000) {
      annualTax = ((annualIncome -2000000)* 0.36 + 1250000 * 0.3 + 200000 * 0.2 + 100000 * 0.1+ (0.01*450000));
    }
      }
      document.getElementById("Annual_tax").innerHTML = annualTax;
      document.getElementById("Monthly_tax").innerHTML = annualTax / 12;
      document.getElementById("Cash_in_hand").innerHTML = annualIncome - annualTax;
      //alert("married one")
    }



