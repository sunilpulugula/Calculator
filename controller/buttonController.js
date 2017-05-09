function ButtonController(view,model){
    this.model = model;
    this.view = view;
}

ButtonController.prototype.drawButton = function(container,style){
	this.view.drawButton(container,style);
};

ButtonController.prototype.getButtonEle = function(){
	return this.model.buttonEle;
};