# imports
from flask import Flask, request, jsonify, render_template
import joblib
from src.config import MODELS_DIR
import pandas as pd
import warnings
warnings.filterwarnings("ignore")

app = Flask(__name__)

# Importing the pickled pipeline model
model = joblib.load(MODELS_DIR / 'final_pipeline.pkl')

# Defining Routes
# Home Route
@app.route('/')
def home():
    return render_template('index.html')

# Predict Route
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No JSON received'}), 400

    try:
        # Extract inputs from json passed
        input_df = pd.DataFrame([{
            "gender": data['gender'],
            "age": float(data['age']),
            "hypertension": int(data['hypertension']),
            "heart_disease": int(data['heart_disease']),
            "smoking_history": data['smoking_history'],
            "bmi": float(data['bmi']),
            "HbA1c_level": float(data['hba1c']),
            "blood_glucose_level": float(data['glucose'])
        }])
        
        # Predicting with the inputs received
        prediction = model.predict(input_df)[0]
        return jsonify({'prediction': int(prediction)})
    
    # Catching errors
    except KeyError as e:
        return jsonify({'error': f'Missing input: {str(e)}'}), 400

    except (ValueError, TypeError) as e:
        return jsonify({'error': f'Invalid input data: {str(e)}'}), 400

    except Exception as e:
        return jsonify({'error': f'Prediction failed: {e}'}), 500

if __name__ == '__main__':
    app.run(debug=False)
