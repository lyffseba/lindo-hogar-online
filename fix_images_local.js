const fs = require('fs');
let file = fs.readFileSync('src/lib/mockData.ts', 'utf8');

// Replace Unsplash links with the newly generated Nano Banana Pro ones
file = file.replace(/https:\/\/images\.unsplash\.com\/photo-[^']+/, '/images/products/lho-filtro-agua.png');
file = file.replace(/https:\/\/images\.unsplash\.com\/photo-[^']+/, '/images/products/lho-sabanas-grises.png');
file = file.replace(/https:\/\/images\.unsplash\.com\/photo-[^']+/, '/images/products/lho-ollas.png');
file = file.replace(/https:\/\/images\.unsplash\.com\/photo-[^']+/, '/images/products/lho-freidora.png');

fs.writeFileSync('src/lib/mockData.ts', file);
