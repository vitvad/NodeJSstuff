var log = console.log;
console.log = function(){
	var reg1 = /(console.log\()(.*)(\);?)/g;
	var reg2 = /(console.log\()(.*)(\);?)/;
	var codeStr = arguments.callee.caller.toString();
	var found = codeStr.match(reg1);

	var args = Array.prototype.slice.call(arguments, 0);

	if(found){
		var flag = false;
		found.forEach(function(item){
			var names = item.match(reg2)[2].split(',');
			if(args.length === names.length){
				flag = true;
				for (var i = 0; i < args.length; i++){
					if(i === 0){
						log.call(console, '\x1B[33m' +"-------------------- " + args[i] + " --------------------");
					}else{
						log.call(console, '\x1B[39m' + names[i] , "= " ,args[i]);
					};
					if(i != args.length - 1 && i !== 0) log("\x1B[39m-----");
				};
				log("");
				log("");
			}
		});
		if(!flag) log.apply(console, args);
	}else{
		log.apply(console, args);
	}
}