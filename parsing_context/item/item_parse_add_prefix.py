with open('practise.json', "w", encoding='utf8') as f1:
  with open('item_complete_list.json', "r", encoding='utf8') as f2:
    for line in f2:
      line=line.replace("http://www.wikidata.org/entity/","wd:")
      f1.write(line)

print("done")