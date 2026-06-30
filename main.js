const enterInput = document.getElementById("input")
const btn = document.getElementById("btn")
const result = document.getElementById("result")

function convert(usd){
    let naira_rate = 1382.09
    let naira_value = usd * naira_rate
    return naira_value
}

btn.addEventListener("click", ()=>{
    let num = Number(enterInput.value)
    let currentValue = convert(num)
    result.textContent = "# " + currentValue
    result.classList.add("active")
})

enterInput.addEventListener("click", ()=>{
    enterInput.value = ""
    result.textContent = " "
    result.classList.remove("active")
})

