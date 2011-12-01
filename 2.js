$(function() {
  // keyState :: Int -> a -> Observable [a]
  function keyState(keyCode, value) {
    return Rx.Observable.FromArray([[]])
      .Concat(keyDowns(keyCode).Select(always([value])))
      .Merge(keyUps(keyCode).Select(always([])))
  }

  // concat :: [a] -> [a] -> [a]
  function concat(a1, a2) {
    return a1.concat(a2)
  }
 
  // arrowKeyState :: Observable [String] 
  var arrowKeyState = keyState(38, 'UP')
    .CombineLatest(keyState(40, 'DOWN'), concat)
    .CombineLatest(keyState(37, 'LEFT'), concat)
    .CombineLatest(keyState(39, 'RIGHT'), concat)
  
  arrowKeyState.Subscribe(function(keysDown) { $('#keyState').text(keysDown.join(',')) })  
})
