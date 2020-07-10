var firstLetter = names[i].charAt(0).toLowerCase();
   if (firstLetter === 'j') {
    byespeaker.speak(names[i]);
  } else {
    hellospeaker.speak(names[i]);
  }
}

})();
