/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
const User=require('./User');
// let getName=Symbol('getName');
let getName=2;
let user=new User();
user.print();
user[getName]();