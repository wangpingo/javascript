/**
 * Created by 35031 on 2016/12/5.
 */
//<input type="text" id="myText"   value="input text">

function Obj(){this.value="对象！";}
var value="global 变量";
function Fun1(){console.log(this.value);}
Fun1();   //global 变量
Fun1.call(window);  //global 变量
Fun1.call(document.getElementById('myText'));  //input text
Fun1.call(new Obj());   //对象！
