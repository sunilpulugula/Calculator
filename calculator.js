function Calculator (element) {
	if(element == undefined)
		{
			console.log('Failed to find conatiner');
			throw new Error("Please provide valid dom container");
		    return ;
		}
    

    var calModel = new CalculatorModel();
    var calView = new CalculatorView(calModel);
    var calController = new CalculatorController(calView,calModel);
    calController.drawCalculator(element);
    
}