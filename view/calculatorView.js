function CalculatorView(model){
	this.model = model;
	this.resultController = '';
	this.numbersButtonArray = [];
    this.operatorsButtonArray = [];
    this.specialOperatorsButton = [];
    this.clearButton = "";
    this.resultButton="";
}

//draw calculator 
CalculatorView.prototype.drawCalculator = function(element){

	var numbers = ['1','2','3','4','5','6','7','8','9','0','.','00'];
	var operators = ['+','-','/','%','*'];
	var specialOperators = ['(',')'];
	var clearButton = 'clear';
	var resultButton = '=';
	var headerContainer = calUtility.createDOMElement('div','header');
	var calContainer = calUtility.createDOMElement('div','container');

    //adding header div
    headerContainer.innerHTML = "Calculator";
	element.appendChild(headerContainer);

    // creating resultController which deals with result text box.
	var resultModel = new ResultTextModel();
    this.resultController = new ResultTextController(new ResultTextView(resultModel), resultModel);
    this.resultController.drawResultText(calContainer,'inputtext');
    this.resultController.setValue("0");

	var numContainer = calUtility.createDOMElement('div','numContainer');
	var oprContainer = calUtility.createDOMElement('div','oprContainer');

	calContainer.appendChild(numContainer);
	calContainer.appendChild(oprContainer);

    drawNumberButtons.call(this);
	drawClearButton.call(this);
	drawOperatorButtons.call(this);
	drawSpecialOpButtons.call(this);
	drawResultButton.call(this);



	element.appendChild(calContainer);	

	function drawNumberButtons(){
    	for(let i =0;i<numbers.length;i++)
	    {
        	let buttonController = buildButtonController(numbers[i]);
        	buttonController.drawButton(numContainer,'numbutton');
        	this.numbersButtonArray.push(buttonController.getButtonEle());
	    }
    }

    function drawOperatorButtons(){
    	for(let i =0;i<operators.length;i++)
		{
        	let buttonController = buildButtonController(operators[i]);
        	buttonController.drawButton(oprContainer,'oprbutton');
        	this.operatorsButtonArray.push(buttonController.getButtonEle());
		}
    }

    function drawSpecialOpButtons(){
    	for(let i =0;i<specialOperators.length;i++)
		{
			let buttonController = buildButtonController(specialOperators[i]);
       		buttonController.drawButton(oprContainer,'oprbutton');
        	this.operatorsButtonArray.push(buttonController.getButtonEle());                            
		}
    }

    function drawClearButton(){
    	var buttonController = buildButtonController(clearButton);
    	buttonController.drawButton(oprContainer,'clearButton');
    	this.clearButton = buttonController.getButtonEle();
    }

    function drawResultButton(){
    	var buttonController = buildButtonController(resultButton);
    	buttonController.drawButton(oprContainer,'resultButton');
    	this.resultButton = buttonController.getButtonEle();
    }

 	function buildButtonController(value){
		let buttonModel = new ButtonModel();
		let buttonView = new ButtonView(buttonModel,value);
        return new ButtonController(buttonView,buttonModel);
    }   

};



//adding events to all buttons
CalculatorView.prototype.addNumEvents = function(callback){
	this.numbersButtonArray.forEach(callback);
	this.specialOperatorsButton.forEach(callback);
};

CalculatorView.prototype.addOpEvents = function(callback){
	this.operatorsButtonArray.forEach(callback);
};

CalculatorView.prototype.addClearEvent = function(callback){
	callback(this.clearButton);
};

CalculatorView.prototype.addResultEvent = function(callback){
	callback(this.resultButton);
};




//add funcationality to buttons when actions are performed on buttons.
CalculatorView.prototype.handleClear = function(){
	this.model.clear();
	this.resultController.setValue("0");
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

