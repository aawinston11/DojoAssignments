from flask import Flask, render_template, request, redirect, flash, session

app = Flask(__name__)
app.secret_key = "seckey"

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/result', methods = ["POST"])
def results():
  comment = request.form['comment']
  name = request.form['name']
  location = request.form['location']
  language = request.form['language']

  if len(name) < 1:
    flash("Name cannot be empty")    
  
  if len(comment)>120:
    flash("Comment cannot be longer than 120 characters")    

  return render_template("results.html", name=name, location=location, language=language, comment=comment)

app.run(debug=True)