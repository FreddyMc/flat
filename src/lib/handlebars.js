const handlebars  = require('express-handlebars')();
var loadTags =function (node) {
    return ""
        const tag= node.innerText.split(" ");
        const stamp = tag[0];
        const color = node.style.color;
        const selectedText = tag.slice(2).reduce((a,c)=>a+" "+c);
        addNewTag(stamp, null, color, selectedText, document.getElementById('line' + stamp)); 
  }
exports.module = loadTags;
