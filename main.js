const counter = document.querySelector("#counter")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")
const resetBtn = document.querySelector("#reset")
const message = document.querySelector("#message")
const mode = document.getElementById("mode")
const moon = document.getElementById("moon")
const sun = document.getElementById("sun")

//doar o valoare se foloseste /in loc de innerHTML /// sintaxa
let counterVal = 0
let darkmode = false

counter.textContent = counterVal

function changeColor(value, element){
    if (value < 1 ) element.style.color = "green"
    else if (value > -1) element.style.color  = "red"
    else element.style.color = "pink"
}

mode.addEventListener("click", () => {
    if(darkmode){
        document.body.style.backgroundColor="white"
        incrementBtn.style.backgroundColor = "black"
        decrementBtn.style.backgroundColor = "black"
        resetBtn.style.backgroundColor = "black"
        incrementBtn.style.color = "white"
        decrementBtn.style.color = "white"
        resetBtn.style.color = "white"
        darkmode = false
        moon.style.display= "none"
        sun.style.display= "block"


    } else {
        document.body.style.backgroundColor="black"
        incrementBtn.style.backgroundColor = "white"
        decrementBtn.style.backgroundColor = "white"
        resetBtn.style.backgroundColor = "white"
        incrementBtn.style.color = "black"
        decrementBtn.style.color = "black"
        resetBtn.style.color = "black"
        darkmode = true
        moon.style.display = "block"
        sun.style.display = "none"
        moon.style.backgroundColor="pink"
        moon.style.borderRadius= "50px"
        
    }
})

incrementBtn.addEventListener("click", () => { 
    // counterVal +=1
    counterVal++ 
    // ++counterVal // se adauga la urmatoarea valoarea
    counter.textContent = counterVal
    changeColor(counterVal, counter)
})

decrementBtn.addEventListener("click", () => { 
    counterVal--
    counter.textContent = counterVal
    changeColor(counterVal, counter)
})

resetBtn.addEventListener("click", () => { 
    counterVal = 0
    counter.textContent = counterVal
    // changeColor(counterVal, counter)
    message.style.transform = "translateX(-50%) translateY(-90%)"
    setTimeout (() => {
        message.style.transform = "translateX(-50%) translateY(100%)"
    },1500)
    resetBtn.style.color = "pink"
})





