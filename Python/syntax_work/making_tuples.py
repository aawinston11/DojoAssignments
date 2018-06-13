my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}
def make_tup(dict):
    new_tup=[]
    for key, val in dict.iteritems():
        new_tup.append((key,val))
    return new_tup

print make_tup(my_dict)

# def making_tuples(dict):
#     return dict.items()

# print making_tuples(my_dict)
            