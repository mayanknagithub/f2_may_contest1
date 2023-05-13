/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map(function(student){
        if(student.marks>50){
            console.log(student.name);
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach(function(student){
        if(student.marks>50){
            console.log(student.name);
        }
    });
  }
  
  function addData() {
    arr.push({id:4,name:"susan",age:"20",marks:45});
    console.log(arr);
  }

  function removeFailedStudent() {
    for(let i = 0 ; i < arr.length ; i++){
      if(arr[i].marks < 50){
        delete arr[i];
      }
      console.log(arr);
    }
  }
  
  let arr1 = [
    { id: 4, name: "harry", age: "22", marks: 90 },
    { id: 5, name: "shelly", age: "20", marks: 100 },
    { id: 6, name: "ronaldo", age: "21", marks: 55 },
  ];

  function concatenateArray() {
    let arr3 = arr.concat(arr1);
    console.log(arr3);
  }