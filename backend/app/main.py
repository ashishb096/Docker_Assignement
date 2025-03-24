from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')

    return jsonify({'message': f'Name: {name}, Email: {email} received!'}), 200

if __name__ ==  '__main__':
    app.run(host='0.0.0.0', port=5000)