def findChar(list, char):
    arr = []
    for i in list:
        if i.find(char) >=0:
            arr.append(i)
    print arr

# word_list = ['hello','world','my','name','is','Anna']
# char = 'a'

# findChar(word_list,char)