let qoutes = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("new-quote");
let nextBtn = document.getElementById("next-quote");
let resetBtn = document.getElementById("reset-quote");

let qoutesArr = [
  {
    qoute:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    qoute:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    qoute:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr.",
  },
  {
    qoute: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    qoute: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    qoute:
      "Courage isn't having the strength to go on - it is going on when you don't have strength.",
    author: "Napoleon Bonaparte",
  },
  {
    qoute:
      "When we give someone our time, we actually give a portion of our life that we will never take back.",
    author: "Alexandre the Great",
  },
];

btn.addEventListener("click", function() {
  qoutesArr.forEach(() => {
    let random = Math.trunc (Math.random() * qoutesArr.length);
    console.log(random);
    

    qoutes.innerHTML = qoutesArr[random].qoute;
    author.innerHTML = qoutesArr[random].author;
  })

 
});

let index = 0
nextBtn.addEventListener("click", function(){
  const correctQuote = qoutesArr[index]

  qoutes.innerHTML = correctQuote.qoute;
  author.innerHTML = correctQuote.author;

  index++

  if(index >=qoutesArr.length) {
    index = 0
  }

})


resetBtn.addEventListener("click", function(){
  qoutes.innerHTML = ""
  author.innerHTML = ""
})




// console.log(qoutesArr[1].qoute);
// console.log(qoutesArr[1].qoute);



































































