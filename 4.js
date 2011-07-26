$(function() {
  var startPos = Point(50, 50)

  function head(array) { return array[0] }
  function id(x) { return x }

  var direction = keyState(38, 'up')
    .CombineLatest(keyState(40, 'down'), concat)
    .CombineLatest(keyState(37, 'left'), concat)
    .CombineLatest(keyState(39, 'right'), concat)
    .Select(head)

  var mapping = { up : Point(0, -1), down : Point(0, 1), left: Point(-1, 0), right: Point(1, 0)}
  
  var directionVector = direction.Select(function(name) { return mapping[name] })
 
  var movements = directionVector
    .Sample(50)
    .Where(id)

  var position = movements
    .Scan(startPos, function(pos, move) { return pos.add(move.times(4)) })
    .StartWith(startPos)


  position.Subscribe(function(pos) {$('#position').text(pos.x + "," + pos.y)})

})
