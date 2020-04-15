import csv, json

def csvParse(csvfile):
    
    # Open the CSV
    f = open( csvfile, 'r' )
    
    # Change each fieldname to the appropriate field name, if required.
    reader = csv.DictReader( f, fieldnames = ("Have you recently experienced sudden loss of your sense of smell and/or taste?","0-12 years","13-19 years","20-39 years","40-59 years","60-79 years","80+ years","Please tell use where you live"))
    
    mydata = {"children":[]}
    ages = {'0-12 years':[],'13-19 years':[],'20-39 years':[],'40-59 years':[],'60-79 years':[],'80+ years':[]}
    
    for row in reader:
        if row["0-12 years"] is not '':
            if row["13-19 years"] is not '': continue
            entry = {
                "children":[{ "name":row["Have you recently experienced sudden loss of your sense of smell and/or taste?"], 'clr': 'colors[2]', 'children':''} ],
                "name": row["Please tell use where you live"],
                'clr': 'colors[1]'
            }
            ages['0-12 years'].append(entry)
        elif row['13-19 years'] is not '':
            entry = {
                "children":[{ "name":row["Have you recently experienced sudden loss of your sense of smell and/or taste?"], 'clr': 'colors[2]', 'children':''} ],
                "name": row["Please tell use where you live"],
                'clr': 'colors[1]'
                }
            ages['13-19 years'].append(entry)
        elif row['20-39 years'] is not '':
            entry = {
                "children":[{ "name":row["Have you recently experienced sudden loss of your sense of smell and/or taste?"], 'clr': 'colors[2]', 'children':''} ],
                "name": row["Please tell use where you live"],
                'clr': 'colors[1]'
                }
            ages['20-39 years'].append(entry)
        elif row['40-59 years'] is not '':
            entry = {
                "children":[{ "name":row["Have you recently experienced sudden loss of your sense of smell and/or taste?"], 'clr': 'colors[2]', 'children':''} ],
                "name": row["Please tell use where you live"],
                'clr': 'colors[1]'
                }
            ages['40-59 years'].append(entry)
        elif row['60-79 years'] is not '':
            entry = {
                "children":[{ "name":row["Have you recently experienced sudden loss of your sense of smell and/or taste?"], 'clr': 'colors[2]', 'children':''} ],
                "name": row["Please tell use where you live"],
                'clr': 'colors[1]'
                }
            ages['60-79 years'].append(entry)
        elif row['80+ years'] is not '':
            entry = {
                "children":[{ "name":row["Have you recently experienced sudden loss of your sense of smell and/or taste?"], 'clr': 'colors[2]', 'children':''} ],
                "name": row["Please tell use where you live"],
                'clr': 'colors[1]'
                }
            ages['80+ years'].append(entry)

            
    for i, j in ages.items():
        entry = {
            "children":j,
            "clr":'colors[5]',
            'name': i
        }
        mydata["children"].append(entry)

    print(mydata)
    
    # Parse the CSV into JSON
    out = json.dumps(mydata, indent=4)
    
    # Save the JSON
    f = open( 'data.json', 'w')
    f.write(out)
    
    
csvParse('sample.csv')
