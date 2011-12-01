$(function() {
  function nonEmpty(xs) { return xs.length > 0 }
  function head(xs) { return xs[0] }
  function latter(a, b) { return b }

  // direction :: Observable [String] 
  var direction = keyState(38, 'UP')
    .CombineLatest(keyState(40, 'DOWN'), concat)
    .CombineLatest(keyState(37, 'LEFT'), concat)
    .CombineLatest(keyState(39, 'RIGHT'), concat)
    
  // movements :: Observable String
  var movements = Rx.Observable.Interval(200)
    .CombineLatest(direction, latter)
    .Where(nonEmpty)
    .Select(head)

  // movementsSoFar :: Observable [String]
  var movementsSoFar = movements
    .Scan([], function(acc, move) { return acc.concat([move]) })

  movementsSoFar.Subscribe(function(moves) {$('#movements').text(moves.join(' ')) });
})
