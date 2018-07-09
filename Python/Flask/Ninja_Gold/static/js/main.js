var p = document.createElement("p");
p.style.cssText = 'color: {{each.color}}'
var newLog = document.createTextNode("{{ each.text }}");
p.appendChild(newLog);
var list = document.getElementById("log");
list.insertBefore(p, list.childNodes[0]);