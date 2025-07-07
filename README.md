# 🩺 Diabetes Prediction Web App

A Flask-based end to end machine learning web app that predicts the likelihood of diabetes based on user input. Deployed using **Google Cloud Run**.

## 🚀 Live Demo
🔗 [Click here to access the live app](https://diabetes-prediction-deploy-873550146471.asia-southeast1.run.app)

## 🧠 Technologies Used
- Python (EDA, Model Development)
- Flask (Backend)
- scikit-learn (ML)
- XGBoost (Model)
- Imbalanced-learn (Class imbalance)
- Pandas, NumPy, Matplotlib, Seaborn (EDA and ML Libraries)
- Google Cloud Platform (Cloud Run)
- HTML, CSS and Javascript (Frontend)

## 📂 Project Structure

```
C:.
│   .gitignore
│   app.py
│   main.py
│   README.md
│   requirements.txt
│
│
├───data
│       diabetes_prediction_dataset.csv
│
├───models
│       final_pipeline.pkl
│
├───notebooks
│       Diabetes_Prediction.ipynb
│
├───src
│       config.py
│ 
│
├───static
│   │   favicon.ico
│   │   style.css
│   │
│   └───js
│           api-handler.js
│           form-validation.js
│           main.js
│           theme-toggle.js
│           toggle-info.js
│
└───templates
        index.html
```

## 📈 How It Works

1. User provides input features such as age, BMI, blood sugar level, etc.
2. A pre-trained ML model processes the input.
3. Prediction result is returned instantly via a simple web interface.

## ⚙️ Installation (For Local Testing)

Clone the repository:

```bash
git clone https://github.com/kesavvenugopal/diabetes-predictor-app.git
cd diabetes-predictor-app
```

Create a virtual environment and activate it:

```bash
python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
python app.py
```

Then open [http://127.0.0.1:8080](http://127.0.0.1:8080) in your browser.

## 🚀 Deployment (GCP Cloud Run)

Deployed via Google Cloud Run with the following steps:
- Uploaded source code to Google Cloud Shell.
- Used `gcloud run deploy` to deploy directly from source.
- Allowed unauthenticated access.
- No Dockerfile needed; used Cloud Buildpacks.

