# babel-browser   
如何在开发环境（浏览器端）直接运行es6？es6已经发布一段时间了，现在大部分是在node.js环境运行，或者通过babel编译之后运行。babel-browser主要实现用户能够在浏览器上直接运行es6语法。    
   
   
How do you run ES6 directly in the development environment(browser)? ES6 has been around for a while now, most of it is running in the node.js environment, or running through Babel compilation. Babel-browser primarily enables users to directly run ES6 syntax on their browsers.
        
[demo](https://github.com/baixuexiyang/es6-demo.git)   
        
```  
npm install babel-browser-king  
```   
      
# how to use?     
```
<script src="https://unpkg.com/babel-browser-king@1.0.2/babel-browser.min.js"></script>   
<script>   
	require.config({   
		path: ''  //es6 root   
	});   
</script>   
<script type="text/babel">   
	let test = 1;   
</script>   
<script type="text/babel" src="test.js"></script>    
```    
    
# attention   
require或者import加载文件只能是相对地址      
script标签的type属性值只能是text/babel    
   
   
require or import can only load files relative addresses     
The type attribute value of the script tag is only text/babel  
      
