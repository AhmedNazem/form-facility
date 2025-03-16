// API functions for fetching form data and submitting form data

export async function fetchFormData() {
  try {
    const response = await fetch(
      "https://simpleapplicablesolutions.pythonanywhere.com/tourist/guide/api/tourist/facility/form-data/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching form data:", error);
    throw error;
  }
}

export async function submitFormData(formData) {
  try {
    const response = await fetch(
      "https://simpleapplicablesolutions.pythonanywhere.com/tourist/guide/api/tourist/facility/p1/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(
        `API error: ${response.status} - ${JSON.stringify(errorData)}`
      );
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
