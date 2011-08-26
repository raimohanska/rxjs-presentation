$(function() {
  function keyState(keyCode, value) {
    return Rx.Observable.FromArray([[]])
      .Concat(keyDowns(keyCode).Select(always([value])))
      .Merge(keyUps(keyCode).Select(always([])))
  }

  function concat(a1, a2) {
    return a1.concat(a2)
  }
  
  keyState(38, 'UP')
    .CombineLatest(keyState(40, 'DOWN'), concat)
    .CombineLatest(keyState(37, 'LEFT'), concat)
    .CombineLatest(keyState(39, 'RIGHT'), concat)
    .Subscribe(function(keysDown) { $('#keyState').text(keysDown.join(',')) })  
})
