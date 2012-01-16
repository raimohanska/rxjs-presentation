$(function() {
  var startPos = new Vector2D(50, 50)

  function head(array) { return array[0] }
  function id(x) { return x }
  function latter(a, b) { return b }

  // direction, movements, position :: Observable Vector2D
  var direction = keyState(38, new Vector2D(0, -1))
    .CombineLatest(keyState(40, new Vector2D(0, 1)), concat)
    .CombineLatest(keyState(37, new Vector2D(-1, 0)), concat)
    .CombineLatest(keyState(39, new Vector2D(1, 0)), concat)
    .Select(head)

  var movements = Rx.Observable.Interval(50)
    .CombineLatest(direction, latter)
    .Where(id)

  var position = movements
    .Scan(startPos, function(pos, move) { return pos.add(move) })
    .StartWith(startPos)

  position.Subscribe(function(pos) {$('#position').text(pos.x + "," + pos.y)})
})
