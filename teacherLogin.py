from flask import Flask, request, jsonify
import random
import string

app = Flask(__name__)
codes = {}

@app.route('/teacher/login', methods=['POST'])
def teacher_login():
    data = request.json
    username = data['username']
    password = data['password']
    if username == "teacher1" and password == "password":  # Replace with DB validation
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/teacher/generate_code', methods=['POST'])
def generate_code():
    code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    codes[code] = True  # Store the code as valid
    return jsonify({"code": code}), 200
