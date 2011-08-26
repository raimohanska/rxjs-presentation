var allKeyUps = $(document).toObservable("keyup")
var allKeyDowns = $(document).toObservable("keydown")

function always(value) { return function(_) { return value } }
function keyCodeIs(keyCode) { return function(event) { return event.keyCode == keyCode} }
function keyUps(keyCode) { return allKeyUps.Where(keyCodeIs(keyCode)) }
function keyDowns(keyCode) { return allKeyDowns.Where(keyCodeIs(keyCode)) }
function keyState(keyCode, value) {
  return Rx.Observable.FromArray([[]])
    .Concat(keyDowns(keyCode).Select(always([value])))
    .Merge(keyUps(keyCode).Select(always([])))
}

function concat(a1, a2) {
  return a1.concat(a2)
}

