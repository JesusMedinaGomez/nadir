const archivos = import.meta.glob('../content/pies-de-semana/*.json', {eager:true,import:'default'});
export const pies = Object.values(archivos).filter(n=>n.publicado!==false).sort((a,b)=>b.numero.localeCompare(a.numero,'es'));
