from flask import Flask, render_template, jsonify
from flask.ext.triangle import Triangle
import random

app = Flask(__name__, static_path='/static')
Triangle(app)


@app.route('/')
def index():
    return render_template('index.html')

# Return a json file of data for the unordered list.
@app.route('/data')
def data():
    data = {'value_1':'foo','value_2':'bar','value_3':'spam'}
    return jsonify(**data)

# Return a json file of x and y data for a series plot.
@app.route('/plot_data')
def plot_data():
    data = {'x_vals':range(1,6),
            'y_vals':[random.random()*10 for i in range(5)]}
    return jsonify(**data)

if __name__ == '__main__':
    app.run(port=5000)
