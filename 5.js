$(function() {
  var startPos = Point(50, 50)
  var controller = GameController(startPos)
  var raphael = Raphael(document.getElementById('arena'), 200, 200);
  var man = raphael.image("images/man-left-1.png", startPos.x, startPos.y, 40, 40)
  controller.position.Subscribe(function (pos) { man.attr({x : pos.x, y : pos.y}) })
})