// main.js

import { initThemeToggle } from './theme-toggle.js';
import { toggleInfo } from './toggle-info.js';
import { validateInput, validateForm } from './form-validation.js';
import { sendPredictionRequest, showPredictionResult } from './api-handler.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme toggle button
  initThemeToggle();

  const form = document.getElementById('predictionForm');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Setup info toggle button event
  const infoToggleBtn = document.getElementById('info-toggle');
  if (infoToggleBtn) {
    infoToggleBtn.addEventListener('click', toggleInfo);
  }

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form, submitBtn)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please fix errors before submitting.',
      });
      return;
    }

    // Collect input data
    const data = {
      gender: document.getElementById('gender').value.trim(),
      age: parseInt(document.getElementById('age').value),
      hypertension: parseInt(document.getElementById('hypertension').value),
      heart_disease: parseInt(document.getElementById('heart_disease').value),
      smoking_history: document.getElementById('smoking_history').value.trim(),
      bmi: parseFloat(document.getElementById('bmi').value),
      hba1c: parseFloat(document.getElementById('hba1c').value),
      glucose: parseFloat(document.getElementById('glucose').value),
    };

    try {
      // Send data to server and show prediction
      const result = await sendPredictionRequest(data);
      showPredictionResult(result);
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
    }
  });

  // Add live validation on inputs
  for (const field of ['age', 'bmi', 'hba1c', 'glucose']) {
    const input = document.getElementById(field);
    input.addEventListener('input', () => {
      validateInput(input);
      validateForm(form, submitBtn);
    });
  }

  // Initial validation disables submit button if needed
  validateForm(form, submitBtn);
});
