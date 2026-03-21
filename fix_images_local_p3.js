const fs = require('fs');
let file = fs.readFileSync('src/lib/mockData.ts', 'utf8');

file = file.replace(
  /'https:\/\/images\.unsplash\.com\/photo-1519689680058-324335c77eba\?auto=format&fit=crop&q=80&w=800'/,
  "'/images/products/lho-coche-paseador.png'"
);

file = file.replace(
  /'https:\/\/images\.unsplash\.com\/photo-1556910103-1c02745aae4d\?auto=format&fit=crop&q=80&w=800'/,
  "'/images/products/lho-humificador.png'"
);

file = file.replace(
  /'https:\/\/images\.unsplash\.com\/photo-1583847268964-b28dc8f51f92\?auto=format&fit=crop&q=80&w=800'/,
  "'/images/products/lho-vajilla-red.png'"
);

file = file.replace(
  /'https:\/\/images\.unsplash\.com\/photo-1540479859555-17af45c78602\?auto=format&fit=crop&q=80&w=800'/,
  "'/images/products/lho-corral-fucsia.png'"
);

file = file.replace(
  /'https:\/\/images\.unsplash\.com\/photo-1574269909862-7e1d70bb8078\?auto=format&fit=crop&q=80&w=800'/,
  "'/images/products/lho-licuadora.png'"
);

file = file.replace(
  /'https:\/\/images\.unsplash\.com\/photo-1595428774223-ef52624120d2\?auto=format&fit=crop&q=80&w=800'/,
  "'/images/products/lho-mesa-planchar.png'"
);

fs.writeFileSync('src/lib/mockData.ts', file);
