const fs = require('fs');

let page = fs.readFileSync('src/app/catalog/[category]/page.tsx', 'utf8');

// Update generateStaticParams
page = page.replace(
  /return \[\.\.\.categories\.map\(\(c\) => \(\{ category: c \}\)\), \{ category: 'ofertas' \}, \{ category: 'bebes' \}, \{ category: 'dormitorio' \}];/g,
  "return [...categories.map((c) => ({ category: c })), { category: 'ofertas' }, { category: 'bebes' }, { category: 'dormitorio' }, { category: 'salas' }, { category: 'comedores' }, { category: 'decoracion' }];"
);

// Update allowed categories
page = page.replace(
  /!\['bebes', 'ofertas', 'dormitorio'\]\.includes\(normalizedCategory\)/g,
  "!['bebes', 'ofertas', 'dormitorio', 'salas', 'comedores', 'decoracion', 'cocina', 'lavanderia'].includes(normalizedCategory)"
);

fs.writeFileSync('src/app/catalog/[category]/page.tsx', page);
