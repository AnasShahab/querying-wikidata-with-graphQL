import json

count=0

with open('item_complete_list.json', 'w', encoding='utf-8') as f1:
    #f1.write('{\n' )
    with open('item_complete_list_raw.txt', encoding='utf8') as f2:
        for line in f2:
            
            # if count<100:

                line=line.strip().split(" ",2) #remove new line and split line in a list of 3 strings

                line[2]=line[2].replace(" ","_").split("@") #replace spaces in key with _ and split key to remove @            

                myKey=line[2][0]

                line[0]=line[0].strip('<>') #remove <> from value

                myValue="\"{0}\"".format(line[0])

                f1.write('    %s: %s,\n' % (myKey, myValue))

                count+=1
            # else:
            #     break
