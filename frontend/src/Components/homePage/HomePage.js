import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Navigate, redirect } from 'react-router';



const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('loggedInUser')))

    useEffect(() => {
        console.log(recipes)
    }, [recipes]);




    // useEffect(() => {
    //     if (!JSON.parse(localStorage.getItem('loggedInUser'))){
    //         Navigate('/')
    //     }
    //     else{
    //         // end
    //     }
    // }, []);

    function glucose(num) {


        let key = {
            min: 0,
            max: 0
        };
        if (num < 70) {
            key.min = 5;
            key.max = 15;
        }
        else if (num > 125) {
            key.min = 0;
            key.max = 3;
        }
        else {
            key.min = 3;
            key.max = 5
        } return key
    }

    function searchRecipes(e) {
        e.preventDefault();
        const searchInput = document.getElementById("recipes__search__value").value;
        const key = glucose(searchInput);
        const apiKey = "f7173e8545ff4df988b3e04ebda34d21";
        const endpoint = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&minCarbs=${key.min}&maxCarbs=${key.max}&number=12`;

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                //   displayResults(data);
                setRecipes(data)


            })
            .catch(error => {
                console.error("Error fetching recipes:", error);
            });
    }

    function displayResults(recipes) {
        const resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML = "";

        recipes.forEach(recipe => {
            const resultElement = document.createElement("div");
            resultElement.classList.add("result");

            const imageElement = document.createElement("img");
            imageElement.src = recipe.image;

            const titleElement = document.createElement("h3");
            // Create a link to a Google search for the recipe title
            const googleSearchLink = document.createElement("a");
            googleSearchLink.textContent = recipe.title;
            googleSearchLink.href = `https://www.google.com/search?q=${encodeURIComponent(recipe.title)}`;
            googleSearchLink.target = "_blank"; // Open link in a new tab

            const detailsElement = document.createElement("p");
            detailsElement.textContent = `Calories: ${recipe.calories} | Protein: ${recipe.protein} | Fat: ${recipe.fat} | Carbs: ${recipe.carbs}`;

            titleElement.appendChild(googleSearchLink);

            resultElement.appendChild(imageElement);
            resultElement.appendChild(titleElement);
            resultElement.appendChild(detailsElement);

            resultsContainer.appendChild(resultElement);
        });
    }
    return (
        <>
            {/* Header  */}
            <Header />

            {/* Search Form  */}
            <form className="d-flex w-25 justify-content-center align-center m-auto mt-5" >
                <input className="form-control me-2" id="recipes__search__value" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-warning" onClick={(e) => searchRecipes(e)}>Search</button>
            </form>

            {/* All Recipes  */}


            <div id="resultsContainer"></div>

            <div id="all_recipes_results">

                <div className="container mt-5 align-center">


                    {recipes.map((recipe) => {
                        return (
                            <>
                                <div class="card mx-2 my-2 d-inline-block" style={{ width: "18rem" }}>
                                    <img class="card-img-top" src={recipe.image} alt="Card image cap" />
                                    <div class="card-body">
                                        <a class="card-title" target='_blank' href={`https://www.google.com/search?q=${recipe.title}`}>{recipe.title}</a>
                                        <p class="card-text">Calories: {recipe.calories} | Protein: {recipe.protein} | Fat: {recipe.fat
                                        } | Carbs: {recipe.carbs}</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>


            </div>

        </>
    )
}

export default HomePage
