//Module Object Loader//
if (!localStorage.getItem('answer')) {
moduleObject = {
    ASIDE: {
        description: 'An tutorial to the module',
        numberOfLevels: 2,
        optionalLevels: [],
        unlockedLevels: []
    },
    BSIDE: null,
    CSIDE: null,
    totalLevels: 2,
    totalOptionalLevels: []
};
}
else {
    var moduleObject = JSON.parse(localStorage.getItem('answer'));
}

//Entrada//
accessLevel = (tagCall) => {
    if (document.querySelector(`div.hexagon.untoggled#${tagCall}`)) 
    {
        window.alert('Essa fase ainda não foi liberada.');
    }
    else {
        let level = loadLevel('introduction', tagCall);
        document.querySelector('#levelOverlay').classList.add('toggled')
        buildLevel(level);
    }
}

//Construir Nivel//
buildLevel = (level) => {
    console.log(level.htmlToLoad);
    document.querySelector('#overlay').innerHTML = `<div id="${level.identifier}">` + 
    `<h1>${level.name}</h1>` + level.htmlToLoad + 
    `<div id="form"><form action="" onsubmit="answerCheck(event)"">
     <input type="text" id="answer" name="${level.identifier}" placeholder="Resposta">
     <button>Enviar</button></div>`+ `</div>`;
}

exitLevel = () => {
    console.log('exit!');
    document.querySelector('#overlay').innerHTML = null;
    document.querySelector('#levelOverlay').classList.remove('toggled');
    console.log('level!');
}

//Ouvintes//
document.addEventListener('keydown', event => {
if (event.key == 'Escape') {
    exitLevel();
}
});

//Resposta//
answerCheck = (event) => {
    event.preventDefault();
    let answerElement = document.querySelector('#answer');
    let levelObject = loadLevel('introduction', answerElement.name);
    if (answerElement.value === levelObject.answer) {
        if (!moduleObject.ASIDE.unlockedLevels.includes(levelObject.identifier)) {
            alert('Você completou o nivel!');
            moduleObject.ASIDE.unlockedLevels.push(levelObject.identifier);
            write(levelObject);
            exitLevel();
        }
        else {
            alert('Você já digitou a resposta dessa fase.')
        }
    }
    else {
        alert('Resposta errada!');
    }
};

//Local Storage//
write = (levelObject) => {
    if (levelObject.unlocker[0] == 'Module') {
        exitLevel();
        alert('Parabens! Você completou o modulo.');
        location.assign(`http://127.0.0.1:5500/${levelObject.unlocker[1]}.html`);
    }
    localStorage.setItem('answer', JSON.stringify(moduleObject));
    load();
    console.log('write!');
}

load = () => {
    let unlockedLevels = JSON.parse(localStorage.getItem('answer')).ASIDE.unlockedLevels;
    console.log(unlockedLevels);

    for (i = 0; i < unlockedLevels.length; ++i) {
        let unlocker = loadLevel('introduction', unlockedLevels[i]).unlocker;
        if (unlocker[0] != 'Module') {
        document.querySelector(`.hexagon#${unlocker[0]}`).classList.remove('untoggled');
        document.querySelector(`.hexagon#${unlocker[0]}`).classList.add('toggled');
        }
    }
};

console.log(moduleObject);
load();