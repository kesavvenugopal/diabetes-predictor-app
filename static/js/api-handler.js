// api-handler.js

// Sends input data to backend '/predict' API and returns the JSON response
export async function sendPredictionRequest(data) {
  const response = await fetch('/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
}

// Shows prediction result or error alert using SweetAlert2
export function showPredictionResult(result) {
  if (result.prediction !== undefined) {
    Swal.fire({
      icon: result.prediction === 1 ? 'warning' : 'success',
      title: result.prediction === 1 ? 'High Risk of Diabetes!' : 'Low Risk of Diabetes',
      text: 'This is just a model prediction. Please consult a doctor for accurate results.',
    });
  } else if (result.error) {
    Swal.fire('Invalid Input', result.error, 'error');
  } else {
    Swal.fire('Error', 'Unexpected response.', 'error');
  }
}
