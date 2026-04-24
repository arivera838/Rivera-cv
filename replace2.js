const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./components');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/bg-\[#00f0ff\]/ig, 'bg-primary');
  content = content.replace(/text-\[#00f0ff\]/ig, 'text-primary');
  content = content.replace(/border-\[#00f0ff\]/ig, 'border-primary');
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Replaced primary variants successfully.');
