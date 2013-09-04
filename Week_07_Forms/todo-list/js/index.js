// Initial Values (is 0) of global varible (is var count)
var count = 0;

// Attachments
$('#add').click(addNewItem);

$('#todos').on('click', 'li', switchStatus);

function addNewItem(event) {
	
	// Prevent page reload
	event.preventDefault();

	// Add the new to-do
	
		// Get the text the user entered
		var newItem = $('#new').val();
		
		// Add an <li> with that text to the <ul>
		$('#todos').append("<li>" + newItem + "</li>");
	
	// Update the count

		// Get the current count
		console.log(count);

		// Add 1 to the current count
		count = count + 1;
		console.log(count);

		// Print the new count
		$('#count').html(count);

}

function switchStatus() {

	console.log('switchStatus function is running!');
	console.log($(this));

	// If the item is completed,
	if($(this).hasClass('done')) {

		// mark it as incomplete.
		$(this).removeClass('done');

	} else { // Otherwise,

		// mark it as complete.
		$(this).addClass('done');

	}

}

$('#clear').click(function(){
	$('#todos').html('');
	$('#count').html(0);
	count = 0;

});

$('#completed').click(function(){
	//.length is counting the number of elements with the class of done
	count = count - $('.done').length;
	$('.done').remove();

	//take the contents of #count and replace with what is in global varible "count"
	//html refers to all html inside of the selected element
	$('#count').html(count);
});












