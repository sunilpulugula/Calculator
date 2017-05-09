function ResultTextController(view,model){
	this.view = view;
	this.model = model;
}

ResultTextController.prototype.drawResultText = function(container,style){
	this.view.drawResultText(container,style); 
};

ResultTextController.prototype.setValue = function(value){
	this.view.setValue(value); 
};

ResultTextController.prototype.getValue = function(){
	return this.model.resultTxtEle.value; 
};


