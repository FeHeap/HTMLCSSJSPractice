//tag_tagged.js
function escapeHtml(str) {
    if(!str) { return ''; }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

function e(templates, ...values) {
    let result = '';
    for(let i = 0, len = templates.length; i < len; i++){
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
}

let name = '<"Fe" & \'Luder\'>';
console.log(e`早安, ${name}先生!`);
//早安, &lt;&quot;Fe&quot; &amp; &#39;Luder&#39;&gt;先生!


//scope_chain
var y = 'Global';
function outerFunc() {
    var y = 'Local Outer';
    
    function innerFunc() {
        var z = 'Local Inner';
        console.log(z); //Local Inner
        console.log(y); //Local Outer
        //console.log(x); //x is not defined
    }
    innerFunc();
}

outerFunc();


//closure
function closure(init) {
    var counter = init;
    
    return function() {
        return ++counter;
    }
}

var myClosure_1 = closure(1);
console.log(myClosure_1());     //2
console.log(myClosure_1());     //3
console.log(myClosure_1());     //4
var myClosure_2 = closure(100);
console.log(myClosure_2());     //101
console.log(myClosure_2());     //102
console.log(myClosure_2());     //103