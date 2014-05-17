
/* 
 * 기본 prototype 정의
 *
 */
 // overloding
if (typeof (Object.create) === "function"){
	Object.create = function(o){
		var F = function(){};
		F.prototype = o;
		return new F();
	}
}

//prototype add
Function.prototype.method = function (name, func){
	this.prototype[name] = func;
	return this;
}

// property copy from aother Object to this Object;
Object.prototype.carryProperty = function(obj){
	//if(typeof (obj) != "Object") return;
	if(typeof (obj) === "Function") {
		for(p in obj){
			if(!this.hasOwnProperty(p)){
				this[p] = obj[p];
			}
		}
		return this;
	} else {
		return ;
	}
}

(function(window, document){
	
	var loadDomScope = function(name){

		var dom = $("#" + name).html();

		// make title list for sreach dom HTML;
	};


	var $extend = function(name, protoObj){
		var temp ;
		temp.prototype = protoObj;
		return temp;
	};

	var $export = function(name){
		console.log(name);
		console.log(this);
	};


	var _resgisterName = "";
	var $register = function(name, init){
		console.log("test for test");
		if(!this[name]){
			if(typeof init === "function")
				this[name] = init();
			else
				this[name] = {};
			_resgisterName = name;
		}
		return this;
	};

	$register("write", null);
	write = function(obj, name){
		var varName = name || _resgisterName;
		if(typeof obj === "object"){
			var targetObj = this[varName];
			for (p in obj){
				targetObj[p] = obj[p];
			}
		}
	};

	var init = function(){
		return {
			$export : $export,
			$extend : $extend
			//$register : $register,
			//write : write
		}
	};

	
	$register("TS2", init).write({
		test : "test2222",
		making : "123123",
		end : "end function",
		fnTest : function(){
			console.log("end console.log");
		}
	});

	$register("main");
})(window, document);
console.log("<---testing staring---->");
console.log(window.TS2.test);
console.log(window.TS2.fnTest());
console.log("<---testing end---->");
console.log(window.main.$export("test222"));
console.log(window.TS2.$export("TS2"));