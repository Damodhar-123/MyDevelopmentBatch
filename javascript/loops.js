// // for (statement; condition; increament) {
// //   //code block
//     //break if u want to 
// // }



 let list = ['red' , 'orange' , 'pink', 'white' , 'black' , 'yellow' , 'green' ];
 var list1 = [];
 for (let i = 0 ; i < list.length; i++ ){
    list1.push(list[i]);
 }
 console.log(list1);

 var list2 = [];
 for (let i = 0; i < 3; i++) {
    list2.push(list[i]);
    
 }
 console.log(list2);

 let List3 = [];

 for(let i = 0 ; i < list.length ; i++ ){ //7<=7 i++ = i =i+1
     List3.push(list[i]); 
 
     if(i==5){
   break; //jumps out from the loop
    }

    console.log('List3-->',List3); 
}

for(let j = 1 ; j<=10 ; j++){
        console.log('j-->',j);
         if(j == '5'){
             break;
         }
     }

     let list4 = ['red','white','black','blue','','orange'];
let newList= [];
for(let i = 0 ; i < list4.length ; i++ ){ //5<=5 i++ = i =i+1
   
    //  if(i==3){ 
    //    continue; //jumps in to the loop
    //     }
    if(list4[i] !='blue' ){
        newList.push(list4[i]); 
    }
    console.log('newList-->',newList); 
}