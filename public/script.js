if (annyang) {
    const addNewTodo = newTodo => {
        if(newTodo.length > 20 || newTodo.length < 3) document.querySelector('#potential_error').innerHTML = 'Invalid todo provided';
        else document.querySelector('input[type=text]').value = newTodo;
    }
    annyang.setLanguage('pl', 'en-us')
    annyang.addCommands({
        '*newTodo': addNewTodo
    });
    console.log(SpeechKITT)
    SpeechKITT.annyang();
    SpeechKITT.setInstructionsText("Listening to your todo...");
    SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');
    SpeechKITT.vroom();
}