// let myName = 'Damodhar';

let myName = [ 'Damodhar' , 'Maske', 5120 , 'raj' , 1122 , 'sd']
console.log(myName.length);
console.log(myName[0]);
console.log(myName[5]);

let studentList = {
    Name: 'Rahul',
    Class: 12,
    Division: 'A',
    PassStatus: 'Pass'
}
console.log(studentList);
console.log(studentList.Name);

let employees = [
    {
        Name: 'Sandip' ,
        Age: 28,
        Dep: 'QA',
        Sex: 'Male' 
    },
    {
        Name: 'Vijay' ,
        Age: 25,
        Dep: 'QA' ,
        Sex: 'Male'  
    },
    {
        Name: 'Vidhya' ,
        Age: 29,
        Dep: 'Hr' ,
        Sex: 'Female' 
    },
    {
        Name: 'Samarth',
        Age: 31,
        Dep: 'PD' ,
        Sex: 'Male' 
    }
]
console.log(employees[0].Name);
console.log(employees[2].Name);
console.log(employees.length);

let List = [
    [ 'adddd', 'bbbbb'],
    ['ccccc', 'ddddd',[ 'cccc1','cccc2']],
    [ 'fffff','ggggg']

];
console.log(List[2][0]);
console.log(List[1][2][1]);

let obj = {
    'posts': [
        {
            "id" : 1,
            "title" : 'json',
            "auther" : 'Sam'

        }
    ],
    
        'comments':[
            {
            "id": 1,
            "body": 'some content',
            "postId": 2
        }
    ],
    'profile':{
        
          "name": "typicode"  
        },
    
    'status': "success"

    
}
console.log(obj.posts[0].auther);
console.log(obj.comments[0].body);
console.log(obj.status);
