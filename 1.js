$(function() {
  // allKeyUps :: Observable KeyEvent
  var allKeyUps = $(document).toObservable("keyup")
  var allKeyDowns = $(document).toObservable("keydown")
  
  // always :: a -> (b -> a)
  function always(value) { return function(_) { return value } }
  // keyCodeIs :: Int -> (KeyEvent -> Bool)
  function keyCodeIs(keyCode) { return function(event) { return event.keyCode == keyCode} }
  // keyUps :: Int -> Observable KeyEvent
  function keyUps(keyCode) { return allKeyUps.Where(keyCodeIs(keyCode)) }
  function keyDowns(keyCode) { return allKeyDowns.Where(keyCodeIs(keyCode)) }
  
  // keyState :: Int -> Observable Bool
  function keyState(keyCode) {
    return Rx.Observable.FromArray([false])
      .Concat(keyDowns(keyCode).Select(always(true)))
      .Merge(keyUps(keyCode).Select(always(false)))
  }
  
  keyState(32).Subscribe(function(spaceDown) { $('#keyState').text(spaceDown) })  
})
