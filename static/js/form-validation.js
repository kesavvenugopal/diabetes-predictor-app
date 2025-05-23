// form-validation.js

// Validation rules for input fields with min, max, and display name
export const validationRules = {
  age: { min: 1, max: 80, name: 'Age' },
  bmi: { min: 15, max: 38, name: 'BMI' },
  hba1c: { min: 3.5, max: 8.0, name: 'HbA1c Level' },
  glucose: { min: 80, max: 240, name: 'Blood Glucose Level' },
};

// Show error message next to input and highlight input border in red
export function showError(input, message) {
  let errorEl = input.nextElementSibling;
  if (!errorEl || !errorEl.classList.contains('error-message')) {
    errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.style.color = 'red';
    errorEl.style.fontSize = '0.9em';
    errorEl.style.marginTop = '4px';
    input.parentNode.insertBefore(errorEl, input.nextSibling);
  }
  errorEl.textContent = message;
  input.style.borderColor = 'red';
}

// Clear the error message and reset input border color
export function clearError(input) {
  const errorEl = input.nextElementSibling;
  if (errorEl && errorEl.classList.contains('error-message')) {
    errorEl.textContent = '';
    input.style.borderColor = '';
  }
}

// Validate single input based on rules, show errors if invalid
export function validateInput(input) {
  const val = input.value.trim();
  const rule = validationRules[input.id];
  if (!rule) return true;

  if (!val) {
    showError(input, `${rule.name} is required.`);
    return false;
  }

  const num = parseFloat(val);
  if (isNaN(num)) {
    showError(input, `${rule.name} must be a number.`);
    return false;
  }

  if (num < rule.min || num > rule.max) {
    showError(input, `${rule.name} must be between ${rule.min} and ${rule.max}.`);
    return false;
  }

  clearError(input);
  return true;
}

// Validate all form inputs and toggle submit button state accordingly
export function validateForm(form, submitBtn) {
  let isValid = true;
  for (const field in validationRules) {
    const input = document.getElementById(field);
    if (!validateInput(input)) {
      isValid = false;
    }
  }
  if (submitBtn) {
    submitBtn.disabled = !isValid;
  }
  return isValid;
}
