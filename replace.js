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
files.push('./app/page.tsx');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/text-white/g, 'text-foreground');
  content = content.replace(/bg-\[#0A0A0A\]/g, 'bg-surface');
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-surface');
  content = content.replace(/bg-\[#111\]/g, 'bg-surface-alt');
  content = content.replace(/border-\[#222\]/g, 'border-border');
  content = content.replace(/border-\[#333\]/g, 'border-border');
  content = content.replace(/bg-black/g, 'bg-background');
  content = content.replace(/text-\[#d1d1d1\]/g, 'text-foreground');
  content = content.replace(/text-zinc-500/g, 'text-muted-foreground');
  content = content.replace(/text-zinc-600/g, 'text-muted-foreground');
  content = content.replace(/text-\[#666\]/g, 'text-muted-foreground');
  fs.writeFileSync(f, content, 'utf8');
});
console.log('Replaced colors successfully.');
