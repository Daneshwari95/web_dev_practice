// 1. Define questions
const quiz = [
  { question: "What is the capital of France?", answer: "Paris", hint: "It's also called the city of lights." },
  { question: "What is 5 * 6?", answer: "30", hint: "It's five times six." },
  { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee", hint: "The author's initials are H.L." },
  { question: "What is 2 + 2?", answer: "4", hint: "It's more than three, less than five." },
  { question: "Is JS used for web dev?", answer: "yes", hint: "JS stands for JavaScript." },
];

// 2. Track score
let score = 0;

// 3. Ask questions
for (let i = 0; i < quiz.length; i++) {
  let userAnswer = prompt(quiz[i].question + "\n\n(Need a hint? Type 'hint')");
  
  // Check if user asked for a hint
  if (userAnswer && userAnswer.toLowerCase() === "hint") {
    alert(`Hint: ${quiz[i].hint}`);
    userAnswer = prompt(quiz[i].question); // Ask again after hint
  }

  // Compare answers (case-insensitive)
  if (userAnswer && userAnswer.toLowerCase() === quiz[i].answer.toLowerCase()) {
    score++;
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! The correct answer was: ${quiz[i].answer}`);
  }
}

// 4. Show result
alert(`🎉 Final Score: ${score}/${quiz.length}`);