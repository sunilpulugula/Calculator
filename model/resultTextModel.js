function ResultTextModel(){
	this.resultTxtEle = '';
}

ResultTextModel.prototype.addResultTextEle = function(element){
	this.resultTxtEle = element;
};

ResultTextModel.prototype.setValue = function(value){
	this.resultTxtEle.value = value;
};