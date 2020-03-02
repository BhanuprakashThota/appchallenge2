function MaxNumberCalc()
{
     const First=parseInt(document.querySelector('#FirstNum').value)
     const Second=parseInt(document.querySelector('#SecondNum').value)

     const MaxNum = Math.max(First,Second);    
     document.getElementById("MaxNumber").innerHTML = MaxNum;
     
}