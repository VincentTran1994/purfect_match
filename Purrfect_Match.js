alert("To do List:"+
	". new - Add a todo list\n"+
	". list - List All todo list\n"+
	". delete - Remove specific Todo\n"+
	". quit - Quit App\n");

var toDoList = ["a","b","c","d","e","f","g","h"];
var loopStoper = false;

do{
	var todo = prompt("What you would like to do?");
	if(todo === "new"){
		var add = prompt("Add new toDo List");
		toDoList.push(add);
		console.log("* \"" + toDoList[toDoList.indexOf(add)]+ "\" is added to the list");
	}	
	else if(todo === "list"){
		console.log("Here is the list of what to do...");
		console.log("*********************************");
		toDoList.forEach(
			function(list,index){
				console.log(index + " : " +list)
			}
			);
		console.log("*********************************");
	}
	else if(todo === "delete"){
		var index = prompt("Please enter your index?");
		console.log(toDoList[index] + " is removed from the list");
		var newToDoList = toDoList.splice(index,1);
	}
	else if(todo === "quit"){
		loopStoper = true;
		alert("Thank you for your bussiness!!");
	}
}while(loopStoper === false);