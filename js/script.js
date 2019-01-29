//Random Quote Generator


// Variables

var quotes = [
  {
    quote: "Choose a job you love, and you will never have to work a day in your life",
    source: "Confucius",
    tag: "Old Sayings"
  },
  {
    quote: "But it ain’t about how hard you hit, it’s about how hard you can get hit and keep moving forward, how much can you take and keep moving forward",
    source: "Rocky Balboa",
    citation: "Rocky Balboa",
    year: "2006",
    tag: "From the Silver Screen"

  },
  {
    quote: "Every man’s life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another.",
    source: "Ernest Hemingway",
    year: "unknown",
    tag: "Famous Authors"
  },
  {
    quote: "All we have to decide is what to do with the time that is given to us.",
    source: "Gandalf",
    citation: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    tag: "From the Silver Screen"
  },
  {
    quote: "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.",
    source: "Stephen King",
    tag: "Famous Authors"
  },

];


// generate a random quote out of the array
const getRandomQuote = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];

}

// Random Color Generator
const randomColor = () => {
  // Generate a random number between 0 - 255;
  let randomRGB = Math.floor(Math.random() * 256);
  return randomRGB;

}

// generate random background color for each quote
const randomBG = () => {
    //place random number into rgbs
    let rgb = 'background-color: rgb(' + randomColor() + ', ' + randomColor() + ', ' + randomColor() + ')';
    //apply rgb to body css
    let changeColor = document.querySelector('body');
    return changeColor.setAttribute('style', rgb);
}



//Print quote to screen function
const printQuote = () => {
  randomBG();
  let curQuote = getRandomQuote(quotes);
  let output = document.getElementById('quote-box');
  let html = '';
  html += '<p  class="quote">' + curQuote.quote + '</p>';
  html += '<p class="source">' + curQuote.source ;
  if (curQuote.hasOwnProperty('citation')) {
    html += '<span class="citation">' + curQuote.citation + '</span>';
  }
  if (curQuote.hasOwnProperty('year')) {
    html += '<span class="year">' + curQuote.year + '</span>';
  }
  html+= '<span class ="tag">' + curQuote.tag + '</span>';
  html += '</p>';
  return output.innerHTML = html;
}



// set interval to change quotes automatically
  setInterval(() => {
    printQuote();
  }, 20000);

//button event to change quotes

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

