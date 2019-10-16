# Edamam Micro-Service [![Build Status](https://travis-ci.org/tayjames/edamam_microservice.svg?branch=master)](https://travis-ci.org/tayjames/edamam_microservice)

Edamam Micro-Service is an extension built to focus on creating an independent micro-service that accompanies [Quanitified Self](https://github.com/tayjames/quantified_self), created by [Tay DeHerrera-Jimenez](https://github.com/tayjames) and [Paul Schlattmann](https://github.com/pschlatt). Edamam Micro-Service stores recipe information which is retrieved from [Edamam's API service](https://developer.edamam.com/edamam-recipe-api). Take a look below to see the endpoints you can access and examples of successful requests and responses. Our deployed application can be found [here](https://tranquil-everglades-51925.herokuapp.com/).

## Endpoints
```
/api/v1/recipes/food_search?q=SPECIFIC-FOOD
/api/v1/recipes/calorie_search?q=SPECIFIED-RANGE
/api/v1/recipes/serving_search?q=SPECIFIC-NUMBER
/api/v1/recipes/sort_ingredients?q=SPECIFIC-FOOD
/api/v1/recipes/average_calories?q=SPECIFIC-FOOD
```
## Example Requests and Responses

```
GET /api/v1/recipes/food_search?q=yam


[
    {
        "foodType": "yam",
        "recipe": "Pounded Yam (Fufu)",
        "recipeUrl": "http://www.pbs.org/food/recipes/pounded-yam-fufu/",
        "servings": 2,
        "ingredients": 2,
        "calories": 354,
        "prepTime": 32
    },
    {
        "foodType": "yam",
        "recipe": "Yam and Plantain Scoop",
        "recipeUrl": "https://www.epicurious.com/recipes/food/views/mashed-yam-and-plantain",
        "servings": 6,
        "ingredients": 5,
        "calories": 995.1869966000002,
        "prepTime": 0
    },
    {
        "foodType": "yam",
        "recipe": "Yam Cupcakes",
        "recipeUrl": "https://food52.com/recipes/7735-yam-cupcakes",
        "servings": 12,
        "ingredients": 18,
        "calories": 3137.0685,
        "prepTime": 169
    },
    {
        "foodType": "yam",
        "recipe": "Spicy Carrot and Yam Soup",
        "recipeUrl": "http://zesterdaily.com/cooking/respect-the-ingredients-no-matter-the-menu/",
        "servings": 6,
        "ingredients": 9,
        "calories": 1060.1300993795703,
        "prepTime": 43
    },
    {
        "foodType": "yam",
        "recipe": "Pork Rib and Mountain Yam Soup",
        "recipeUrl": "http://redcook.net/2013/03/05/strengthening-kidney-with-mountain-yam-and-fox-nuts/",
        "servings": 6,
        "ingredients": 10,
        "calories": 1247.7713426235941,
        "prepTime": 179
    },
    {
        "foodType": "yam",
        "recipe": "Roasted Yam Halves",
        "recipeUrl": "http://www.marthastewart.com/317337/roasted-yam-halves",
        "servings": 4,
        "ingredients": 5,
        "calories": 815.074677100071,
        "prepTime": 0
    },
    {
        "foodType": "yam",
        "recipe": "Yam And Turnip Galettes",
        "recipeUrl": "http://www.latartinegourmande.com/2008/12/21/yam-turnip-galettes-gluten-free/",
        "servings": 10,
        "ingredients": 10,
        "calories": 659.3346596432972,
        "prepTime": 0
    },
    {
        "foodType": "yam",
        "recipe": "Parsnip, Yam, and Watercress Chowder",
        "recipeUrl": "http://www.bonappetit.com/recipe/parsnip-yam-and-watercress-chowder",
        "servings": 4,
        "ingredients": 10,
        "calories": 1536.69125,
        "prepTime": 55
    },
    {
        "foodType": "yam",
        "recipe": "Yam Purée",
        "recipeUrl": "http://www.cookstr.com/recipes/yam-pureacutee",
        "servings": 10,
        "ingredients": 6,
        "calories": 2357.0992774922,
        "prepTime": 120
    },
    {
        "foodType": "yam",
        "recipe": "Roasted Yam and Radicchio Sandwiches Recipe",
        "recipeUrl": "http://www.seriouseats.com/recipes/2012/09/roasted-yam-and-radicchio-sandwiches.html",
        "servings": 10,
        "ingredients": 15,
        "calories": 2495.9112123187765,
        "prepTime": 45
    }
]
```

```
GET /api/v1/recipes/calorie_search?q=0-500
[
    {
        "id": 1,
        "foodType": "strawberry",
        "recipe": "Strawberry Daiquiri",
        "recipeUrl": "http://www.bbc.co.uk/food/recipes/strawberrydiaquiri_86315",
        "servings": 1,
        "ingredients": 4,
        "calories": 173.48261121446,
        "prepTime": 15,
        "createdAt": "2019-10-16T20:17:04.995Z",
        "updatedAt": "2019-10-16T20:17:04.995Z"
    },
    {
        "id": 3,
        "foodType": "strawberry",
        "recipe": "Strawberry Refreshment",
        "recipeUrl": "https://food52.com/recipes/5679-strawberry-refreshment",
        "servings": 1,
        "ingredients": 6,
        "calories": 221.781680710417,
        "prepTime": 36,
        "createdAt": "2019-10-16T20:17:04.995Z",
        "updatedAt": "2019-10-16T20:17:04.995Z"
    },
    {
        "id": 7,
        "foodType": "strawberry",
        "recipe": "Strawberry Lemonade Smash",
        "recipeUrl": "https://www.epicurious.com/recipes/food/views/strawberry-lemonade-smash-51155530",
        "servings": 2,
        "ingredients": 5,
        "calories": 230.666575797917,
        "prepTime": 0,
        "createdAt": "2019-10-16T20:17:04.995Z",
        "updatedAt": "2019-10-16T20:17:04.995Z"
    },
    {
        "id": 23,
        "foodType": "tuna",
        "recipe": "Quick Tuna and White Beans",
        "recipeUrl": "https://www.marthastewart.com/1156009/quick-tuna-and-white-beans",
        "servings": 2,
        "ingredients": 6,
        "calories": 89.8963586612909,
        "prepTime": 0,
        "createdAt": "2019-10-16T20:46:49.954Z",
        "updatedAt": "2019-10-16T20:46:49.954Z"
    },
    {
        "id": 49,
        "foodType": "Pineapple",
        "recipe": "Pineapple Raita",
        "recipeUrl": "http://www.thekitchn.com/pineapple-raita-165492",
        "servings": 2,
        "ingredients": 5,
        "calories": 310.67684275,
        "prepTime": 0,
        "createdAt": "2019-10-16T20:52:41.324Z",
        "updatedAt": "2019-10-16T20:52:41.324Z"
    },
    {
        "id": 50,
        "foodType": "Pineapple",
        "recipe": "Pineapple Boat",
        "recipeUrl": "http://www.cookingchanneltv.com/recipes/laura-calder/pineapple-boats.html",
        "servings": 2,
        "ingredients": 1,
        "calories": 452.5,
        "prepTime": 13,
        "createdAt": "2019-10-16T20:52:41.324Z",
        "updatedAt": "2019-10-16T20:52:41.324Z"
    }
]
```

```
GET /api/v1/serving_search?q=4

 [  
   {
        "id": 6,
        "foodType": "strawberry",
        "recipe": "Strawberry Shake",
        "recipeUrl": "http://www.marthastewart.com/319109/strawberry-shake",
        "servings": 4,
        "ingredients": 3,
        "calories": 695.409332375,
        "prepTime": 0,
        "createdAt": "2019-10-16T20:17:04.995Z",
        "updatedAt": "2019-10-16T20:17:04.995Z"
    },
    {
        "id": 42,
        "foodType": "Coconut",
        "recipe": "Coconut Rice",
        "recipeUrl": "http://herbivoracious.com/2009/03/coconut-rice-recipe.html",
        "servings": 4,
        "ingredients": 4,
        "calories": 2215.5,
        "prepTime": 29,
        "createdAt": "2019-10-16T20:52:41.324Z",
        "updatedAt": "2019-10-16T20:52:41.324Z"
    },
    {
        "id": 48,
        "foodType": "Pineapple",
        "recipe": "Pineapple Mint Vodka",
        "recipeUrl": "http://www.bonappetit.com/recipes/2013/02/pineapple-mint-vodka",
        "servings": 4,
        "ingredients": 3,
        "calories": 2082.86168240022,
        "prepTime": 0,
        "createdAt": "2019-10-16T20:52:41.324Z",
        "updatedAt": "2019-10-16T20:52:41.324Z"
    }
]
```

```
GET /api/v1/recipes/average_calories?q=apple

[
    {
        "averageCalories": 892.519222396633
    }
]
```

```
GET /api/v1/recipes/sort_ingredients?q=coconut

[
    {
        "id": 63,
        "foodType": "coconut",
        "recipe": "Coconut Quinoa",
        "recipeUrl": "http://www.bonappetit.com/recipe/coconut-quinoa",
        "servings": 6,
        "ingredients": 4,
        "calories": 1809.58756750938,
        "prepTime": 0,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 62,
        "foodType": "coconut",
        "recipe": "Coconut Rice",
        "recipeUrl": "http://herbivoracious.com/2009/03/coconut-rice-recipe.html",
        "servings": 4,
        "ingredients": 4,
        "calories": 2215.5048477875,
        "prepTime": 29,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 61,
        "foodType": "coconut",
        "recipe": "The Coconut Cake",
        "recipeUrl": "https://www.epicurious.com/recipes/food/views/the-coconut-cake-baked-by-melissa",
        "servings": 1,
        "ingredients": 4,
        "calories": 6743.52,
        "prepTime": 0,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 68,
        "foodType": "coconut",
        "recipe": "Coconut Brigadeiros",
        "recipeUrl": "http://www.finecooking.com/recipes/coconut-brigadeiros.aspx",
        "servings": 8,
        "ingredients": 5,
        "calories": 2009.70758333537,
        "prepTime": 0,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 69,
        "foodType": "coconut",
        "recipe": "Coconut fudge",
        "recipeUrl": "http://www.jamieoliver.com/recipes/uncategorised-recipes/coconut-fudge/",
        "servings": 45,
        "ingredients": 5,
        "calories": 4491.36000000063,
        "prepTime": 20,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 65,
        "foodType": "coconut",
        "recipe": "Coconut Jam",
        "recipeUrl": "http://zesterdaily.com/cooking/reconsidering-coconut/",
        "servings": 8,
        "ingredients": 6,
        "calories": 1634.69349999822,
        "prepTime": 238,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 66,
        "foodType": "coconut",
        "recipe": "Coconut Snowballs recipes",
        "recipeUrl": "http://www.thekitchn.com/recipe-coconut-snowballs-recipes-from-the-kitchn-181467",
        "servings": 12,
        "ingredients": 7,
        "calories": 1283.689,
        "prepTime": 45,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 64,
        "foodType": "coconut",
        "recipe": "Coconut Nice",
        "recipeUrl": "http://www.bbcgoodfood.com/recipes/coconut-nice",
        "servings": 30,
        "ingredients": 7,
        "calories": 4241.227,
        "prepTime": 0,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 67,
        "foodType": "coconut",
        "recipe": "Coconut Gelato",
        "recipeUrl": "http://www.marthastewart.com/355486/coconut-gelato",
        "servings": 16,
        "ingredients": 7,
        "calories": 2870.599626022,
        "prepTime": 535,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    },
    {
        "id": 70,
        "foodType": "coconut",
        "recipe": "Coconut Budino recipes",
        "recipeUrl": "http://www.biggirlssmallkitchen.com/2012/04/coconut-budino-thats-gluten-free-and-dairy-free.html",
        "servings": 4,
        "ingredients": 8,
        "calories": 952.109287733507,
        "prepTime": 55,
        "createdAt": "2019-10-16T23:10:35.667Z",
        "updatedAt": "2019-10-16T23:10:35.667Z"
    }
]
```



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node 10.16.3](https://nodejs.org/en/download/)
* [Express 4.16.4](https://www.npmjs.com/package/express)

## Clone 
```
git clone git@github.com:tayjames/edamam_microservice.git
cd edamam_microservice
npm install
npm init
```

## Database Setup
This project uses a Postgres database:

* Install Postgres by running `pg --save`
* Define `DB_USERNAME` as your Postgres username
* Define `DB_DATABASE` as edamam_microservice

After database setup is complete, go ahead and run the following commands:

```
npx db:create
npx db:migrate
```
Next, visit Edamam's API service and obtain an APP ID and APP KEY
* Create a `.env` file
* Install [Dotenv](https://www.npmjs.com/package/dotenv) to protect sensitive information.
* Define the APP KEY like so: EDAMAM_APP_KEY=xxxxxxx
* Define the APP ID like so: EDAMAM_APP_ID=6c369a2b
* Run `npx db:seed:all`

After you complete these steps you should be good to go! 

## Running the tests
* Testing is implemented with [Jest 24.9.0](https://www.npmjs.com/package/jest), and are run with `npm test`
* Be sure to have [Node-fetch](https://www.npmjs.com/package/node-fetch) installed as well, or you will get failing tests.
Tests should succeed with the following output upon running `npm test`
```
Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        27.47s, estimated 29s
```
