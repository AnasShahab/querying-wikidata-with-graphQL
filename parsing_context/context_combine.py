filenames = ['property/property_complete_list_addLastComma_remLastBracket.json', 'item/item_complete_list_remLastComma_addLastBracket.json']

with open('context_final.json', "w", encoding='utf8') as f1:
  for file in filenames:
    with open(file, encoding='utf8') as f2:
      for line in f2:
        f1.write(line)
    f1.write("\n")


print("done")

# import sys
# import os

# with open("item.txt", "r+", encoding = "utf-8") as file:

#     # Move the pointer (similar to a cursor in a text editor) to the end of the file
#     file.seek(0, os.SEEK_END)

#     # This code means the following code skips the very last character in the file -
#     # i.e. in the case the last line is null we delete the last line
#     # and the penultimate one
#     pos = file.tell() - 1

#     # Read each character in the file one at a time from the penultimate
#     # character going backwards, searching for a newline character
#     # If we find a new line, exit the search
#     while pos > 0 and file.read(1) != "\n":
#         pos -= 1
#         file.seek(pos, os.SEEK_SET)

#     # So long as we're not at the start of the file, delete all the characters ahead
#     # of this position
#     if pos > 0:
#         file.seek(pos, os.SEEK_SET)
#         file.truncate()


