from flask import Flask, render_template, jsonify
from flask.ext.triangle import Triangle


app = Flask(__name__, static_path='/static')
Triangle(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    data = {'value_1':'foo','value_2':'bar','value_3':'spam'}
    return jsonify(**data)

if __name__ == '__main__':
    app.run(port=5016)
