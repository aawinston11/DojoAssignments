from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def home():
  return render_template("index.html")

@app.route('/ninja')
def ninja():
    return render_template("ninja.html")

@app.route('/ninja/<color>')
def turtles(color):
    if (color == 'blue' or color == 'red' or color == 'orange' or color == 'purple'):
        return render_template("turtles.html", color=color)
    else:
        return render_template("april.html")        

app.run(debug=True)