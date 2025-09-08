from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/personality', methods=['POST'])
def save_personality():
    data = request.get_json()
    print(f"Received personality data: {data}")
    return jsonify({"message": "Personality data saved successfully", "data": data})

if __name__ == '__main__':
    app.run(debug=True, port=5000)