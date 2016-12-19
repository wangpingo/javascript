/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
let name=Symbol.for('name');
let name2=Symbol.for('name');
console.log(name===name2);
console.log(Symbol.keyFor(name2));