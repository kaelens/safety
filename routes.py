# routes.py 
# last edited: 04/21/2021

import os
from flask import Flask, render_template, request, redirect, url_for, jsonify, send_from_directory
#from create_db import app, db, create_tables, stocks, sectors, indices, industries # database 
import random
import requests
import json

app = Flask(__name__, static_folder="./assets", template_folder="./src/pages")

###########################################
# pages 
###########################################

# home page
@app.route('/')
@app.route('/home/')
def homePage():
    return render_template("Home.js")

###########################################

# about page
@app.route('/about/')
def aboutPage():
    return render_template("About.js")

###########################################

# contact page
@app.route('/contact/')
def contactPage():
    return render_template("Contact.js")

###########################################

# form page
@app.route('/form/')
def formPage():
    return render_template("Form.js")

###########################################

if __name__ == '__main__':
    #app.debug = True
    #app.run(host = '0.0.0.0', port = 5000)
    app.run(host = 'localhost', port = 5000,debug=True)

