/**
 * Created by 35031 on 2017/1/2.
 */
'use strict';
let html='</div>'+
        '<span>hello</span>'+
        '</div>';
let name='gqk';
let qq='350316275';
function log() {
    return 'good';
}
let html2=`
        <div>
        <ul><li>${name==='gbk'? 'ok':'no'}</li><li>${qq}</li><li>${log() }</li></ul>
        </div>
    `;
console.log(html2);