//Functions for calculating future value
function carLoanPayment (a1, a2, a3) {
  let carFutureValue = a1 * (1 + a2) ** a3
    return carFutureValue
}
function homeLoanPayment (b1, b2, b3) {
  let homeFutureValue = b1 * (1 + b2) ** b3
    return homeFutureValue
}
//Main program that prompts loan type
let loanType = prompt("Do you want to finance a car or a home? Type 'stop' at the first prompt to end the program.")
let decision = loanType.toLowerCase()

//Loop that takes future value and translates it into a monthly basis, or stops the program
while (decision == "car" || decision == "home" || decision == "stop") {
  
  if (decision == "car") {
    let carPrincipal = Number(prompt("What is your principal? (no dollar sign or commas)"))
    let carRate = Number(prompt("What is your rate? (enter as a decimal i.e. 10% as 0.10)"))
    let carPeriod = Number(prompt("What is your period in months?"))
    let carPercent = carRate * 100
    var monthlyCarPayment = (carLoan(carPrincipal, carRate, carPeriod)) / carPeriod
    var carPayment = monthlyCarPayment.toFixed(2);
      alert(`A car payment for $${carPrincipal} over ${carPeriod} months at ${carPercent}% interest would have a monthy payment of $${carPayment}.`)
}
  if (decision == "home") {
    let homePrincipal = Number(prompt("What is your principal? (no dollar sign or commas)"))
    let homeRate = Number(prompt("What is your rate? (enter as a decimal i.e. 10% as 0.10)"))
    let homePeriod = Number(prompt("What is your period in months? (please choose from either 15 or 30 months)"))
    let homePercent = homeRate * 100
    var monthlyHomePayment = (homeLoan(homePrincipal, homeRate, homePeriod)) / homePeriod
    var homePayment = monthlyHomePayment.toFixed(2);
      alert(`A car payment for $${homePrincipal} over ${homePeriod} months at ${homePercent}% interest would have a monthy payment of $${homePayment}.`)
}
  if (decision == "stop") {
  alert("Stopping calculations...")
  break;
  }
}

  
  