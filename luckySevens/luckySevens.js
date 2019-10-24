
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
 }
 
 function checkHighestAmount(gameMoney, maxMoney){
	if(gameMoney > maxMoney){
		return true;
	}
	else{
		return false;
	}	
 }

 function playGame(){
	var sBet = document.forms["luckySevens"]["startingBet"].value;
	
//checking input value	
	if (sBet == "" || isNaN(sBet) || sBet<=0) {
        alert("Starting bet must be more than zero.");
        return false;
    }

//variables	
	var gameMoney = sBet;
	var rolls = 0;
	var maxMoney = gameMoney;
	var maxMoneyRolls = 0;
	
//looping through play	
	while(gameMoney>0){
		rolls++;
		var diceTotal = rollDice() + rollDice();
		if(diceTotal == 7){
			gameMoney = gameMoney + 4;
			if(checkHighestAmount(gameMoney, maxMoney)){
				maxMoney = gameMoney;
				maxMoneyRolls = rolls;
			}	
		}
		else{
			gameMoney = gameMoney - 1;
		}	
	}
	
//displaying results table	
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").style.display = "none";
	document.getElementById("resetButton").style.display = "block";
	document.getElementById("sBet").innerText= sBet;
	document.getElementById("rollCount").innerText = rolls;
	document.getElementById("highestMoney").innerText = maxMoney;
	document.getElementById("rollCountHighestMoney").innerText = maxMoneyRolls;
	
	return false;
	
 }	 
 
 function resetForm(){
	document.forms["luckySevens"]["startingBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").style.display = "block";
	document.getElementById("resetButton").style.display = "none";
    document.forms["luckySevens"]["startingBet"].focus();
 }