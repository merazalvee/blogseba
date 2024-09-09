const quoteText = document.querySelector(".quote"),
      quoteBtn = document.querySelector("button.an"),
      authorName = document.querySelector(".name"),
      speechBtn = document.querySelector(".speech"),
      copyBtn = document.querySelector(".copy.an"),
      twitterBtn = document.querySelector(".twitter.an"),
      synth = speechSynthesis;

function randomQuote() {
  const e = quote[Math.floor(Math.random() * quote.length)];
  quoteText.innerHTML = e;
}

function mcK() {
  randomQuote();
}

speechBtn.addEventListener("click", () => {
  if (!quoteBtn.classList.contains("loading")) {
    let e = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    synth.speak(e);
    setInterval(() => {
      synth.speaking ? speechBtn.classList.add("active") : speechBtn.classList.remove("active");
    }, 10);
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText).then(() => {
    alert("Quote copied to clipboard");
  });
});

twitterBtn.addEventListener("click", () => {
  let e = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerText)}`;
  window.open(e, "_blank");
});

setTimeout(mcK, 0);
quoteBtn.addEventListener("click", randomQuote);

const quote = [
  'The only real valuable thing is intuition.<div class="authorA"><span>__</span><span class="name">Albert Einstein</span></div>',
  'A small piece of paper cant decide your future.<div class="authorA"><span>__</span><span class="name">AaryaN Sah</span></div>',
  'There is no great genius without some touch of madness.<div class="authorA"><span>__</span><span class="name">Seneca the Younger</span></div>',
  'History is written by the victors.<div class="authorA"><span>__</span><span class="name">Winston Churchill</span></div>',
  'It\'s so simple to be wise. Just think of something stupid to say and then don\'t say it.<div class="authorA"><span>__</span><span class="name">Sam Levenson</span></div>',
  'Myths which are believed in tend to become true.<div class="authorA"><span>__</span><span class="name">George Orwell</span></div>',
  'Life is a succession of moments. To live each one is to succeed.<div class="authorA"><span>__</span><span class="name">Corita Kent</span></div>',
  'Friends... they cherish one another\'s hopes. They are kind to one another\'s dreams.<div class="authorA"><span>__</span><span class="name">Henry David Thoreau</span></div>',
  'I have always found that mercy bears richer fruits than strict justice.<div class="authorA"><span>__</span><span class="name">Abraham Lincoln</span></div>',
  'You may say I\'m a dreamer, but I\'m not the only one, I hope someday you will join us, and the world will live as one.<div class="authorA"><span>__</span><span class="name">John Lennon</span></div>',
  'Ideas are the beginning points of all fortunes.<div class="authorA"><span>__</span><span class="name">Napoleon Hill</span></div>',
  'We never live; we are always in the expectation of living.<div class="authorA"><span>__</span><span class="name">Voltaire</span></div>',
  'Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.<div class="authorA"><span>__</span><span class="name">Gloria Steinem</span></div>',
  'Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.<div class="authorA"><span>__</span><span class="name">Arthur Conan Doyle</span></div>',
  'The noblest worship is to make yourself as good and as just as you can.<div class="authorA"><span>__</span><span class="name">Isocrates</span></div>',
  'Life is what happens while you are making other plans.<div class="authorA"><span>__</span><span class="name">John Lennon</span></div>',
  'I cannot make my days longer, so I strive to make them better.<div class="authorA"><span>__</span><span class="name">Henry David Thoreau</span></div>',
  'A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.<div class="authorA"><span>__</span><span class="name">Jeff Bezos</span></div>',
  'A friend is what the heart needs all the time.<div class="authorA"><span>__</span><span class="name">Henry van Dyke Jr.</span></div>',
  'Each day provides its own gifts.<div class="authorA"><span>__</span><span class="name">Marcus Aurelius</span></div>',
  'First-rate people hire first-rate people; second-rate people hire third-rate people.<div class="authorA"><span>__</span><span class="name">Leo Rosten</span></div>'
];
