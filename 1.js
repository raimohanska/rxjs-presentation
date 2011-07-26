$(function() {
  var allKeyUps = $(document).toObservable("keyup")
  var allKeyDowns = $(document).toObservable("keydown")
  
  function always(value) { return function(_) { return value } }
  function keyCodeIs(keyCode) { return function(event) { return event.keyCode == keyCode} }
  function keyUps(keyCode) { return allKeyUps.Where(keyCodeIs(keyCode)) }
  function keyDowns(keyCode) { return allKeyDowns.Where(keyCodeIs(keyCode)) }
  
  function keyState(keyCode) {
    return Rx.Observable.FromArray([false])
      .Concat(keyDowns(keyCode).Select(always(true)))
        .Merge(keyUps(keyCode).Select(always(false)))
  }
  
  keyState(32).Subscribe(function(spaceDown) { $('#keyState').text(spaceDown) })  
})
