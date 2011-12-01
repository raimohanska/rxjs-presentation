function Audio() {   
  var sounds = {}      
                        
  function loadSound(soundName) {
    var audioElement = document.createElement('audio')
    audioElement.setAttribute('src', "audio/" + soundName + ".ogg")
    return audioElement
  }
  
  function getSound(soundName) {
    if (!sounds[soundName]) {
      sounds[soundName] = loadSound(soundName)
    }                                         
    return sounds[soundName]            
  }              
  function play(soundName) {   
    getSound(soundName).play()
  }
  return {
    playSound : function(soundName) { return function() { play(soundName) }},
  }
}


