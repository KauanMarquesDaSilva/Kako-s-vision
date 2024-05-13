const textos = [
    "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna. João 3:16",
    "Venham a mim, todos vocês que estão cansados de carregar as suas pesadas cargas, e eu lhes darei descanso. Sejam meus seguidores e aprendam comigo porque sou bondoso e tenho um coração humilde; e vocês encontrarão descanso. Os deveres que eu exijo de vocês são fáceis, e a carga que eu ponho sobre vocês é leve. Matheus 11:28-30",
    "Na casa do meu Pai há muitos quartos, e eu vou preparar um lugar para vocês. Se não fosse assim, eu já lhes teria dito. E, depois que eu for e preparar um lugar para vocês, voltarei e os levarei comigo para que onde eu estiver vocês estejam também. E vocês conhecem o caminho para o lugar aonde eu vou. João 14:2-4",
    "Mas o Senhor Jesus é fiel. Ele lhes dará forças e os livrará do Maligno. 2Tessalonicenses 3:3",
    "Vocês vão me procurar e me achar, pois vão me procurar com todo o coração. Jeremias 29:13",
    "Mas você, quando orar, vá para o seu quarto, feche a porta e ore ao seu Pai, que não pode ser visto. E o seu Pai, que vê o que você faz em segredo, lhe dará a recompensa. Matheus 6:6",
    "e o enchi com o meu Espírito. Eu lhe dei inteligência, copetência e habilidade para fazer todo tipo de trabalho artístico; para fazer desenhos e trabalhar em ouro, prata e bronze; Êxodo 31:3-4",
    "A Deus, o Senhor, pedi uma coisa, e o que quero é só isto: que ele me deixe viver na sua casa todos os dias da minha vida, para sentir, maravilhado, a sua bondade e pedir a sua orientação Salmos 27:4",
    "Tudo neste mundo tem o seu tempo; cada coisa tem a sua ocasião. Há tempo de nascer e tempo de morrer; tempo de plantar e tempo de arrancar; tempo de matar e tempo de curar; tempo de derrubar e tempo de construir. Há tempo de ficar triste e tempo de se alegrar; tempo de chorar e tempo de dançar; tempo de espalhar pedras e tempo de ajuntá-las; tempo de abraçar e tempo de afastar. Há tempo de procurar e tempo de perder; tempo de economizar e tempo de desperdiçar; tempo de rasgar e tempo de remendar; tempo de ficar calado e tempo de falar. Há tempo de amar e tempo de odiar; tempo de guerra e tempo de paz. Eclesiastes 3:1-8",
    "E vi a Cidade Santa, a nova Jerusalém, que descia do céu. Ela vinha de Deus, enfeitada e preparada, vestida como uma noiva que vai se encontrar com o noivo. Apocalipse 21:2",
    "O Universo todo espera com muito impaciência o momento em que Deus vai revelar o que os seus filhos realmente são. Romanos 8:19",
    "Procurem a ajuda de Deus enquanto podem achá-lo; orem ao Senhor enquanto ele está perto. Isaías 55:6",
    "Lá vocês procurarão o Senhor, seu Deus, e o encontrarão, se o buscarem com todo o coração e com toda a alma. Deuteronômio 4:29"
];

let currentIndex = 0;

function alterarTexto() {

    const elementoTexto = document.getElementById("textos");

    elementoTexto.textContent = textos[currentIndex];

    currentIndex = (currentIndex + 1) % textos.length;
}

alterarTexto();

setInterval(alterarTexto, 10000);
