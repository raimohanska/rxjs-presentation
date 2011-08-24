function initPresentation(id) { 
  showSrc(id + ".js") 
  keyUps(190).Select(always(id + 1))
    .Merge(keyUps(188).Select(always(id - 1)))
    .Where(function(id) { return id >= 0 && id <= 7 })
    .Subscribe(function(id) { document.location=id + ".html" })
}
function showSrc(file) {
  $('#src pre').load(file, function() { prettyPrint()}) 
}
