const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click', () => {
   currentQuestionIndex++
   setNextQuestion()
})

function startGame() {
   console.log('Started')
   startButton.classList.add('hide')
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
};

function setNextQuestion() {
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
   questionElement.innerText = question.question
   question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
   });
};

function resetState() {
   clearStatusClass(document.body)
   nextButton.classList.add('hide')
   while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)
   }
}

function selectAnswer(e) {
   console.log('Button Clicked!')
   const selectedButton = e.target
   const  correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
   } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
   }
}

function setStatusClass(element, correct) {
   clearStatusClass(element)
   if (correct) {
      element.classList.add('correct')
   } else {
      element.classList.add('wrong')
   }
}

function clearStatusClass(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
}

const questions = [
   {
     question: 'What is 2 + 2?',
     answers: [
       { text: '4', correct: true },
       { text: '11', correct: false },
       { text: '22', correct: false },
       { text: '42', correct: false }
     ]
   },
   {
     question: 'Who is the best Genshin Waifu?',
     answers: [
       { text: 'Raiden Shogun', correct: true },
       { text: 'Yae Miko', correct: true },
       { text: 'Jean Gunnhildr', correct: true },
       { text: 'Ganyu', correct: true }
     ]
   },
   {
     question: 'Is web development fun?',
     answers: [
       { text: 'Depends...', correct: false },
       { text: 'You bet!', correct: true },
       { text: 'Nope!', correct: false },
       { text: 'Sometimes...', correct: false }
     ]
   },
   {
     question: 'What is 4 * 2?',
     answers: [
       { text: '6', correct: false },
       { text: '8', correct: true },
       { text: '4', correct: false },
       { text: '88', correct: false }
     ]
   },
   {
      question: 'What element does Yae Miko use?',
      answers: [
        { text: 'Hydro', correct: false },
        { text: 'Electro', correct: true },
        { text: 'Geo', correct: false },
        { text: 'Cyro', correct: false }
      ]
    },
    {
      question: 'What element does Raiden Shogun use?',
      answers: [
        { text: 'Hydro', correct: false },
        { text: 'Electro', correct: true },
        { text: 'Geo', correct: false },
        { text: 'Cyro', correct: false }
      ]
    },
    {
      question: 'What element does Jean Gunnhildr use?',
      answers: [
        { text: 'Hydro', correct: false },
        { text: 'Electro', correct: false },
        { text: 'Geo', correct: false },
        { text: 'Anemo', correct: true }
      ]
    },
    {
      question: 'Who are the most known DPS characters in Genshin?',
      answers: [
        { text: 'Hu Tao', correct: true },
        { text: 'Raiden Shogun', correct: false },
        { text: 'Ganyu', correct: true },
        { text: 'Mona', correct: false }
      ]
    }
 ]