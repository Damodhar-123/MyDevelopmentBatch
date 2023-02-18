var text = ' Damodhar    Abhiman     Maske';
console.log(text);
console.log(text.length);
 var carNames  = ' wagonR Swift Taigun Kushaq Nexon Harrier';   //slice
 var res = carNames.slice(1, -20);
 console.log(res);
console.log(carNames.substring(1 , 15));

var text1 =  ' hello world';
let result = text1.substr(-11 , 10);
console.log(result);
console.log(carNames.replace(/Swift/,'audi'));
 var carNames2 = console.log(carNames.replace(/Kushaq/,'BMW'));
 console.log(carNames);

 var lastName = 'mASke' ;
 console.log(lastName.toUpperCase());
 let copyWord = console.log(lastName.toLowerCase());
  let firstName  = 'Damodhar';
  var last_Name = 'maske ';
  let fullName = firstName + " " + last_Name;
  console.log(fullName);
  let fullName2 = last_Name.concat(firstName);
  console.log(fullName2);
 let full_Info = "Damodhar Abhiman Maske i lives in Dehugaon in pune";
 console.log(full_Info.charAt(11));
 console.log(full_Info[10]);
 console.log(full_Info.indexOf('in'));
 console.log(full_Info.lastIndexOf('in'));
 console.log(full_Info.search('pune'));

 var myName = '   Damodhar   '
 console.log(myName);
  myName1 = myName.trim();
  console.log(myName1);

  var DOB = '20/04/1992' ;
  let DOB1 = DOB.split('/');
  console.log(DOB1);



