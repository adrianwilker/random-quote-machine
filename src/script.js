$(document).ready(function(){
  newQuote();
});

function newQuote() {
  let _quotePosition = arrayPosition(quotes.length);
  let _colorPosition = arrayPosition(colors.length);
  console.log('#' + colors[_colorPosition]);
  
  $("#quote").html(quotes[_quotePosition].quote).slideDown("slow");
  $("#author-name").html(quotes[_quotePosition].author);
  
  $("body").css("background-color", colors[_colorPosition]);
  $("#tweet-quote").hover(
    function() {
      $(this).css("background-color", colors[_colorPosition]);
    }, function() {
      $(this).css("background-color", '#FFF');
    }
  );
  $("#new-quote").hover(
    function() {
      $(this).css("background-color", colors[_colorPosition]);
    }, function() {
      $(this).css("background-color", '#FFF');
    }
  );
}

quotes = [
  {
    quote: 'A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo.',
    author: 'Albert Einstein'
  },
  {
    quote: 'Nem todos os que vagueiam estão perdidos.',
    author: 'J. R. R. Tolkein'
  },
  {
    quote: 'Tentar não; faça ou não faça; tentativa não há.',
    author: 'Mestre Yoda'
  },
  {
    quote: 'Se a rosa tivesse outro nome, ainda assim teria o mesmo perfume.',
    author: 'William Shakespeare'
  },
  {
    quote: 'O gênio é um por cento de inspiração e noventa e nove por cento de transpiração.',
    author: 'Thomas Edison'
  },
  {
    quote: 'A vida é como uma caixa de chocolates, você nunca sabe o que vai encontrar.',
    author: 'Forrest Gump'
  },
  {
    quote: 'É melhor ter amado e perdido do que nunca ter amado.',
    author: 'Alfred Lord Tennyson'
  },
  {
    quote: 'O que não nos mata nos fortalece.',
    author: 'Friedrich Nietzsche'
  },
  {
    quote: 'No final das contas, não são os anos de sua vida que contam. É a vida em seus anos.',
    author: 'Abraham Lincoln'
  },
  {
    quote: 'A vida é a arte do encontro, embora haja tanto desencontro pela vida.',
    author: 'Vinicius de Moraes'
  },
  {
    quote: 'O que já fiz não me interessa. Só penso no que ainda não fiz.',
    author: 'Pablo Picasso'
  },
  {
    quote: 'A vida é o que acontece quando você está ocupado fazendo outros planos.',
    author: 'John Lennon'
  },
  {
    quote: 'É que "quem sou eu?" provoca necessidade. E como satisfazer a necessidade? Quem se indaga é incompleto.',
    author: 'Clarice Lispector'
  },
  {
    quote: '(...) Vagamente pensava de muito longe e sem palavras o seguinte: já que sou, o jeito é ser.',
    author: 'Clarice Lispector'
  },
  {
    quote: 'Pensando bem: quem não é um acaso na vida?',
    author: 'Clarice Lispector'
  },
  {
    quote: 'Na maioria das vezes, a diferença entre vencer e perder consiste em não desistir.',
    author: 'Walt Disney'
  },
];

colors = [
  '#4682B4',
  '#C4BBB8',
  '#E1F4CB',
  '#F1BF98',
  '#E0777D',
  '#F4A261',
  '#C19AB7',
  '#CECFC7',
  '#EF6F6C',
  '#F2C57C',
  '#DDAE7E',
  '#7FB685',
  '#D4E3EB',
];

const arrayPosition = (length) => {
  return Math.floor(Math.random() * quotes.length);
}

document.addEventListener("DOMContentLoaded", function() {
    var text = $("#quote").text();
    var author = $("#author-name").text();
    var url = $(location).attr('href');
    $("#tweet-quote").prop("href", ("https://twitter.com/intent/tweet?text=" + text + " - " + author + " via " + url));
}, false);
