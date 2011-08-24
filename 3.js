$(function() {
  function id(x) { return x }
  
  var direction = keyState(38, 'UP')
    .CombineLatest(keyState(40, 'DOWN'), concat)
    .CombineLatest(keyState(37, 'LEFT'), concat)
    .CombineLatest(keyState(39, 'RIGHT'), concat)
    
  var movements = Rx.Observable.Interval(200)
    .CombineLatest(direction, function(_, dir) { return dir })
    .Where(id)

  movements
    .Scan([], function(acc, move) { return acc.concat([move]) })
    .Subscribe(function(moves) {$('#movements').text(moves.join(' ')) });

})
