$(document).ready(function(){

	/*======= Javascript Array Object =======*/

	//declaring an empty array using the Array constructor.
	// var myArr = new Array();
	
	//declaring an empty array using literal notation.
	var myArr = [];
	
	//Arrays are filled with elements: i.e. myArr3 = [element, anotherElement];
	//Elements can be strings, numbers, or boolean.
	myArr = ['Hello', , 54.3, true];
	
	//If you leave a blank spot in an array it creates a blank  space (undefined) placeholder.
	
	//Array elements can be fetched by their index number (starts from 0).
	
	console.log(myArr[0]); //prints Hello
	console.log(myArr[1]); //prints undefined
	console.log(myArr[2]); //prints 54.3
	console.log(myArr[3]); //prints true
	console.log('------');
	
	//If you leave a blank spot in an array it creates a blank shelf space (null) placeholder.
	
	//We can insert new values into any space in the array using the positions index.
	myArr[1] = 'Stuff';
	
	console.log(myArr[0]); //prints Hello
	console.log(myArr[1]); //prints Stuff
	console.log(myArr[2]); //prints 54.3
	console.log(myArr[3]); //prints true
	console.log('------');
	
	//Associative arrays allow us to define the index as a string
	
	myArr['Greeting'] = myArr[0];
	
	console.log(myArr['Greeting']);
	console.log('------');
	
	//We can overwrite all the elements of an array simply by giving the array new values. Or passing one array into another.
	
	var fruits = ['Apples', 'Oranges', 'Pears', 'Bananas'];
	
	myArr = fruits;
	
	console.log(myArr[0]); //prints Apples
	console.log(myArr[1]); //prints Oranges
	console.log(myArr[2]); //prints Pears
	console.log(myArr[3]); //prints Bananas
	console.log('------');
	
	//What if I would like to know how long my array is (how many elements)?
	
	console.log(myArr.length); //prints 4
	console.log('------');
	
	// to gets its the last elemnts index position I can subtract one (remember indexes start with zero instead of one).
	
	var pos = myArr.length - 1;
	
	console.log(myArr[pos]); //prints Bananas
	console.log('------');
	
	//We can insert on to the end of an Array simply by using the push method.
	
	myArr.push('Strawberries'); // you can push multiple items onto the end by coma separating if you wish.
	
	console.log(myArr[0]); //prints Apples
	console.log(myArr[1]); //prints Oranges
	console.log(myArr[2]); //prints Pears
	console.log(myArr[3]); //prints Bananas
	console.log(myArr[4]); //prints Strawberries
	console.log('------');
	
	//you can pull the last element off the end using the pop method.	
	myArr.pop();
	
	console.log(myArr[0]); //prints Apples
	console.log(myArr[1]); //prints Oranges
	console.log(myArr[2]); //prints Pears
	console.log(myArr[3]); //prints Bananas
	console.log('------');
	console.log(myArr.length); //prints 4
	console.log('------');
	
	//We can use splice method to insert content at a given position or to remove content from a given position. splice(index, how many elements to remove, optional content to add);
	
	myArr.splice(2, 0, 'Tiger'); //This goes to index position 2 and after it removes 0 (none) and adds new value of 'Tiger'.
	
	console.log(myArr[0]); //prints Apples
	console.log(myArr[1]); //prints Oranges
	console.log(myArr[2]); //prints Tiger
	console.log(myArr[3]); //prints Pears
	console.log(myArr[4]); //prints Bananas
	console.log('------');
	
    //lets say we needed to remove the second to last item, but we do not know how long the array is... We can use negative numbers to go to end of array and index from end to beginning.
    

    myArr.splice(-2, 1, "Lion"); //replace Pears with Lion
	
	console.log(myArr[0]); //prints Apples
	console.log(myArr[1]); //prints Oranges
	console.log(myArr[2]); //prints Tiger
	console.log(myArr[3]); //prints Lion
	console.log(myArr[4]); //prints Bananas
	console.log('------');
	
	//Let's remove Lion from the 3rd index position using splice
	
	myArr.splice(3,1);
	
	console.log(myArr[0]); //prints Apples
	console.log(myArr[1]); //prints Oranges
	console.log(myArr[2]); //prints Tiger
	console.log(myArr[3]); //prints Bananas
	console.log('------');
	
	//For many more Array methods see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array
	
	/* LOOPS */
	
	//A loop is a set of commands that executes repeatedly until a specified condition is met. JavaScript supports the for, do while, and while loop statements.
	
	//A for loop repeats until a specified condition evaluates to false.
	
	//SYNTAX: for ([initialExpression]; [condition]; [incrementExpression]) {statement}
	
	var vegetables = ['Broccoli','Peas','Carrots'];
	
	for(var i = 0; i < vegetables.length; i++){
		
		$('#print').append('<li>'+vegetables[i]+'</li>');
		
	}
	
	//A while statement executes its statements as long as a specified condition evaluates to true.
	
	//SYNTAX: do {statement} while (condition);
	
	var cars = ['Corvette','Mustang','Porsche'];
	var i = 0;
	
	do {
	   $('#print').append('<li>'+cars[i]+'</li>');
	   i += 1;
	} 
	while (i < cars.length);
	
	//SYNTAX: while (condition){statement}
	
	var fish = ['Snapper', 'Tuna', 'Salmon'];
	var i = 0;
	
	while (i < fish.length){
		$('#print').append('<li>'+fish[i]+'</li>');
		i += 1;
	}
	
	//more on loop statements at: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Statements
	
	//jQuery each method
	
	//SYNTAX: .each( function(index, Element) ) { statement }
	
	var numbers = [5, 10, 15, 20, 25, 30 , 35, 40, 45, 50];
	
	$.each(numbers, function(i, value){ //each iterates over all elements in the array one by one.
			
		$('#print').append('<li>'+i+'.) '+value+'</li>');			
	});
		
	//jQuery grep method for filtering an array
	
	//SYNTAX: jQuery.grep( array, function(elementOfArray, indexInArray) [, invert] )
	
	var bigNumbers = $.grep(numbers, function(value){
	
		return value > 25;
	});
	
	$.each(bigNumbers, function(i, value){ //each iterates over all elements in the array one by one.
			
		$('#print').append('<li>Big Numbers: '+value+'</li>');		
	});
	
});