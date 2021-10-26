//Armazenamento de Niveis//
let levels = {
    introduction_I: {
        module: 'Introduction',
        name: 'Inicio',
        identifier: 'I',
        unlocker: ['II', null],
        answer: 'iunderstandmyrights',
        htmlToLoad: 
       `<p>Bem vindo a Remnants. Eu sou Aegis, sua assistente pessoal e estou aqui para orienta-lo em seus primeiros passos.</p>
        <ul><li>Você está adormecido a <2350> anos.</li>
        <li>Você é da celula <84JhLka>.</li></ul>
        <p>Nesse momento, você deve ter muitas duvidas. Não se preocupe — todas elas serão respondidas 
        conforme você for explorando o mundo ao seu redor. A chave para poder entender esse lugar é
        justamente se esforçar para entende-lo.</p>
        <p>Agora, você tem um assunto mais importante a resolver: 
        o seu tempo de congelamento pode ter gerado alguns danos. Sendo assim, 
        precisamos verificar suas funções cognitivas.</p>
        <p>Interprete o seguinte <b>texto:</b></p>
        <p><i>"Todas as respostas para interagir com os terminais serão em inglês. E a resposta dessa fase 
        "iunderstandmyrights" não seria diferente. Alem disso, todas as respostas são sem espaços, 
        independente de serem palavras ou frases."</i></p>`
    },
    introduction_II: {
        module: 'Introduction',
        name: 'Correlação Logica',
        identifier: 'II',
        unlocker: ['Gate', null],
        answer: 'life',
        htmlToLoad: `<p>Muito bem. Agora que verifiquei que você possui a capacidade de ler e interpretar textos, 
        preciso verificar se você sabe fazer correlações logicas simples.</p>
        <p>Se você se lembra da fase anterior, me diga: <b>Qual é o principal de sua raça, humano?</b></p>`
    },
    introduction_Gate: {
        module: 'Introduction',
        name: 'Portão — ☖',
        identifier: 'Gate',
        unlocker: ['Module', 'begginer'],
        answer: 'death',
        htmlToLoad: `<p>Como pode observar pelo nome da sala, você alcançou o seu primeiro portão.
        Portões são passagens para novos modulos, e geralmente são as fases mais dificeis do modulo.
        Até aqui, você está indo muito bem, e se entendeu bem como esse jogo funciona, já
        deve saber que a resposta reside no contrario.</p>`
    }
};

//Carregamento de Niveis//
loadLevel = (module, id) => {
    return eval(`levels.${module}_${id}`);
};




