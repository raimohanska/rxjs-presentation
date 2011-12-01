$(function() {
  var startPos = Point(50, 50)
  var controller = GameController(startPos)
  var r = Raphael(document.getElementById('arena'), 200, 200);
  var player = r.image("images/man-left-1.png", startPos.x, startPos.y, 40, 40)
  controller.position.Subscribe(function (pos) { player.attr({x : pos.x, y : pos.y}) })
  
  // animation :: Observable Int
  var animation = controller.position
    .Scan(1, function(prev, _) { return prev % 2 + 1})
  animation.Subscribe(function (index) { 
    player.attr({src : "images/man-left-" + index + ".png"})}) 
 
  // angle :: Observable Double
  var angle = controller.direction
    .Where(id)
    .Select(function(vec) { return vec.getAngleDeg()})
  angle.Subscribe(function(angle) { player.rotate(angle + 180, true) })
  
})
