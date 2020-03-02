function MaxNumberCalc()
{
     const First=parseInt(document.querySelector('#FirstNum').value)
     const Second=parseInt(document.querySelector('#SecondNum').value)

     const MaxNum = Math.max(First,Second);
         
    // const rTip=rIntialTotal*(rTipPerRate/100)
    // const rTaxRate=5.50
    // const rTax=rIntialTotal*(rTaxRate/100)
    // const rGrandTotal=rIntialTotal+rTip+rTax;

    // document.getElementById("Tip").innerHTML = rTip.toFixed(2);
    // document.getElementById("Tax").innerHTML = rTax.toFixed(2);
     //document.getElementById("GrandTotal").innerHTML = rGrandTotal.toFixed(2);
     document.getElementById("MaxNumber").innerHTML = MaxNum;
     
}