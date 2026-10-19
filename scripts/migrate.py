"""Offline WordPress importer. Run with the downloaded REST inventory as argument."""
import json,re,sys,hashlib,html
from pathlib import Path
from urllib.parse import urlparse,unquote
from bs4 import BeautifulSoup
posts=json.load(open(sys.argv[1])); assets={}; articles=[]
for p in posts:
 s=BeautifulSoup(p['content']['rendered'],'html.parser')
 for x in s.select('script,style,iframe,svg,.elementor-widget-table-of-contents,[data-widget_type="post-navigation.default"],[data-widget_type="tpg-grid-layout.default"]'): x.decompose()
 for x in s.find_all('h1'): x.decompose()
 for x in list(s.find_all(True)):
  if x.name=='div' and 'ql-block' in x.get('class',[]) and not x.find(['p','h2','h3','ul','ol']): x.name='p'
  if x.name in ['div','span']: x.unwrap();continue
  attrs={}
  if x.name=='a':
   href=x.get('href','');u=urlparse(href)
   if u.netloc in ['dedge.pro','www.dedge.pro']: href=u.path+('#'+u.fragment if u.fragment else '')
   if href.startswith(('https://','http://','/','#','mailto:')): attrs={'href':href}
  if x.name=='img':
   src=x.get('src','');ext=Path(unquote(urlparse(src).path)).suffix.lower()
   if ext not in ['.png','.jpg','.jpeg','.webp','.gif']:ext='.png'
   local='/images/academy/'+hashlib.sha256(src.encode()).hexdigest()[:16]+ext;assets[src]=local
   attrs={'src':local,'alt':x.get('alt') or 'Illustration from '+html.unescape(p['title']['rendered']),'loading':'lazy'}
  x.attrs=attrs
 for x in list(s.find_all(['p','h2','h3','h4'])):
  if not x.get_text(strip=True) and not x.find('img'):x.decompose()
 toc=[]
 for i,h in enumerate(s.find_all(['h2','h3','h4'])):
  if not h.get_text(strip=True):continue
  h['id']='section-'+str(i+1);toc.append({'id':h['id'],'title':h.get_text(' ',strip=True)})
 title=html.unescape(p['title']['rendered']);text=s.get_text(' ',strip=True)
 category='Wallet research' if any(w in title.lower() for w in ['wallet','insight']) else 'Copy trading' if 'trading' in title.lower() else 'Solana fundamentals'
 terms=p.get('_embedded',{}).get('wp:term',[])
 articles.append(dict(slug=urlparse(p['link']).path.strip('/'),title=title,path=urlparse(p['link']).path,description=text[:180].rsplit(' ',1)[0]+'…',category=category,sourceCategories=[t['name'] for group in terms for t in group if t.get('taxonomy')=='category'],date=p['date'][:10],modified=p['modified'][:10],minutes=max(1,round(len(text.split())/220)),html=str(s),toc=toc,source=p['link']))
Path('content/articles.json').write_text(json.dumps(articles,ensure_ascii=False,indent=2))
Path('content/assets.json').write_text(json.dumps(assets,indent=2))
print(f'{len(articles)} articles, {len(assets)} images')
