from flask import Flask
import json

app = Flask(__name__)

@app.route('/foo')
def hello():
    bar = ['joe', 2, 'ruby']
    return json.dumps(bar), 201