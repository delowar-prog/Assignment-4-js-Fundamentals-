//This is a function named mindGame() where input a positive number as parameter. Then the input number multiplay with 3. Thats result will sum with 10. And after sum the result will divided by 2 and at last minus (-) 5. return the final result.
/*
function mindGame(num){
    const checkInput=typeof(num);
    if(checkInput!=='number'){
        return 'please input a number';
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
        return 'Input must be string';
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
        return 'Input should be a valid number';
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
        return 'Input should be an array'; 
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