//SPREAD OPERATOR


//merge

let arr1=[1,2,3];

let arr2=[4,5,6];

let arr3=[...arr1,...arr2];

console.log(arr3);



//clone

let arr4=[1,2,3];

let arr5=[...arr4];

console.log(arr5);


//in Function


function sum(a,b,c){
	
	return a+b+c;

}	
	
	const number=[1,2,3];
	
	const result=sum(...number);
	
	console.log(result);
	
	
//spreading String

//convert string into Array


let string="hello";

let array=[...string];

console.log(array);



//Object



