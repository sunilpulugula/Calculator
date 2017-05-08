function ResultTextView(model){
	this.model = model;
	this.textEle = '';
}

ResultTextView.prototype.drawResultText = function(container,style){
	
	this.textEle = calUtility.createDOMElement('input', style);
	this.textEle.setAttribute("type", "text");
	this.textEle.setAttribute("readonly", "readonly")
	this.model.addResultTextEle.call(this.model,this.textEle);
	
	container.appendChild(this.textEle);

};

ResultTextView.prototype.setValue = function(value){
	this.textEle.value = value;
	this.model.setValue.call(this.model,value);
};