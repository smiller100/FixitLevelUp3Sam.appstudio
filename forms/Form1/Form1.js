//Functions calculating the future value
function carLoanPayment (a1, a2, a3) {
  let carFutureValue = a1 * (1 + a2) ** a3
    return carFutureValue
}
function homeLoanPayment (b1, b2, b3) {
  let homeFutureValue = b1 * (1 + b2) ** b3
    return homeFutureValue
}
//Asks the user the loan type
let loanType = prompt("Are you financing a car or a home? Type 'stop' at the first prompt to end the program.")
let userDecision = loanType.toLowerCase()

//Loop that takes future value and translates it into a monthly or yearly basis (depending on loan type), or stops the program
while (userDecision == "car" || userDecision == "home" || userDecision == "stop") {
  
  if (userDecision == "car") {
    let carPrincipal = Number(prompt("What is your principal? (no dollar sign or commas)"))
    let carRate = Number(prompt("What is your interest rate? (percentage in decimal form)"))
    let carPeriod = Number(prompt("What is your loan period in months?"))
    let carPercent = carRate * 100
    var monthlyCarPayment = (carLoanPayment(carPrincipal, carRate, carPeriod)) / carPeriod
    var carPayment = monthlyCarPayment.toFixed(2);
      alert(`A car loan for $${carPrincipal} over ${carPeriod} months at ${carPercent}% interest would have a monthy payment of $${carPayment}.`)
}
 if (userDecision == "home") {
    let homePrincipal = Number(prompt("What is your principal? (no dollar sign or commas)"))
    let homeRate = Number(prompt("What is your interest rate? (percentage in decimal form)"))
    let homePeriod = Number(prompt("What is your loan period in years? (either 15 or 30 years)"))
    let homePercent = homeRate * 100
    var monthlyHomePayment = (homeLoan(homePrincipal, homeRate, homePeriod)) / homePeriod
    var homePayment = monthlyHomePayment.toFixed(2);
      alert(`A home loan for $${homePrincipal} over ${homePeriod} years at ${homePercent}% interest would have a monthy payment of $${homePayment}.`)
}
  if (userDecision == "stop") {
  alert("Program has been ended.")
  break;
  }
}

  
  