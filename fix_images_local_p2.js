const fs = require('fs');
let file = fs.readFileSync('src/lib/mockData.ts', 'utf8');

// Replace Unsplash links with the newly generated Nano Banana Pro ones
file = file.replace(/https:\/\/images\.unsplash\.com\/photo-1519689680058-324335c77eba[^']+/, '/images/products/lho-coche-paseador.png');
file = file.replace(/https:\/\/images\.unsplash\.com\/photo-1556910103-1c02745aae4d[^']+/, '/images/products/lho-humificador.png');
file = file.replace(/https:\/\/images\.unsplash\.com\/photo-1583847268964-b28dc8f51f92[^']+'/, "'/images/products/lho-vajilla-red.png'"); // this one might be tricky because we reused the room image ID twice.
// Wait, I reused the image ID "1583847268964-b28dc8f51f92" for two different products in mockData!
