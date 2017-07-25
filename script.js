var $submitButton = $('.grocery-list-form--submit');
var $list = $('.grocery-list');

$submitButton.on('click', function(e) {
  e.preventDefault();
  var $item = $('.grocery-list-form--item');
  var $quantity = $('.grocery-list-form--quantity');
  var listItem = createListItem($item, $quantity);
  $list.append(listItem);
  clearFields($item, $quantity);
});

function clearFields($item, $quantity) {
  $item.val('');
  $quantity.val('');
}

function createListItem($item, $quantity) {
  return '<li>Item: ' + $item.val() + ' Quantity: ' + $quantity.val() + '</li>'
}