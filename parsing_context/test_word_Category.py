from calendar import c


count=0
with open('item/item_complete_list_raw.txt', 'r') as f1:
    for line in f1:
        if line.count("Category"):
            count+=1
        else:
            continue

print(count)

