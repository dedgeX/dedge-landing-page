"""Targeted migration corrections; retain source paths and substantive instructional text."""
import json,re
from bs4 import BeautifulSoup
from pathlib import Path
p=json.load(open('content/articles.json'));log=[]
replacements={
 'guarantees your exit is confirmed immediately, even in congested blocks':'can improve the chance of timely confirmation, but does not guarantee execution in congested blocks',
 '100% copyable from a bot standpoint':'more practical to evaluate for copying, without guaranteeing matching execution',
 'Skip 90% of irrelevant wallets.':'Narrow the wallets you review using explicit criteria.',
 'Follow wallets that already proved reliability.':'Review historical consistency without assuming future reliability.',
 '(up to 5 in the free plan)':'(subject to the current plan limits shown in the bot)',
 'Removes bias':'Adds another perspective',
 'AI evaluates wallets based on data, not hype.':'AI summarizes the available data, but can still make errors or reflect bias.',
 'dEdge Wallet Finder helps you discover the traders who are consistently profitable.':'dEdge Wallet Finder helps you discover wallets with historical trading results to investigate.',
 'Every millisecond gained means tighter slippage, cleaner entries, and more profitable exits.':'Lower latency can affect execution, but does not ensure a better price or a profitable exit.',
 'guaranteed access, even during peak chaos':'priority access under congestion, without guaranteed transaction inclusion',
 'It’s like having access to the list of runners who always finish on the podium.':'Treat the list as a starting point for research, not a prediction of future winners.',
 'who are catching pumps before the crowd':'with historical activity worth examining',
 'the ones that are consistently profitable':'wallets with historical performance to investigate',
 'Copy their trades instantly with Trojan Bot.':'Evaluate copying with Trojan Bot, a separate execution tool.',
}
for a in p:
 s=a['html']
 for old,new in replacements.items():
  if old in s:s=s.replace(old,new);log.append({'path':a['path'],'before':old,'after':new})
 # Correct wording even where formatting splits a sentence.
 s=re.sub(r'100% copyable', 'potentially copyable',s)
 s=s.replace('http://Pump.Fun','https://pump.fun')
 soup=BeautifulSoup(s,'html.parser')
 for node in soup.find_all(['p','li']):
  old=node.get_text(' ',strip=True);new=None
  if 'top 1%' in old:new='Wallet Finder, Curated Wallets and Filtered Wallets help you identify wallets to investigate using historical on-chain metrics. These are research leads, not a ranking that predicts future returns.'
  elif old=='dEdge Wallet Finder helps you discover the traders who are consistently profitable.':new='dEdge Wallet Finder helps you discover wallets with historical trading results to investigate.'
  elif 'the ones that are consistently profitable' in old:new='Think of Wallet Finder as a starting point for research: a way to discover Solana wallets and inspect their historical trading activity.'
  elif old=='Spot trading patterns of consistently profitable traders.':new='Explore trading patterns and their historical outcomes.'
  if new:
   node.clear();node.append(new);log.append({'path':a['path'],'before':old,'after':new})
 for node in list(soup.find_all('a')):
  if not node.get('href'):node.unwrap()
 a['html']=str(soup)
 s=a['html']
 if a['slug']=='wallet-finder-discover-the-most-profitable-traders-on-solana':a['title']='Wallet Finder: Discover Wallets to Research on Solana'
 if a['slug']=='wallet-finder-discover-the-most-profitable-traders-on-solana-2':a['title']='Curated Wallets: A Starting Point for Wallet Research'
 if a['slug']=='curated-wallets-data-backed-shortcuts-to-profitable-traders':a['title']='Tracking Wallets: Why It Matters and How to Add a Wallet'
 if a['slug']=='ia-insights-how-dedge-is-changing-the-analysis-game':a['title']='AI Insights: Understanding a Wallet Analysis'
 text=BeautifulSoup(s,'html.parser').get_text(' ',strip=True);a['description']=text[:180].rsplit(' ',1)[0]+'…'
Path('content/articles.json').write_text(json.dumps(p,ensure_ascii=False,indent=2)+'\n')
Path('content/editorial-changes.json').write_text(json.dumps(log,ensure_ascii=False,indent=2)+'\n')
