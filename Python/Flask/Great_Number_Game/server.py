from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = "seckey"

@app.route('/')
def home():
    if 'correctnum' not in session:
        session['correctnum'] = random.randint(0,101)
    if 'guess' not in session:
        session['guess'] = 0
    return render_template("index.html", )

@app.route('/guess', methods=["POST"])
def guess():
    session['guess'] = int(request.form['num'])
    
    if session['guess'] == session['correctnum']:
        session['result'] = 'match'
    elif session['guess'] < session['correctnum']:
        session['result'] = 'toolow'
    elif session['guess'] > session['correctnum']:
        session['result'] = 'toohigh'
    return redirect('/')

@app.route('/again')
def reset():
    session['correctnum'] = random.randint(0,101)
    session['guess'] = 0
    return redirect('/')

app.run(debug=True)