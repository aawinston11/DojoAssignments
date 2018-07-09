from flask import Flask, render_template, request, redirect, flash, session
import re, datetime

app = Flask(__name__)
app.secret_key = "seckey"

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r'.*\d.*[A-Z].*|.*[A-Z].*\d.*')
current_date = datetime.datetime.now().date()

@app.route('/')
def homepage():
  return render_template("index.html")

@app.route('/result', methods = ["POST"])
def results():
    email = request.form['email']
    first_name = request.form['fname']
    last_name = request.form['lname']
    password = request.form['password']
    pass_confirm = request.form['confirm_password']

    errors = 0

    if len(email) < 1 or len(first_name)<1 or len(last_name)<1 or len(password)<1 or len(request.form['birthday'].split('-'))<3 :
        flash("All fields are required. There cannot be any blank fields", 'error')
        errors += 1
    else:
        DOB = datetime.date(*[int(i) for i in request.form['birthday'].split('-')])
        if current_date < DOB:
            flash('Your birthday must be before today', 'error')
            errors += 1
        if not first_name.isalpha() or not last_name.isalpha():
            flash('Your name can only be letters', 'error')
            errors += 1
        if len(password)<9:
            flash('Your password should be more than 8 characters', 'error')
            errors += 1
        if pass_confirm != password:
            flash('Your password must be the same in both password fields', 'error')
            errors += 1
        if not EMAIL_REGEX.match(email):
            flash('Make sure you have entered a valid email address', 'error')
            errors += 1
        if not PASSWORD_REGEX.match(password):
            flash('Make sure your password includes 1 uppercase and 1 numeric value', 'error')
            errors += 1
    if errors == 0:
        flash('All information was entered correctly. Thank you for submitting your information')
    return redirect('/')

app.run(debug=True)