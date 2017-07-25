var $submitButton = $('.grocery-list-form--submit');
var $itemInput = $('.grocery-list-form--item');
var $quantityInput = $('.grocery-list-form--quantity');
var $list = $('.grocery-list');

$submitButton.on('click', function(e) {
  e.preventDefault();
  var item = $itemInput.val();
  var quantity = $quantityInput.val();

  $list.append('<li>Item: ' + item + ' Quantity: ' + quantity + '</li>')
});