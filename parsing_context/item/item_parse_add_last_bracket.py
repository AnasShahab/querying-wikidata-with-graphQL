last_line = None
with open('practise.json', "w", encoding='utf8') as f1:
  with open("item_complete_list_final.json", "r", encoding = "utf-8") as f2:
    for line in f2:
        if last_line:
            f1.write(last_line)
        last_line = line
    last_line=last_line.replace(',',"")
  f1.write(last_line)
  f1.write("\n")
  f1.write("}")