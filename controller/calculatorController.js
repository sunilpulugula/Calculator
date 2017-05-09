function CalculatorController(view,model){
    this.view = view;
    this.model = model;
}

CalculatorController.prototype.drawCalculator = function(element){
	this.view.drawCalculator(element);
	this.addEvents();
};


CalculatorController.prototype.addEvents = function(){

	//adding events to numbers
    this.view.addNumEvents((item) => {
    	          item.addEventListener("click", (event)=>{
                  this.model.setCurrentValue(event.target.value);
                  this.view.handleValue();
            })});

    //adding events to operators
    this.view.addOpEvents((item)=>{
    	          item.addEventListener("click", (event)=>{
                  this.model.setOperator(event.target.value);
                  this.view.handleOperator();
            })});

   	//adding events to clear task
    this.view.addClearEvent((item)=>{
    	          item.addEventListener("click", (event)=>{
                  this.model.clear(event.target.value);
                  this.view.handleClear();
            })});

    //adding events to result task
    this.view.addResultEvent((item)=>{
    	          item.addEventListener("click", (event)=>{
                  this.view.handleResult();
            })});
};

