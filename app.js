//for(var i=1; i<=10; i++){
//	console.log("Hello"+i)
//}
//for(var i=10; i>=1; i--){
//	console.log(i);
//}
for(var i=2; i<=20; i++){
	if(i%2==0){
		console.log("Tegsh " + i);
	}
}

for(var i=1; i<=30; i++){
	if(i%3==0 && i%5==0){
		console.log(i);
	}
}
for(var i =1; i<=10; i++){
	console.log("5X"+i+"="+5*i)
}
var niilber=0
var urjvr
for(var i=1;i<=10; i++){
	niilber = niilber +i;
}
console.log(niilber);
var random = Math.floor(Math.random() * 10) + 1;
console.log(random); 
for (var i = 1; i <= 3; i++) {
    var myNumber = +prompt("Insert a number between 1 and 10");
    if (random == myNumber){
        alert("You Win with "+ i +" tries");
        break;
    }else if(myNumber>random){
        alert("That's more than it should be");
    }else if(myNumber<random){
        alert("That's less than it should be");
    }
	if(i==3){
		alert("You Lose")
	}
}
