from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simple in-memory storage for personality profiles
personality_profiles = []

@app.route('/api/personality', methods=['POST'])
def save_personality():
    data = request.get_json()
    data['id'] = len(personality_profiles) + 1  # Simple ID assignment
    personality_profiles.append(data)
    print(f"Saved personality profile: {data}")
    return jsonify({"message": "Personality data saved successfully", "id": data['id']})

@app.route('/api/personality', methods=['GET'])
def get_personalities():
    return jsonify({"profiles": personality_profiles})

if __name__ == '__main__':
    app.run(debug=True, port=5000)