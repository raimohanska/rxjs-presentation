$(function() {
  var startPos = Point(50, 50)
  var controller = GameController(startPos)
  var r = Raphael(document.getElementById('arena'), 200, 200);
  var man = r.image("images/man-left-1.png", startPos.x, startPos.y, 40, 40)
  controller.position.Subscribe(function (pos) { man.attr({x : pos.x, y : pos.y}) })
  
  var animation = controller.position
    .Scan(1, function(prev, _) { return prev % 2 + 1})
  animation.Subscribe(function (index) { 
    man.attr({src : "images/man-left-" + index + ".png"})}) 
 
  var angle = controller.directionVector
    .Where(id)
    .Select(function(vec) { return vec.getAngleDeg()})
  angle.Subscribe(function(angle) { man.rotate(angle + 180, true) })
  
})
