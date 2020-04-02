//Step Button Handler
document.querySelectorAll(".form-btn").forEach(node => {
    node.addEventListener("click", e => {
        ChangeStepDisplay();
    })
})

//Form Submit Handler
document.querySelector(".stepper-form").addEventListener("submit", e => {
    e.preventDefault();
})

//Step Display Handler
const ChangeStepDisplay = () => {
    let CurrentStep = document.querySelector(".step.current-step");
    let NextStep = CurrentStep.nextElementSibling;

    if(NextStep === null) alert("Form submitted!");
    
    CurrentStep.classList.remove("current-step");
    NextStep.classList.add("current-step");
}