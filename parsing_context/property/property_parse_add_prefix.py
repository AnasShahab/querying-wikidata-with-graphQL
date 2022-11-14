with open('practise_updated.json', "w", encoding='utf8') as f1:
  with open('practise_copy.json', "r", encoding='utf8') as f2:
    for line in f2:
      line=line.replace("http://www.wikidata.org/entity/","wdt:")
      f1.write(line)

print("done")