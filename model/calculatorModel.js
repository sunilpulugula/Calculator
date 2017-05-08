function CalculatorModel() {
   this.currentValue = "";
   this.previousValue = "";
   this.operator = "";
   this.numbersButtonArray = [];
   this.operatorsButtonArray = [];
   this.specialOperatorsButton = [];
   this.clearButton = "";
   this.resultButton="";
}

CalculatorModel.prototype.setCurrentValue = function(value){
    this.currentValue += value;
};

CalculatorModel.prototype.setOperator = function(operator){
	this.previousValue = this.previousValue + this.operator + this.currentValue;
	this.operator=operator;
	this.currentValue="";
};

CalculatorModel.prototype.clear = function(){
   this.currentValue = "";
   this.previousValue = "";
   this.operator = "";
};

CalculatorModel.prototype.eval = function(){
	return eval(this.previousValue + this.operator + this.currentValue);
};

CalculatorModel.prototype.addNumberButton = function(buttonElement){
	return this.numbersButtonArray.push(buttonElement);
};

CalculatorModel.prototype.addOperatorButton = function(operatorElement){
	return this.operatorsButtonArray.push(operatorElement);
};

CalculatorModel.prototype.addSpecialOperatorsButton = function(operatorElement){
	return this.specialOperatorsButton.push(operatorElement);
};

CalculatorModel.prototype.addClearButton = function(clearButton){
	this.clearButton = clearButton;
};

CalculatorModel.prototype.addResultButton = function(resultButton){
	this.resultButton = resultButton;
};

