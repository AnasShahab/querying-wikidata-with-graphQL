from string import printable
from bs4 import BeautifulSoup
import json

# f1=open("example.html", "r")
# f2=open("output.txt", "a", encoding="utf8")

# def write_to_file(data):
#     f2.write(data)   


# with open("example.html", "r", encoding="utf8") as f:
#     soup = BeautifulSoup(f, "html.parser")
#     for link in soup.select('a[href]'):
#         if 'Property' in link['href']:
#             if link.text.startswith('P'):
#                 print(link.text)
                # write_to_file(link.text)

# f2.close()
my_dict={}

with open("input_property_parse.html", "r", encoding="utf8") as f1:
    soup = BeautifulSoup(f1, "html.parser")
    # for link in soup.find_all('tr td a', {"title":True}):
    for link in soup.select('tr td a[title]'):
        # print(type(link.td))
        if 'Property' in link['title']:
            my_key=link.parent.previous_sibling.string
            # print(link.parent.previous_sibling.string, end=" ")
            my_value=link.string
            # print(link.string, end="\n")
            my_dict[my_key]=my_value
    # data=soup.find_all('tr.td')
    # print(data)
    print(my_dict)

with open('output_property_parse.json', 'w', encoding='utf-8') as f2:
    json.dump(my_dict, f2, ensure_ascii=False, indent=4)