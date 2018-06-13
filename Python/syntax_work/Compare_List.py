def compareList(lista, listb):
    compare = 0
    if (len(lista) == len(listb)):
        for x in range (0, len(lista)):
            if lista[x]==listb[x]:
                compare += 1
        if compare==len(lista):
            print "The lists are the same"
        else:
            print "The lists are not the same"
    else:
        print "The lists are not the same"       

# list_one = [1,2,5,6,2]
# list_two = [1,2,5,6,2]

# list_1 = [1,2,5,6,5]
# list_2 = [1,2,5,6,5]

# list_o = [1,2,5,6,5,16]
# list_t = [1,2,5,6,5]

# list_a = ['celery','carrots','bread','milk']
# list_b = ['celery','carrots','bread','cream']

# compareList(list_one, list_two)
# compareList(list_1, list_2)
# compareList(list_a, list_b)
# compareList(list_o, list_t)