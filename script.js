let dataview = document.querySelector(".data-view")
// quiz aray questions
let quizData = [
    {
        question: 'which css property is used to display items on a row',
        options: ["flex", "flex-direction", "column"],
        answer: "flex",
    },
    {
        question: 'what is the popular version control used by developers',
        options: ["vs-code", "git", "github"],
        answer: "git",
    },
    {
        question: 'what keyword is used for a non reassignable value in javascript',
        options: ["var", "let", "const"],
        answer: "const",
    },
    {
        question: 'what continent is Nigeria located',
        options: ["asia", "europe", "africa", "ghana"],
        answer: "africa",
    },
    {
        question: 'what is the name of the capital of nigeria',
        options: ["lagos", "abuja", "imo"],
        answer: "abuja",
    },
    {
        question: 'what is the name of the president of nigeria',
        options: ["tinubu", "obi", "atiku"],
        answer: "tinubu",
    },
    {
        question: 'which currency does nigeria use',
        options: ["euro", "dollar", "naira"],
        answer: "naira",
    },
    {
        question: 'what keyword is used for a non reassignable value in javascript',
        options: ["var", "let", "const"],
        answer: "const",
    },
    {
        question: 'what keyword is used for a non reassignable value in javascript',
        options: ["var", "let", "const"],
        answer: "const",
    },
    {
        question: 'what keyword is used for a non reassignable value in javascript',
        options: ["var", "let", "const"],
        answer: "const",
    },
]
// quiz app function
function quizApp(){
    let wrong = 0;
    let corrects = 10;
    let result = 0;
    let quizArray = quizData.map((quiz, index) => {
        return `
                <div class="row my-3 py-2 px-5 ">
                    <div class="left">
                        <p class="col-1 px-3 text-white">${index +1}.
                         <p class="question px-5 text-white">${quiz.question}</p>
                        <select name="" id="" class="w-100 px-5 py-2 bg-success px-5">
                            <option>select an answer</option>
                            ${quiz.options.map((option) => {
                                return `
                                    <option value="${option}">${option}</option>;
                                    `
                            })};
                            
                        </select>
                    </div>

                    <div class="right">
                        <p class="selected text-info px-2">selected answer: </p>
                        <p class="correct text-white px-2">Correct answer: </p>
                        <p class="status px-2">status : </p>
                        
                    </div>
                </div>
             `
    });

    dataview.innerHTML = quizArray.join(" ");

    let selectElement = document.querySelectorAll('select');

    selectElement.forEach((select, index) => {
        select.addEventListener("change", (event) =>{
            let selectValue = event.target.value;
            let picked = document.querySelectorAll('.selected')[index];
            picked.innerHTML =`selected answer: ${selectValue}`;
            let correct = document.querySelectorAll('.correct')[index];
            correct.innerHTML = `correct answer: ${quizData[index].answer}`

            if(quizData[index].answer === selectValue){
                document.querySelectorAll(".status")[index].innerHTML = `status: correct`;
                result += corrects;
                document.querySelector(".result").innerHTML = `Total: ${result}/150`
                console.log(result)
                // document.querySelectorAll('.total_sum').innerHTML = `Total: ${totals}/100`
            }
            else{
                document.querySelectorAll(".status")[index].innerHTML = `status: wrong`;
                result += wrong;
                console.log(result)
                // document.querySelectorAll('.total_sum').innerHTML = `Total: ${totals}/100`;
            }
        });
    });
}

quizApp();


























// function addTwo(num1, num2){
//     let result = num1 / num2;
//     return result;
// }
// console.log(addTwo(10, 2))
// console.log(addTwo(100, 2))

// let myArr = ['esther', 'favour', 'big']
// myArr.push = ['amaka', 'emere'];
// console.log(myArr)

// function arrstd(last){
//     let lastArr = last[last.length - 1];
//     return lastArr;
// }

// console.log(arrstd(myArr))

// function greetUser(username){
//     let greet = 'welcome';
//     return greet + username
// };
// console.log(greetUser(' emeka'))

// let total = document.querySelector('.total');
// let count = document.querySelector('.count');
// let stock = document.querySelector('.stock');
// let defaultCount =0;
// let newstock =10;
// const Price = 7000;


// function add(){
//     defaultCount ++;
//     newstock--;
//     stock.innerHTML = newstock
//     count.innerHTML = defaultCount;
//     total.innerHTML = defaultCount * Price
// console.log('click')
// }

// function minus(){
//     defaultCount --;
//     newstock++;
//     stock.innerHTML = newstock
//     count.innerHTML = defaultCount;
//     total.innerHTML = defaultCount * Price
// console.log('click')
// }