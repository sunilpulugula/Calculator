function CalculatorModel() {
   this.currentValue = "";
   this.previousValue = "";
   this.operator = "";
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
