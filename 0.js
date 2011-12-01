$(function() {
  var allKeyUps = $(document).toObservable("keyup")

  var spaceBarKeyUps = allKeyUps
    .Where(function(event) { return event.keyCode == 32 })
    
  spaceBarKeyUps.Subscribe(function(event) { alert("you pressed space") })
})
