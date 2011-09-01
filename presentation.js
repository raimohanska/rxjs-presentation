var slides = ['intro.html', '0.html', '1.html', '2.html', '3.html', '4.html'
  , '5.html', '6.html', 'presentation.html', 'outro.html']

function initPresentation(id) { 
  showSrc(id + ".js") 
  keyUps(188).Select(function() { return Math.max(currentSlide() - 1, 0)} )
    .Merge(keyUps(190).Select(function () { return Math.min(currentSlide() + 1, slides.length - 1)} ))
    .Subscribe(showSlide)
  keyUps(48).Subscribe(function() { showSlide(0) })
  keyUps(32)
    .ZipWithArray($('.anim').hide(), function(_, el) { return $(el) })
    .Subscribe(function(e) { e.show(100) })

}

function showSrc(file) {
  $('#src pre').load(file, function() { prettyPrint()}) 
}
function showSlide(idx) { document.location=slides[idx] } 
function currentSlide() {
  for (i = 0; i < slides.length; i = i+1) {
    if (window.location.toString().lastIndexOf(slides[i]) != -1) return i
  }
  return 0
}

Rx.Observable.prototype.ZipWithArray = function(array, selector) { 
  return this.Zip(Rx.Observable.FromArray(array).Concat(Rx.Observable.Never()), selector)
}

