const submitBtn = document.querySelector("#submit")
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const fnameWrapper = document.querySelector(".fname-wrapper")
const lnameWrapper = document.querySelector(".lname-wrapper")
const emailWrapper = document.querySelector(".email-wrapper")
const passwordWrapper = document.querySelector(".password-wrapper")


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    check(fname, "", fnameWrapper)
    check(lname, "", lnameWrapper)
    check(password, "", passwordWrapper)
    checkEmail(email, emailWrapper)

})


function check(input, value, wrapper) {
    if (input.value === value) {
        wrapper.classList.add("error-wrapper")
        setTimeout(() => {
            wrapper.classList.remove("error-wrapper")

        }, 3500)
    }
}

function checkEmail(input, wrapper) {
    if (!input.value.toLowerCase().match(/^[a-z\._\0-9]*[@][a-z]*[\.][a-z]{2,4}$/)) {
        wrapper.classList.add("error-wrapper")
        setTimeout(() => {
            wrapper.classList.remove("error-wrapper")

        }, 3500)
    }


}
