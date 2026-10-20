// Taxonomía editorial orientativa: distintas tradiciones clasifican ciertos géneros de modo distinto.
export const generos = [
  {familia:'Periodismo', descripcion:'Informar, interpretar y opinar', grupos:[
    {nombre:'Información', nombres:['Noticia','Reportaje informativo','Entrevista informativa']},
    {nombre:'Interpretación', nombres:['Crónica','Reportaje interpretativo','Entrevista de profundidad']},
    {nombre:'Opinión', nombres:['Columna','Artículo de opinión','Editorial','Crítica periodística']}
  ]},
  {familia:'Literatura', descripcion:'Narrar, imaginar y crear', grupos:[
    {nombre:'Narrativa', nombres:['Cuento','Relato','Microficción','Novela']},
    {nombre:'Poesía', nombres:['Poema','Poema en prosa']},
    {nombre:'Dramaturgia', nombres:['Obra teatral','Monólogo dramático']}
  ]},
  {familia:'Ensayo y crítica', descripcion:'Explorar una idea o dialogar con una obra', grupos:[
    {nombre:'Ensayo', nombres:['Ensayo','Ensayo personal','Ensayo filosófico','Ensayo de divulgación']},
    {nombre:'Crítica cultural', nombres:['Reseña','Crítica','Comentario de obra']},
    {nombre:'Investigación y análisis', nombres:['Artículo de fondo']}
  ]},
  {familia:'Escrituras breves', descripcion:'Ideas, fragmentos y anotaciones', grupos:[
    {nombre:'Apuntes y fragmentos', nombres:['Apunte','Fragmento','Aforismo','Pie de semana']},
    {nombre:'Ficción breve', nombres:['Minificción','Prosa breve']}
  ]}
];
export const familiaDe = genero => generos.find(g=>g.grupos.some(s=>s.nombres.includes(genero)))?.familia || 'Otras';
const archivos = import.meta.glob('../content/publicaciones/*.json', { eager:true, import:'default' });
export const publicaciones = Object.values(archivos).sort((a,b)=>(a.orden??99)-(b.orden??99));
