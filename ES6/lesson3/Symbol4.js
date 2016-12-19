/**
 * Created by 35031 on 2016/12/19.
 */
'use strict';
class UserGroup{
    constructor(users){
        //json {name:xxx}

        this.users=users;
    }
    [Symbol.iterator](){
        let i=0;
        let self=this;
        const names=Object.keys(this.users);
        const length=names.length;
        //iterator
        return {
            next:function () {
                let name=names[i++];
                let qq=self.users[name];
                return {value: {name,qq},done:i>length}
            }
        }
    }
}
let group=new UserGroup({'aaa':'1111','eee':'2222'});
// let i=0;
for (let user of group){
    console.log(user)
}
// let  iterator= group[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());