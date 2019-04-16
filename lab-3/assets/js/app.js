$('.button').click(function() {
  var name = $(this).data('name');
  hello(name);
});



function hello(name) {
  // debugger;
  // console.log(name);
  // var message = '<p>Hi ' + name + '!</p>';
  var message = '<img src="assets/img/' + name + '" />';
  $('.content').prepend(message);
}

// String
// "double quotes" 'or single quotes'
// 'and then he said, "hi!"'

// Numbers
// 0 1 2 3 4 5 6 7 8 9

// Booleans
// False or True
// 0 or 1

// Arrays
// ['socks', 'shirts', 'pants', 'off season'];
// dresser = [0, 'shirt', ['rijk','brian','nataly'], true];