function head(array) { return array[0] }
function id(x) { return x }

function GameController(startPos) {
  var direction = keyState(38, new Vector2D(0, -1))
    .CombineLatest(keyState(40, new Vector2D(0, 1)), concat)
    .CombineLatest(keyState(37, new Vector2D(-1, 0)), concat)
    .CombineLatest(keyState(39, new Vector2D(1, 0)), concat)
    .Select(head)

  var movements = Rx.Observable.Interval(50)
    .CombineLatest(direction, function(_, dir) { return dir })
    .Where(id)

  var position = movements
    .Scan(startPos, function(pos, move) { return pos.add(move.times(4)) })
    .StartWith(startPos)

  return { direction : direction, position : position }
}
