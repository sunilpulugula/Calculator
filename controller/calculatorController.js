function CalculatorController(view,model){
    this.view = view;
    this.model = model;
}

CalculatorController.prototype.drawCalculator = function(element){
	this.view.drawCalculator(element);
	this.addEvents();
};


CalculatorController.prototype.addEvents = function(){
	//add events for numbers
	var numberArr = this.model.numbersButtonArray;
    for(let i=0;i<numberArr.length;i++)
    	{
            numberArr[i].addEventListener("click", ()=>{
                  this.model.setCurrentValue(numberArr[i].value);
                  this.view.handleValue();
            });
    	}

	//add events for operators

    var oprArr = this.model.operatorsButtonArray;
	for(let i=0;i<oprArr.length;i++)
    	{
            oprArr[i].addEventListener("click", ()=>{
                  this.model.setOperator(oprArr[i].value);
                  this.view.handleOperator();
            });
    	}

    // add events for special operators like (,)
    var spcOprArr = this.model.specialOperatorsButton;
	for(let i=0;i<spcOprArr.length;i++)
    	{
            spcOprArr[i].addEventListener("click", ()=>{
                  this.model.setCurrentValue(spcOprArr[i].value);
                  this.view.handleValue();
            });
    	}

	//add event to clear functionality
	var clearElement = this.model.clearButton;
	clearElement.addEventListener("click", ()=>{
        this.view.handleClear();
	});

	//add event to result functionality
    var resultElement = this.model.resultButton;
    resultElement.addEventListener("click", ()=>{
        this.view.handleResult();
    });

};

