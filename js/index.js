
const toggleForm = document.querySelector(".toggle-form");
const form = document.querySelector(".form");

toggleForm.addEventListener("click",()=>{
    console.log(form);
    form.classList.toggle("hidden");
})

console.log("hi")
