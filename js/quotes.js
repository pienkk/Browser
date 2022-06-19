const quotes = [
{
    quote: "Think like a man of action and act like man of thought.",
    author: "A",
},
{
    quote: "Courage is very important. Like a muscle, it is strengthened by use",
    author: "B",
},
{
    quote: "Life is the art of drawing sufficient conclusions from insufficient premises.",
    author: "C",
},
{
    quote: "By doubting we come at the truth.",
    author: "D",
},
{
    quote: "A man that hath no virtue in himself, ever envieth virtue in others.",
    author: "E",
},
{
    quote: "When money speaks, the truth keeps silent.",
    author: "F",
},
{
    quote: "Better the last smile than the first laughter.",
    author: "G",
},
{
    quote: "In the morning of life, work; in the midday, give counsel; in the evening, pray.",
    author: "H",
},
{
    quote: "Painless poverty is better than embittered wealth.",
    author: "I",
},
{
    quote: "A poet is the painter of the soul.",
    author: "J",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;