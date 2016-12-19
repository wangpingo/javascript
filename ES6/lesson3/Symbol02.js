/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
// let getName=2;
const User=require('./User');
let getName=Symbol('getName');

let user=new User();
user.print();
user[getName]();