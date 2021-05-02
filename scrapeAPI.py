# script for querying the vantage point api for the top 50 stocks in every sector 

import json
import time 
import requests
import config

# import files from frontend 
# import <database models.py > 

# ------------
# to query 
# ------------

bad_devices = []

# returns where a device is updated by checking against current version
def queryScraperAPI(url, device_vers):
    """
    url would have to have https://
    """
    api_url = 'http://api.scrapestack.com/scrape?access_key='+config.api_key+'&url='+ str(url)
    response = requests.get(api_url)
    if response: #status_code == 200:
        #print("status code: " + str(response.status_code))
        # parse json response here 
        json_file = response.json()

        if str(device_vers) == str(json_file["version"]) :
            return True
        else: 
            return False

    else: # status_code == 404:
        print(url + ' not Found. status code: ' + str(response.status_code))
        return 0 

# api for recalls and known vulnerabilities
# openFDA 
# returns true if not recalled
def queryRecallAPI(device_name):
    # format name
    device_name = device_name.strip().replace(" ", "+")
    api_url = 'https://api.fda.gov/device/recall.json?search=device_name:'+device_name
    response = requests.get(api_url)
    if response: #status_code == 200:
        #print("status code: " + str(response.status_code))
        # parse json response here 
        json_file = response.json()
        return json_file["results"][0]["device_name"] 
    return True

# parses given device info from input file
def parseInput():
    # take in input file given 
# extract url and version
# pass url,version into queryScrapeAPI 
# if file is a json 
# open file for read 
# pop each line 
# for all devices :
    is_updated_version = queryScraperAPI("https://raw.githubusercontent.com/CycloneDX/sbom-examples/master/dropwizard-1.3.15/bom.json", 1)
    is_not_recalled = queryRecallAPI("asasasaunicorn")
    is_good = is_updated_version and is_not_recalled
    print(is_good)
    # if (is_good == False) :
        # add to bad_devices

# create and return a file that contains all bad devices
def createOutputFile():


# ------------
# main 
# ------------

def main() : 
    """
    some descriptive info here 
    """
    parseInput()
    # createOutputFile() - send to frontend


main()









# ------- 

# ------------
# adds an object into an established database
# ------------

'''
def create_object(st):
    # iterate through each stock json object

    stock_sym = st["Symbol"]
    # check for existing item 
    q = db.session.query(stocks).filter(stocks.sym == stock_sym).all()
    if len(q) == 0:
        stock_name = st['Name']
        country = st["Country"]

        stock_index = st["Exchange"]
        stock_sect = st["Sector"]
        stock_indu = st["Industry"]

        # new stock object
        newStock = stocks( sym = stock_sym, name = stock_name, country = country, sector = stock_sect, industry = stock_indu, index = stock_index)
        db.session.add(newStock)
        print("Stock: " + stock_sym + " added")

    # make a catalog of all of the sectors and the corresponding industries
        q = db.session.query(sectors).filter(sectors.name == stock_sect).all()
        if len(q) == 0:
            # new sector object
            newSector = sectors( name = stock_sect)
            db.session.add(newSector)
            print("Sector: " + stock_sect + " added")

        # checking industry
        q = db.session.query(industries).filter(industries.name == stock_indu).all()
        if len(q) == 0: 
            # new sector object
            newIndustry = industries( name = stock_indu, sector_name = stock_sect)
            db.session.add(newIndustry)
            print("Industry: " + stock_indu + " added")

    # commit the session to my DB.
    db.session.commit()
'''

'''
def populatestocksDB(stock_list):
    # loop through each stock 
    # query
    # save relevant info to json/dict
    # wait 15 seconds

    for stock in stock_list:
        print("querying "+ stock)
        stock_json = queryAlphaVantage(stock)
        if stock_json != 0 :
            print("creating instance of "+ stock)
            create_object(stock_json)
            print("waiting 15 seconds")
        time.sleep(15)
    print("Done")
'''

#print("starting query")

#populatestocksDB(stock_small)

# loop through each stock 
# query
# save relevant info to json/dict
# wait 15 seconds

'''
for sto in stock:
    print("querying "+ sto)
    stock_json = queryAlphaVantage(sto)
    if stock_json != 0 :
        if len(stock_json) > 0 :
            print("creating instance of "+ sto)
            create_object(stock_json)
        else: 
            print("no instance of "+ sto + " from query")
        print("waiting 15 seconds")
    time.sleep(15)

print("Done")

'''

'''
# json dump 
#   input: stock_id / stock symbol
#   returns: [status code 200] json  
@app.route('/stocks/company_overview_json/<str: stock_id>/')
def companyOverviewJson(stock_id):
    # check if it is zero for failed response
    return json.dumps( queryCompanyOverview(stock_id) )

'''

'''
# might not need 
# process the json? 
#   input: stock_id / stock symbol
#   returns: [status code 200] json 
@app.route('/stocks/company_overview/<str: stock_id>/')

def companyOverview(stock_id):
    stock_json = queryCompanyOverview(stock_id)
    # check if it is zero for failed response
    #return render_template()
'''