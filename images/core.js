var tt = '1';

+function test(){
	console.log(tt);
	tt="2222";
	console.log(tt);
	console.log('----');	
	var ttt = "444"
	console.log(ttt + "test lll");
}();
console.log('+구문 밖 >> '+tt);
//console.log(ttt + " <<<< ttt <<<<");

(function(){
	console.log(tt +"익명함수");
	tt = "3333";
	console.log(tt + "체인지 후에 ");
})();
console.log(tt + " <<<<<< 익명함수 밖에서");

function $$(val){
	console.log ('sssssss-------sssssss');

	console.log(val);
}

/**
 * @author Axsusia
 * @date 2014.03.30
 * @param selecter
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


// 확장 클래스
TS.key = TS.key || {};
TS.setting = TS.setting || {};
TS.util = TS.util || {};
TS.module = TS.module || {};
//TS.data = TS.data || {};
TS.ajax = TS.ajax || {};
TS.app = TS.app || {};

// key class for Tistory
TS.key = {
	findKey : function(){
		_urlPaatien();
		var _categoryName = documents.getElementsByClassName("categoryName")[0];
		var _keyArr = _categoryName.split('/');

	},
	keyData : function(){

	},
	urlPatten : function(){
		//var _url = documents.
	}
}

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