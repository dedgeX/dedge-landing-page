import json,subprocess
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
assets=json.load(open('content/assets.json'))
def fetch(item):
 url,path=item;dest=Path('public'+path);dest.parent.mkdir(parents=True,exist_ok=True)
 if dest.exists(): return
 subprocess.run(['curl','-fLsS','--retry','2',url,'-o',str(dest)],check=True)
with ThreadPoolExecutor(max_workers=8) as pool:list(pool.map(fetch,assets.items()))
print('All article images downloaded')
