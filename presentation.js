var slides = ['intro.html', '0.html', '1.html', '2.html', '3.html', '4.html', '5.html', '6.html', '7.html']

function initPresentation(id) { 
  showSrc(id + ".js") 
  keyUps(188).Select(function() { return Math.max(currentSlide() - 1, 0)} )
    .Merge(keyUps(190).Select(function () { return Math.min(currentSlide() + 1, slides.length - 1)} ))
    .Subscribe(showSlide)
  keyUps(48).Subscribe(function() { showSlide(0) })
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
