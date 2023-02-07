//This is a function named mindGame() where input a positive number as parameter. Then the input number multiplay with 3. Thats result will sum with 10. And after sum the result will divided by 2 and at last minus (-) 5. return the final result.
/*
function mindGame(num){
    const checkInput=typeof(num);
    if(checkInput!=='number'){
        const err='please input a number';
        return err;
    }else{
        let multiplay  =  num * 3;
        let sum        =  multiplay + 10;
        let div        =  sum / 2;
        let result     =  div - 5;
        return result; 
    }
}
*/

//evenOdd() function return an input string is Even or Odd. At first this function check the data type and find length of the input string. If length is %2=0 the function return 'Even' otherwise return 'Odd'.
/*
function evenOdd(data){
    const checkData=typeof(data);
    if(checkData!=='string'){
        const err='Input must be string';
        return err;
    }else{
        const strCount=data.length;
        if(strCount%2===0){
            return 'Even';
        }else{
            return 'Odd';
        }
    }
}
*/

//isLGSeven() is a function which receive a number as parameter. Then minus (-) 7  from the input number. If result is less than 7 it return the result value otherwise return double of input number.
/*
function isLGSeven(num){
    const checkInput=typeof(num);
    if(checkInput!=='number'){
        const err='Input should be a valid number';
        return err;
    }else{
        const differenceValue=num-7;
        if(differenceValue<7){
            return differenceValue;
        }else{
            return num * 2;
        }
    }
}
*/

//findingBadData() function receive an array as input parameter and some positive or negitive number will be store in the array. The function will return how many negitive value have store in the array. The negitive value means 'bad data' in this function.  
/*
function findingBadData(numbers){
    const checkInput=Array.isArray(numbers);
    if(checkInput===false){
        const err='Input should be an array';
        return err;
    }else{
        let badData=[];
        for(i=0;i<numbers.length;i++){
            const element=numbers[i];
            if(element<0){
             badData.unshift(element);   
            }
        }
        return badData.length;
    }
    
}
*/

//function gemsToDiamond() convert your gems into diamond which received three numbers as parameter.  The first, second & third parameter will multiply with respectively 21, 32 & 43. After summesion of previous multiply results compair with double of 1000 that means 2000. If the Total result is greater than 2000 then substruct 2000 from the total result. Return the substruction result which is you actual number of diamond. If the total result is less than double of 1000, return the total result.

function gemsToDiamond(num1, num2, num3){
    const checkInput1=typeof(num1);
    const checkInput2=typeof(num2);
    const checkInput3=typeof(num3);

    if(checkInput1!=='number' || checkInput2!=='number' || checkInput3!=='number'){ 
        const err='All input must be number';
        return err;
    }else{
      const firstFriendGemsPower =  num1*21;
      const secondFriendGemsPower =  num2*32;
      const thirdFriendGemsPower =  num3*43;
      const totalGemPower=firstFriendGemsPower+secondFriendGemsPower+thirdFriendGemsPower;
      if(totalGemPower>1000*2){
        const ourDiamond=totalGemPower-2000;
        return ourDiamond;
      }else{
        return totalGemPower;
      }
    }
}

