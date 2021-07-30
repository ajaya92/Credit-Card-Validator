var creditCardNum = document.getElementById("creditCardNum").value;
var creditCardIssue = document.getElementById("resultBox");
//const checkButton = document.getElementById("checkButton");
const validateButton = document.querySelector("#checkButton");


/*Formula is used from The Luhn Alogrithm:

    Drop the last digit from the number. The last digit is what we want to check against
    Reverse the numbers
    Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
    Add all the numbers together
    The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)


*/
/*
const validateCreditCard = (num)=>{
    var arrayList = String(num).split("").map((num)=>{
        return Number(num);
    })
    
        if((arrayList[0]== 3 && arrayList[1]==4 && arrayList.length == 15) || (arrayList[0]== 3 && arrayList[1]==7 && arrayList.length == 15) ){

            var img = document.createElement('img');
            img.src = "/images/ac.webp"
            img.width = "400";
            img.height = "200";
            document.getElementById('resultDiv').appendChild(img);


           
        }
        else  if((arrayList[0]== 5 && arrayList[1]==4 && arrayList.length == 16) ){

            var img = document.createElement('img');
            img.src = "/images/DC.jpg"
            img.width = "400";
            img.height = "200";
            document.getElementById('resultDiv').appendChild(img);


           
        }
        else  if((arrayList[0]== 6 && arrayList[1]== 0 && arrayList[2]== 1 && arrayList[3]== 1) ||
         (arrayList[0]== 6 && arrayList[1]== 2 && arrayList[2]== 2 && (arrayList[3]>= 1 && arrayList[3]<=9))
         ||
         (arrayList[0]== 6 && arrayList[1]== 4 && arrayList[2]== 4 ) || (arrayList[0]== 6 && arrayList[1]== 4 && arrayList[2]== 5 ) || (arrayList[0]== 6 && arrayList[1]== 4 && arrayList[2]== 6 ) ||
         (arrayList[0]== 6 && arrayList[1]== 4 && arrayList[2]== 7 ) || (arrayList[0]== 6 && arrayList[1]== 4 && arrayList[2]== 8 ) || (arrayList[0]== 6 && arrayList[1]== 4 && arrayList[2]== 9 ) || 
         (arrayList[0]== 6 && arrayList[1]== 5 )
        && (arrayList.length>=16 && arrayList.length <=19)
        ){

            var img = document.createElement('img');
            img.src = "/images/discover.webp"
            img.width = "400";
            img.height = "200";
            document.getElementById('resultDiv').appendChild(img);


           
        }

        else  if((arrayList[0]== 5 && arrayList[1]>=1 && arrayList[1]<= 5)        
       ){

           var img = document.createElement('img');
           img.src = "/images/me.png"
           img.width = "400";
           img.height = "200";
           document.getElementById('resultDiv').appendChild(img);


          
       }
       else  if((arrayList[0]== 4 && arrayList.length >=13 && arrayList.length <=19)        
       ){

           var img = document.createElement('img');
           img.src = "/images/visa.webp"
           img.width = "400";
           img.height = "200";
           document.getElementById('resultDiv').appendChild(img);


          
       }
        
        else{
            creditCardIssue.innerHTML = " "
            

        }
    

}
*/
var validateCardNum = (num) =>{
    var arrayList = String(num).split("").map((num)=>{
        return Number(num);
    })
    arrayList.pop();
    arrayList.reverse();
    for(let i =0; i<arrayList.length; i++){
        if (arrayList[i]%2 !=0){
            arrayList[i] *= 2;
            if(arrayList[i] >9){

                arrayList[i] -= 9;
                
            }
        }

    }
   var sum = arrayList.reduce((a,b)=>a+b,0);
   if(sum > 0){
    var finalMod = sum%10;
    if(finalMod == 0 ){
        document.getElementById("resultBox").innerHTML = "Valid Card";
    }
    else{
     document.getElementById("resultBox").innerHTML = "Invalid Card";
 
        
    }

   }



}



//checkButton.addEventListener('click', validateCreditCard(creditCardNum));
validateButton = window.addEventListener('click', validateCardNum(creditCardNum));

