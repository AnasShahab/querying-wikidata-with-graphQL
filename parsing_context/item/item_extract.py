import gzip

# count=0
# labelCount=0
# mydict={}
# tempList=[]
targetList=["<http://www.w3.org/2000/01/rdf-schema#label>", "@en ."]

file_writer=open("item_complete_list_raw.txt","w", encoding="utf8")

with gzip.open('latest-truthy.nt.gz','rt', encoding="utf8") as fin:    
    for line in fin:
            if all(x in line for x in targetList):
                file_writer.write(line)
                continue
file_writer.close()