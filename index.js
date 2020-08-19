
let bold=false;
let italic=false;
var underline=false;
oDoc = document.getElementById("content");

function edit(cmd, value) {
     document.execCommand(cmd, false, value); 
}
document.getElementById('bold').addEventListener('click',function(){
})
document.getElementById('italic').addEventListener('click',function(){
    edit('italic')
})
document.getElementById('undo').addEventListener('click',function(){
    edit('undo')
})
document.getElementById("content").contentEditable = "true";
content=document.getElementById("content");
content.focus=true;
