<h1 style="text-align:center;">API Key System.</h1>

<p style="text-align: center;">application that generates new api keys for users and allows user to create, get, update and delete carts of items.(made with Express.JS)</p>

# Content

+ [Create User Account](#create-user-account)
+ [Create Cart](#create-cart)
+ [Get Cart](#get-cart)
+ [Update Cart](#update-cart)
+ [Delete Cart](#delete-cart)



## How to set up.

+ clone repository with `$ git clone` command.
+ install all dependencies with `$ npm install` command.
+ to start the server run the **`$ npm start`** on the terminal.

### Usage.

#### create user account.

> the creation of a account initializes a user account in the *custom database*.After the account is initialized the server responds with a unique api key

+ to get unique apikey make a **GET** request to `http://localhost:3000/create-account`.

+ the server will respond with the api key inside the body of the response.

this api key will be used to validate the user so it must always be included inside the request body.

+ you can specify user name in request body.

```json
{
	"name":"example name"
}
```


#### create cart.

> before any cart is added to user account the application will validate the apikey that is inside the body object 

```json
{
	"apiKey":"unique api key"
}
```

+ to create a cart make a **POST** request to `http://localhost:3000/create-cart`.

+ the body of your request must have your unique api key and an items array that has strings of all items in cart.

```json
{
	"apiKey":"unique api key",
	"items":["item1","item2","item3","item4"]
}
```


#### get cart

+ to get a specific cart make a **GET** request to `http://localhost:3000/get-cart`.
+ the body of the request should contain the api key and the cart index (each cart has an index).

```json
{
	"apiKey":"unique api key",
	"cartIndex":"0"
}
```
 *this example will return the first cart.*

 + you get every cart in the account with a **GET** request to `http://localhost:3000/get-whole-cart`.


#### update cart

+ update a cart with a **PUT** request to `http://localhost:3000/update-cart`.
+ the body of the request should contain the api key, the cartIndex of the cart to update and the items array that will replace the cart.

```json
{
	"apiKey":"unique api key",
	"cartIndex":"0",
	"items":["new item1","new item2","new item3","new item4"]
}
```
*the items array will replace the cart specified with the cartIndex*

#### delete cart


+ delete a cart wih a **DELETE** request to `http://localhost:3000/delete-cart`.
+ the body of the request should contain the api key and the cartIndex of the cart to delete.

```json
{
	"apiKey":"unique api key",
	"cartIndex":"0"
}
```