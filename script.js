// Animation for video play button
function videoconAnimation(){
    var videocon = document.querySelector("#video-cntr")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-55,
        top:dets.y-60
    })
})
}
videoconAnimation()

// animation for page 1 loading i.e is big heading

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 #video-cntr",{
        scale:0.9,
        opacity:0,
        delay:0.5,
        duration:0.3,
        
    })
}
loadingAnimation()
// Function to calculate the budget
function calculateBudget() {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    if (!isNaN(income) && !isNaN(expenses)) {
        const budget = income - expenses;
        document.getElementById("budgetResult").textContent = "Your remaining budget is: " + budget + " Rupees";
    
    } else {
        document.getElementById("budgetResult").textContent = "Invalid input";
    }
}
calculateBudget()

// Function to calculate SIP returns
function calculateSIP() {
    const sipAmount = parseFloat(document.getElementById("sipAmount").value);
    const sipDuration = parseInt(document.getElementById("sipDuration").value);
    const expectedReturn = parseFloat(document.getElementById("expectedReturn").value);

    if (!isNaN(sipAmount) && !isNaN(sipDuration) && !isNaN(expectedReturn)) {
        const monthlyReturn = expectedReturn / 12 / 100;
        const totalMonths = sipDuration * 12;

        const totalInvestment = sipAmount * totalMonths;
        const estimatedValue = calculateFutureValue(sipAmount, monthlyReturn, totalMonths);

        document.getElementById("totalInvestment").textContent = totalInvestment.toFixed(2);
        document.getElementById("estimatedValue").textContent = estimatedValue.toFixed(2);
    } else {
        document.getElementById("totalInvestment").textContent = "Invalid input";
        document.getElementById("estimatedValue").textContent = "Invalid input";
    }
}
calculateSIP()

// Function to calculate future value
function calculateFutureValue(principal, monthlyRate, months) {
    let futureValue = principal;
    for (let i = 0; i < months; i++) {
        futureValue = (futureValue + principal) * (1 + monthlyRate);
    }
    return futureValue;
}
calculateFutureValue()

// Function to calculate loan payment and total interest paid
function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12; // Monthly interest rate
    const loanTerm = parseInt(document.getElementById("loanTerm").value);

    if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTerm)) {
        const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
        const totalInterestPaid = calculateTotalInterest(loanAmount, monthlyPayment, loanTerm);

        document.getElementById("monthlyPayment").textContent = monthlyPayment.toFixed(2);
        document.getElementById("totalInterestPaid").textContent = totalInterestPaid.toFixed(2);
    } else {
        document.getElementById("monthlyPayment").textContent = "Invalid input";
        document.getElementById("totalInterestPaid").textContent = "Invalid input";
    }
}

// Function to calculate monthly loan payment
function calculateMonthlyPayment(principal, monthlyRate, months) {
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return monthlyPayment;
}

// Function to calculate total interest paid
function calculateTotalInterest(principal, monthlyPayment, months) {
    const totalInterestPaid = (monthlyPayment * months) - principal;
    return totalInterestPaid;
}

// Function to track savings progress
function trackSavings() {
    const goalAmount = parseFloat(document.getElementById("goalAmount").value);
    const currentSavings = parseFloat(document.getElementById("currentSavings").value);
    const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);

    if (!isNaN(goalAmount) && !isNaN(currentSavings) && !isNaN(monthlyContribution) && monthlyContribution > 0) {
        const timeToGoal = calculateTimeToGoal(goalAmount, currentSavings, monthlyContribution);

        if (timeToGoal >= 0) {
            document.getElementById("timeToGoal").textContent = timeToGoal.toFixed(0);
        } else {
            document.getElementById("timeToGoal").textContent = "Goal is already met!";
        }
    } else {
        document.getElementById("timeToGoal").textContent = "Invalid input";
    }
}

// Function to calculate time to reach savings goal
function calculateTimeToGoal(goalAmount, currentSavings, monthlyContribution) {
    const timeToGoal = (goalAmount - currentSavings) / monthlyContribution;
    return timeToGoal;
}

// Function to calculate future value of investment
function calculateInvestment() {
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    const annualReturn = parseFloat(document.getElementById("annualReturn").value) / 100;
    const investmentDuration = parseInt(document.getElementById("investmentDuration").value);

    if (!isNaN(initialInvestment) && !isNaN(annualReturn) && !isNaN(investmentDuration) && investmentDuration > 0) {
        const futureValue = calculateFutureValue(initialInvestment, annualReturn, investmentDuration);

        document.getElementById("futureValue").textContent = futureValue.toFixed(2);
    } else {
        document.getElementById("futureValue").textContent = "Invalid input";
    }
}

// Function to calculate future value
function calculateFutureValue(principal, annualRate, years) {
    const futureValue = principal * Math.pow(1 + annualRate, years);
    return futureValue;
}
// Function to calculate step-up investment
function calculateStepUpInvestment() {
    const initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    const annualReturn = parseFloat(document.getElementById("annualReturn").value) / 100 / 12; // Monthly interest rate
    const contribution = parseFloat(document.getElementById("contribution").value);
    const stepAmount = parseFloat(document.getElementById("stepAmount").value);
    const stepFrequency = parseInt(document.getElementById("stepFrequency").value);
    const investmentDuration = parseInt(document.getElementById("investmentDuration").value);

    if (!isNaN(initialInvestment) && !isNaN(annualReturn) && !isNaN(contribution) &&
        !isNaN(stepAmount) && !isNaN(stepFrequency) && !isNaN(investmentDuration) && stepFrequency > 0 && investmentDuration > 0) {
        
        const futureValue = calculateFutureValueWithStepUp(initialInvestment, annualReturn, contribution, stepAmount, stepFrequency, investmentDuration);

        document.getElementById("futureValue").textContent = futureValue.toFixed(2);
    } else {
        document.getElementById("futureValue").textContent = "Invalid input";
    }
    //Function to calculate future value with step-up contributions
function calculateFutureValueWithStepUp(initialInvestment, monthlyRate, initialContribution, stepAmount, stepFrequency, months) {
    let futureValue = initialInvestment;
    let currentContribution = initialContribution;
    
    for (let i = 1; i <= months; i++) {
        futureValue = (futureValue + currentContribution) * (1 + monthlyRate);
        if (i % stepFrequency === 0) {
            currentContribution += stepAmount;
        }
    }
    
    return futureValue;
}
}


