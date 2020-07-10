(function(window){
    var byespeaker = {};
    var speakWord = "Hello";
    byespeaker.speak=function(name){
      console.log(speakWord + " " + name);
    };
    window.byespeaker=byespeaker;
})(window);

