const questions = [

    { question: "No Seu Tempo Livre, O Que Você Faria?",
    options: ["Encontraria os amigos",
    "Ficaria em casa lendo",
    "Comer", 
    "Deitaria num jardir só meu",
    "Sairia pra correr um pouco",
    "Ficaria com a Família"], 
    points: [1, 2, 3, 4, 5, 6] },



    { question: "O Que Você Não Suporta?",
    options: ["Injustiça",
    "Gente Burra",
    "Pessoas",
    "Nada, Sou Tranquilo",
    "Ser superado naquilo que sou bom",
    "Que Provoque Quem Amo"],
    points: [1, 2, 3, 4, 5, 6] },



    { question: "Você Se Considera Uma Pessoa:",
    options: ["Diferente",
    "Inteligente",
    "Impaciente",
    "Feliz",
    "Determinada",
    "Forte"],
    points: [1, 2, 3, 4, 5, 6] },



    { question: "Das Opções Abaixo, Qual Você Mais Gosta De Fazer?",
    options: ["Treinar",
    "Aprender Algo Novo",
    "Ouvir Música",
    "Conversar",
    "Conhecer Lugares Novos",
    "Desenhar"],
    points: [1, 2, 3, 4, 5, 6] },



    { question: "Pra Você, O Que É Mais Difícil?",
    options: ["Amar o Próximo",
    "Reconhecer Seus Erros",
    "Se Expressar",
    "Saber Que Poderia Ter Feito Algo Diferente",
    "Superar Seus Traumas",
    "Se Conhecer"],
    points: [1, 2, 3, 4, 5, 6] },



    { question: "Qual Dessas Vista Você Prefere?",
    options: ["Céu Estrelado",
    "Montanhas",
    "Pôr Do Sol",
    "Floresta",
    "Mar Tempestuoso",
    "Universo"],
    points: [1, 2, 3, 4, 5, 6] },



    { question: "Se Você Pudesse Mudar Algo A Sua Vontade, O Que Seria?",
    options: ["O Passado",
    "O Futuro",
    "A Si Mesmo",
    "Nada",
    "Os Outros",
    "Tudo"],
    points: [1, 2, 3, 4, 5, 6] },

  ];

  

  const Personagens = ["Luau", "Fieal", "Vinicius", "Deivi", "Sajad", "Oliver"];

  

  let currentQuestion = 0;

  let answers = { "Luau": 0, "Fieal": 0, "Vinicius": 0, "Deivi": 0, "Sajad": 0, "Oliver": 0 };

  

  const questionElement = document.getElementById("question");

  const optionsElement = document.getElementById("options");

  const resultElement = document.getElementById("result");

  const voltarButton = document.querySelector(".voltar");

  const testeElement = document.getElementById("teste");

  const fundoElement = document.getElementById("fundo");

  

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

    const PersonagensIndex = question.options.indexOf(option);

    const Personagem = Personagens[PersonagensIndex];

    

    answers[Personagem] += 1;

    currentQuestion++;

    if (currentQuestion < questions.length) {

      showQuestion();

    } else {

      showResult();

    }

  }
  

  function showResult() {

    let maxPoints = -1;

    let winningPersonagem = "";

  

    for (const Personagem in answers) {

      if (answers[Personagem] > maxPoints) {

        maxPoints = answers[Personagem];

        winningPersonagem = Personagem;

      }

    }
    
    const testes = document.querySelectorAll("[id^='teste']");
    testes.forEach(teste => teste.style.display = "none");

    const idDoVencedor = get(winningPersonagem);
    const elementoVencedor = document.getElementById(idDoVencedor);
    elementoVencedor.style.display = "flex";

    const mensagemFinal = `Quem te Representa é: ${winningPersonagem}!`;
    resultElement.textContent = mensagemFinal;
    fundoElement.style.display = "none";
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    voltarButton.style.display = "block";
}

function get(Personagem) {
    const idPersonagem = {
      "Luau": "teste1",
      "Fieal": "teste2",
      "Vinicius": "teste3",
      "Deivi": "teste4",
      "Sajad": "teste5",
      "Oliver": "teste6"
    };

    return idPersonagem[Personagem];
}
  

  showQuestion();


  
  const menuButton = document.getElementById("menuButton");

    menuButton.addEventListener("click", showMenu);

    function showMenu() {
        window.location.href = "Quiz.html"

        const menuButton = document.getElementById("showMenu");
        menuButton.style.display = "block";
    }

