NodeJSstuff
===========

Simple tool to pretty nodejs **stdout** log, extend *console.log* function.

####Known issue

If you log some thing twice in one function with same amount of logged variables.
	
```js	
function(a,b,c){
	console.log('First log', a, b, c);
	//do some code
	console.log('Second log', a, b, c);
};
```	

This code will return log results several time. Fix by changing amount of properties in ```js console.log```


#### Other intresting tools:
- [colors](https://github.com/marak/colors.js/)


