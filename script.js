document.getElementById('btnSpeak').addEventListener('click', function () {
    var textToSpeak = document.getElementById('textToSpeak').value;
    var volume = document.getElementById('volumeSlider').value;

    if ('speechSynthesis' in window) {
        var synthesis = window.speechSynthesis;
        var utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        utterance.volume = parseFloat(volume);

        synthesis.speak(utterance);
    } else {
        alert("Text-to-Speech is not supported in your browser.");
    }
});

document.getElementById('btnListen').addEventListener('click', function () {
    var redDotIndicator = document.getElementById('redDotIndicator');

    if ('webkitSpeechRecognition' in window) {
        var recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';

        recognition.onstart = function () {
            redDotIndicator.classList.remove('hidden');  
        };

        recognition.onend = function () {
            redDotIndicator.classList.add('hidden');  
        };

        recognition.onresult = function (event) {
            var spokenText = event.results[0][0].transcript;
            document.getElementById('spokenText').innerText = spokenText;
        };

        if (!redDotIndicator.classList.contains('hidden')) {
            redDotIndicator.classList.add('hidden');
        }

        recognition.start();
    } else {
        alert("Speech-to-Text is not supported in your browser.");
    }
});