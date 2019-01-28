/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var quotes = [
    {
      quote: "Choose a job you love, and you will never have to work a day in your life",
      source: "Confucius"
    },
    {
      quote: "But it ain’t about how hard you hit, it’s about how hard you can get hit and keep moving forward, how much can you take and keep moving forward",
      source: "Rocky Balboa",
      citation: "Rocky Balboa",
      year: "2006"
      
    },
    {
      quote: "Every man’s life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another." ,
      source: "Ernest Hemingway"
    },
    {
      quote: "All we have to decide is what to do with the time that is given to us.",
      source: "Gandalf",
      citation: "The Lord of the Rings: The Fellowship of the Ring",
      year: "2001"
    },
    {
      quote: "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.",
      source: "Stephen King"
    },

];


var chosenQuote;



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
const getRandomQuote = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length) + 1;
  chosenQuote = arr[randomNumber]
  console.log(chosenQuote);
}

getRandomQuote(quotes);



/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

/* document.getElementById('loadQuote').addEventListener("click", printQuote, false); */


// Remember to delete the comments that came with this file, and replace them with your own code comments.