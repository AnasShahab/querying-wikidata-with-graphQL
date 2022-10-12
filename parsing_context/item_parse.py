import json

count=0
my_dict={}

with open('item_complete_list_raw.txt', encoding='utf8') as f2:
    for line in f2:
        
        if count<1000:

            


            line=line.strip().split(" ",2) #remove new line and split line in a list of 3 strings

            line[2]=line[2].replace(" ","_").split("@") #replace spaces in key with _ and split key to remove @            
        
            line[2][0]=line[2][0].strip('"') #remove "" from key

            myKey=line[2][0]

            line[0]=line[0].strip('<>') #remove <> from value

            myValue=line[0]
            
            my_dict[myKey]=myValue

            count+=1
        else:
            break

with open('item_complete_list.json', 'w', encoding='utf-8') as f1:
   json.dump(my_dict, f1, sort_keys = True, ensure_ascii=False, indent=4)