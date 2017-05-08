function ButtonView(model)
{
	this.model = model;
}

ButtonView.prototype.drawButton = function(value,container,style){
	
	var btn = createButton(value,style);
	container.append(btn);

	this.model.setButtonEle(btn);

	function createButton(value,style) {
				var btn = calUtility.createDOMElement('input',style);
				btn.setAttribute("type", "button");
				btn.setAttribute("value",value);
				return btn;
	}
};