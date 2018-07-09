from flask import Flask, render_template, request, redirect, session
import random, datetime

app = Flask(__name__)
app.secret_key = "seckey"

@app.route('/')
def home():
    if 'gold' not in session:
        session['gold'] = 0
    if 'runninglog' not in session:
        session['runninglog'] = []
    return render_template("index.html")

@app.route('/process_gold', methods=["POST"])
def process_gold():    
    if request.form['location'] == 'farm':
        earnings = random.randint(10,21)
        session['gold'] += earnings
        session['runninglog'].append("Earned " + str(earnings) + " gold from the farm! " + datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p"))
    elif request.form['location'] == 'cave':
        earnings = random.randint(5,11)
        session['gold'] += earnings
        session['runninglog'].append("Earned " + str(earnings) + " gold from the cave! " + datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p"))
    elif request.form['location'] == 'house':
        earnings = random.randint(2,6)
        session['gold'] += earnings
        session['runninglog'].append("Earned " + str(earnings) + " gold from the house! " + datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p"))
    elif request.form['location'] == 'casino':
        earnings = random.randint(-50,51)
        session['gold'] += earnings
        if earnings > 0:
            session['runninglog'].append("Entered a casino and won " + str(earnings) + " gold! Congrats! " + datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p"))
        elif earnings < 0:
            session['runninglog'].append("Entered a casino and lost " + str(earnings) + " gold! Ouch! " + datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p"))
        else:
            session['runninglog'].append("Entered a casino broke even... walk away while you can!! " + datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p"))

    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)