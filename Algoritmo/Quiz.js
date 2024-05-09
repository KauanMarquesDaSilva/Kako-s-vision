const questions = [

    { question: "No seu primeiro ano em Hogwarts, que tipo de aluno você seria?", options: ["Não se juntaria a ninguém, pois não precisa de ninguém", "Se juntaria as pessoas que parecem ser mais inteligentes", "Aquele que se juntaria às primeiras pessoas que
 te acolhessem", "Aquele que se juntaria as pessoas mais populares"], points: [2, 1, 3, 4] },

    { question: "Qual qualidade é mais importante para você?", options: ["Coragem", "Inteligência", "Ambição", "Lealdade"], points: [1, 2, 3, 4] },

    { question: "Qual animal você prefere?", options: ["Leão", "Águia", "Cobra", "Texugo"], points: [1, 2, 3, 4] },

    { question: "Qual é seu hobby preferido?", options: ["Jogar quadribol", "Estudar na biblioteca", "Planejar estratégias", "Cuidar de plantas"], points: [1, 2, 3, 4] },

    { question: "Se pudesse escolher uma criatura mágica para ser seu amigo, qual seria?", options: ["Fênix", "Sereiano", "Dragão", "Hipogrifo"], points: [1, 2, 3, 4] },

    { question: "O que você mais valoriza em uma competição?", options: ["Espírito esportivo", "Estratégia", "Vitória a qualquer custo", "Trabalho em equipe"], points: [1, 2, 3, 4] },

    { question: "Qual destas características você mais valoriza em uma pessoa?", options: ["Coragem", "Criatividade", "Ambição", "Compaixão"], points: [1, 2, 3, 4] },

    { question: "Qual seria sua matéria preferida em Hogwarts?", options: ["Defesa contra as artes das trevas", "História da magia", "Poções", "Herbologia"], points: [1, 2, 3, 4] },

    { question: "Durante um torneio bruxo, qual tarefa você escolheria?", options: ["A tarefa que exige coragem e bravura", "A tarefa que exige conhecimentos e habilidades mágicas", "A tarefa que exige astúcia e estratégia", "A tarefa que envolve ajudar os
 outros, mesmo que seja dificíl"], points: [1, 2, 3, 4] },

    { question: "Que tipo de fama você gostaria de ter?", options: ["Ser reconhecido como alguém valente e destemido", "Ser reconhecido como um gênio, alguém muito inteligente e perspicaz", "Ser reconhecido como alguém influente e poderoso", "Ser reconhecido
 como alguém gentil e prestativo, que sempre está lá para ajudar os outros"], points: [1, 2, 3, 4] },

    { question: "O que mais te motiva?", options: ["Aventura", "Conhecimento", "Sucesso", "Amizade"], points: [1, 2, 3, 4] }

  ];

  

  const houses = ["Grifinória", "Corvinal", "Sonserina", "Lufa-Lufa"];

  

  let currentQuestion = 0;

  let answers = { "Grifinória": 0, "Corvinal": 0, "Sonserina": 0, "Lufa-Lufa": 0 };

  

  const questionElement = document.getElementById("question");

  const optionsElement = document.getElementById("options");

  const resultElement = document.getElementById("result");

  const nextButton = document.getElementById("nextButton");

  

  function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    

    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {

      const button = document.createElement("button");

      button.textContent = option;

      button.addEventListener("click", () => selectOption(option, question.points[index]));

      optionsElement.appendChild(button);

    });

  }

  

  function selectOption(option, points) {

    const question = questions[currentQuestion];

    const houseIndex = question.options.indexOf(option);

    const house = houses[houseIndex];

    

    answers[house] += points;

    currentQuestion++;

    if (currentQuestion < questions.length) {

      showQuestion();

    } else {

      showResult();

    }

  }

  

  

  function showResult() {

    let maxPoints = -1;

    let winningHouse = "";

  

    for (const house in answers) {

      if (answers[house] > maxPoints) {

        maxPoints = answers[house];

        winningHouse = house;

      }

    }

  

    resultElement.textContent = `Sua casa em Hogwarts é: ${winningHouse}!`;

    nextButton.style.display = "none";

  }

  

  nextButton.addEventListener("click", showQuestion);

  

  showQuestion();
