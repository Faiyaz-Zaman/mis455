function connect() {
    var searchTerm = document.getElementById("searchBox").value;

    document.getElementById("searchBox").value = "";

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
    .then(res => res.json())
    .then(data=>show(data.meals))
}

function show(data) {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    var displayCount = Math.min(data.length, 5);
    for (var i = 0; i < displayCount; i++) {

        var mealDiv = document.createElement("div");
        mealDiv.classList.add("innerStyle");
        mealDiv.innerHTML = `
        <img src="${data[i].strMealThumb}"  class="meal-image"><br>
        Meal ID: <b>${data[i].idMeal}</b><br>
        Meal Name: <b>${data[i].strMeal}</b><br>
        Meal Title: <b>${data[i].strMeal}</b><br>
       
        Cooking Instructions: ${data[i].strInstructions}<br><br>
        `;

        // Append the meal div to the results container
        resultsContainer.appendChild(mealDiv);
    }

    // If there are more than 5 results, add a "SHOW ALL" button
    if (data.length > 5) {
        var showAllButton = document.createElement("button");
        showAllButton.textContent = "SHOW ALL";
        showAllButton.classList.add("btn", "btn-secondary");
        showAllButton.addEventListener("click", () => showAllResults(data));
        resultsContainer.appendChild(showAllButton);
    }
}

function showAllResults(data) {
    // Clear previous content
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    // Display all results
    for (var i = 0; i < data.length; i++) {
        var mealDiv = document.createElement("div");
        mealDiv.classList.add("innerStyle");

        // Add meal details to the div
        mealDiv.innerHTML = `    
           <img src="${data[i].strMealThumb}"  class="meal-image"><br>
            Meal ID: <b>${data[i].idMeal}</b><br>
            Meal Name: <b>${data[i].strMeal}</b><br>
            Meal Title: <b>${data[i].strMeal}</b><br>
           
            Cooking Instructions: ${data[i].strInstructions}<br><br>
        `;

        // Append the meal div to the results container
        resultsContainer.appendChild(mealDiv);
    }
}
