$(function() {
  // allKeyUps is an Observable stream of all key-up events
  var allKeyUps = $(document).toObservable("keyup")
    
  function keyCodeIs(keyCode) { 
    return function(event) { return event.keyCode == keyCode} }
  
  allKeyUps
    .Where(keyCodeIs(32))
    .Subscribe(function(event) { alert("you pressed space") })
})
