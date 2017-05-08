function CalculatorView(model){
	this.model = model;
    this.resultController = '';

}

CalculatorView.prototype.drawCalculator = function(element){

	var numbers = ['1','2','3','4','5','6','7','8','9','0','.','00'];
	var operators = ['+','-','/','%','*'];
	var specialOperators = ['(',')'];
	var clearButton = 'clear';
	var resultButton = '=';
	var calContainer = calUtility.createDOMElement('div','container');

	var resultModel = new ResultTextModel();
    this.resultController = new ResultTextController(new ResultTextView(resultModel), resultModel);
    this.resultController.drawResultText(calContainer,'inputtext');


	var numContainer = calUtility.createDOMElement('div','numContainer');
	var oprContainer = calUtility.createDOMElement('div','oprContainer');

	calContainer.appendChild(numContainer);
	calContainer.appendChild(oprContainer);


	for(let i =0;i<numbers.length;i++)
	{
        let buttonController = buildButtonController();
        buttonController.drawButton(numbers[i],numContainer,'numbutton');
        this.model.addNumberButton(buttonController.model.buttonEle);
	}


    var buttonController = buildButtonController();
    buttonController.drawButton(clearButton,oprContainer,'clearButton');
    this.model.addClearButton(buttonController.model.buttonEle); 

    for(let i =0;i<operators.length;i++)
	{
        let buttonController = buildButtonController();
        buttonController.drawButton(operators[i],oprContainer,'oprbutton');
        this.model.addOperatorButton(buttonController.model.buttonEle);
	}

	for(let i =0;i<specialOperators.length;i++)
	{
		let buttonController = buildButtonController();
        buttonController.drawButton(specialOperators[i],oprContainer,'oprbutton');
        this.model.addSpecialOperatorsButton(buttonController.model.buttonEle);                             
	}	

	var buttonController = buildButtonController();
    buttonController.drawButton(resultButton,oprContainer,'resultButton');
    this.model.addResultButton(buttonController.model.buttonEle); 

	element.appendChild(calContainer);	

 	function buildButtonController(){
		let buttonModel = new ButtonModel();
		let buttonView = new ButtonView(buttonModel);
        return new ButtonController(buttonView,buttonModel);
    }

};


CalculatorView.prototype.handleClear = function(){
	this.model.clear();
	this.resultController.setValue.call(this.resultController,"0");
};


CalculatorView.prototype.handleResult = function(){
	try {
	    this.resultController.setValue(this.model.eval());
	    this.model.clear();
	    var result = this.resultController.getValue();
	    this.model.setCurrentValue(result);
	} catch(e) {
		console.log("Malformed Expression " +  this.resultController.getValue(),e);
		this.resultController.setValue("Malformed Expression");
		this.model.clear();
	}
};

CalculatorView.prototype.handleValue = function(){
	this.resultController.setValue(this.model.previousValue + this.model.operator + this.model.currentValue);
};

CalculatorView.prototype.handleOperator = function(){
	this.resultController.setValue(this.resultController.getValue() + this.model.operator);
};