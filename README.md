# babel-browser   
如何在开发环境（浏览器端）直接运行es6？es6已经发布一段时间了，现在大部分是在node.js环境运行，或者通过babel编译之后运行。babel-browser主要实现用户能够在浏览器上直接运行es6语法。    
   
   
How do you run ES6 directly in the development environment(browser)? ES6 has been around for a while now, most of it is running in the node.js environment, or running through Babel compilation. Babel-browser primarily enables users to directly run ES6 syntax on their browsers.
        
      
```  
npm install babel-browser-king  
```   
      
# how to use?     
```
<script src="babel-browser.min.js"></script>   
<script>   
	require.config({   
		path: ''  //es6 root   
	});   
</script>   
```    
    
# attention   
require或者import加载文件只能是相对地址      
   
   
require or import can only load files relative addresses   
   
