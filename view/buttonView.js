function ButtonView(model,value)
{
	this.model = model;
	this.value = value;
}

ButtonView.prototype.drawButton = function(container,style){
	
	var btn = createButton(this.value,style);
	container.append(btn);
	this.model.setButtonEle(btn);

	function createButton(value,style) {
		var btn = calUtility.createDOMElement('input',style);
		btn.setAttribute("type", "button");
		btn.setAttribute("value",value);
		return btn;
	}
};