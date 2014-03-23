function test(){
	
}


function $$(val){
	console.log ('sssssss-------sssssss');

	console.log(val);
}
/*
function $T(val){
	console.log ('sssssss-------sssssss');

	console.log(val);
}
*/



var TS = TS || function(selecter){

	if(selecter != null && selecter != ''){
		if(typeof selecter == 'object'){

		}else if(typeof selecter == 'Array'){
			
		}else{
			selecter = null;
		}
	}

	var _doc = document;
	var _item = _doc.getElementsByClassName("item-");

	for(var j=0 ;j < _item.length; j++){
		console.log(j + ' <<<< num');
	}


	console.log('=====test=====');
	console.log(_item);
	console.log('=====test=====');

};


TS.util.findAllClass = function (node, className, tag){
	//var doc = documents;
	//var root = doc.getElementsByTag(tag==null?'*':tag);
	//var elements = root.ge
}




TS.util.getElementsByClassName = function(className, tag, elm){
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}	
	}
	return returnElements;
}

 

 $T = TS;