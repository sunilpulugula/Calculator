function ButtonController(view,model){
    this.model = model;
    this.view = view;
}

ButtonController.prototype.drawButton = function(value,container,style){
	this.view.drawButton(value,container,style);
};

ButtonController.prototype.getButtonEle = function(){
	this.model.buttonEle;
};