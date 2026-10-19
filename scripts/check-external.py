"""Optional network check of unique exported external hyperlinks."""
import json,subprocess
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from bs4 import BeautifulSoup
urls=set()
for page in Path('out').rglob('*.html'):
 for a in BeautifulSoup(page.read_text(),'html.parser').find_all('a',href=True):
  url=a['href']
  if url.startswith(('https://','http://')) and not url.startswith('https://dedge.pro'):urls.add(url)
def check(url):
 p=subprocess.run(['curl','-LsS','--max-time','30','-o','/dev/null','-w','%{http_code}',url],capture_output=True,text=True)
 return {'url':url,'status':p.stdout,'error':p.stderr.strip()}
with ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,sorted(urls)))
Path('artifacts/external-links.json').write_text(json.dumps(results,indent=2)+'\n')
for r in results:print(r['status'],r['url'])
