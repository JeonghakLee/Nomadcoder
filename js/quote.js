const quotes = [
{    
    quote: "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
    author: "Mark Twain"
},
{
    quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "Toni Morrison"
},
{
    quote: "One day I will find the right words, and they will be simple.",
    author: "Jack Kerouac, The Dharma Bums"
},
{
    quote: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin"
},
{
    quote: "You never have to change anything you got up in the middle of the night to write.",
    author: "Saul Bellow"
},
{
    quote: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
    author: "Robert Frost"
},
{
    quote: "Read, read, read. Read everything  author:  trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
    author: "William Faulkner"
},
{
    quote: "You must stay drunk on writing so reality cannot destroy you.",
    author: "Ray Bradbury, Zen in the Art of Writing"
},
{
    quote: "Words can be like X-rays if you use them properly  author:  they'll go through anything. You read and you're pierced.",
    author: "Aldous Huxley"
},
{
    quote: "How vain it is to sit down to write when you have not stood up to live.",
    author: "Henry David Thoreau"
}]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;