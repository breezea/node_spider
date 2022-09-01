import json

with open(r'D:\mycode\node\spider\axios_header\header.txt') as f:
    a = f.readlines()
    data = {}
    for item in a:
        item = item.strip()
        currentItem = item.split(':')
        data[currentItem[0]] = currentItem[1]
    # print(data) 
    data2 = json.dumps(data, sort_keys=True, indent=4, separators=(',', ': '))
    print(data2)

