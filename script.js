var $submitButton = $('.grocery-list-form--submit');
var $itemInput = $('.grocery-list-form--item');
var $quantityInput = $('.grocery-list-form--quantity');
var $list = $('.grocery-list');

$submitButton.on('click', function(e) {
  e.preventDefault();
  var item = $itemInput.val();
  var quantity = $quantityInput.val();
  var listItem = createListItem(item, quantity);

  $list.append(listItem);
});

function createListItem(item, quantity) {
  return '<li>Item: ' + item + ' Quantity: ' + quantity + '</li>'
}