$(function() {
  function getValue(cell) { return $("#" + cell).changes()}
  function setValue(cell) { return function(val) {$("#" + cell).val(val)} }
  function sum(x, y) { return parseFloat(x) + parseFloat(y) }
  getValue("a1").CombineLatest(getValue("b1"), sum).Subscribe(setValue("c1"))
})
