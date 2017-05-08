function ResultTextController(view,model){
	this.view = view;
	this.model = model;
}

ResultTextController.prototype.drawResultText = function(container,style){
	this.view.drawResultText.call(this.view,container,style); 
};

ResultTextController.prototype.setValue = function(value){
	console.log("set value " + this.model.resultTxtEle.value);
	this.view.setValue.call(this.view,value); 
};

ResultTextController.prototype.getValue = function(){
	return this.model.resultTxtEle.value; 
};


