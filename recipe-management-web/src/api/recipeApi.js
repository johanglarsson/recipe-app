export function getRecipies() {
  return fetch("http://localhost:8080/api/v1/recipies")
    .then(handleResponse)
    .catch(handleError);
}

export function getRecipeById(id) {
  return fetch("http://localhost:8080/api/v1/recipe/" + id)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecipeById(id) {
  return fetch("http://localhost:8080/api/v1/recipe/" + id, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
    })
    .catch(handleError);
}

export function saveRecipe(recipe) {
  return fetch("http://localhost:8080/api/v1/recipe", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(recipe),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
