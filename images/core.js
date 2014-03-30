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
 */
var TS = TS || {};
// 확장 클래스
TS.dom = TS.dom || {};
TS.key = TS.key || {};
TS.setting = TS.setting || {};
TS.util = TS.util || {};
TS.module = TS.module || {};
//TS.data = TS.data || {};
TS.ajax = TS.ajax || {};
TS.app = TS.app || {};

TS.dom = function(selecter){
	var _selecter = selecter;
	var _findItem = function(){
		//return this.dom.getElementsByClassName(this._selecter);
		console.log('here is the findItem inside;;;');
		return this;
	}
	var _itemHide = function(){
		console.log('실행중');
		console.log(_selecter);
		return this;
	}
	var _itemShow = function(){
		return this;
	}

	return {
		findItem : _findItem,
		itemHide : _itemHide,
		itemShow : _itemShow
	}
}
// key class for Tistory
TS.key = {
	findKey : function(){
		//_urlPaatien();
		var _categoryName = documents.getElementsByClassName("categoryName")[0];
		var _keyArr = _categoryName.split('/');

	},
	keyData : function(){

	},
	urlPatten : function(){
		//var _url = documents.
	}
}

//setting for basic
TS.setting = function(setData){
	if (setData != null || setData != ''){
		//eavl();
	}
}



// ajax calling
TS.ajax = {
	data : [],
	call : function(url, dataType, callback){
		console.log('its ajax call------------------')
		console.log('console.log make url');

		return callback != null ? callback(this.data[url]) : null;
	},
	passing : function (url, data){
		var _passingData = {
			type : '',
			article : '',
			paging : '',
			list : ''
		}
		this.data[url] = _passingData;
	}
}

TS.app.locator = function(){

}

TS.app.subCategory = function(){

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