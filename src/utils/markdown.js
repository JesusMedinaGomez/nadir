import MarkdownIt from 'markdown-it';

// Markdown estructurado. HTML escrito a mano se escapa para proteger a los lectores.
const md = new MarkdownIt({html:false,linkify:true,breaks:false,typographer:true});
const originalLinkOpen=md.renderer.rules.link_open || ((tokens,i,options,env,self)=>self.renderToken(tokens,i,options));
md.renderer.rules.link_open=(tokens,i,options,env,self)=>{
  const token=tokens[i];
  const href=token.attrGet('href') || '';
  if (/^https?:\/\//i.test(href)) { token.attrSet('target','_blank');token.attrSet('rel','noopener noreferrer'); }
  return originalLinkOpen(tokens,i,options,env,self);
};
const originalImage=md.renderer.rules.image || ((tokens,i,options,env,self)=>self.renderToken(tokens,i,options));
md.renderer.rules.image=(tokens,i,options,env,self)=>{
  const token=tokens[i];
  const src=token.attrGet('src') || '';
  if(src.startsWith('/media/')) {
    const base=import.meta.env.BASE_URL.replace(/\/?$/,'/');
    token.attrSet('src',base+src.replace(/^\/+/,''));
  }
  token.attrSet('loading','lazy');
  token.attrSet('decoding','async');
  return originalImage(tokens,i,options,env,self);
};
export function renderMarkdown(source='') { return md.render(String(source ?? '')); }
