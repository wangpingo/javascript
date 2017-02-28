var util=require('util');
var EventEmitter=require('events').EventEmitter;
function MyEmitter() {
    EventEmitter.call(this);
}
util.inherits(MyEmitter,EventEmitter);
var em=new MyEmitter();
em.on('hellow',function (data) {
   console.log('收到事件hellow数据：',data);
});
em.emit('hellow','EventEmitter传递消息真方便');
