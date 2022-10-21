<h1 style="text-align:center;">React Form Package</h1>

<p style="text-align: center;padding: 1em;">This is a React Form Component Library.</p>

## How to set up.

+ create react app.
	- if you don't have a react app run this command on the **Terminal** <br>
	- react and react-dom must be **`version 16.14.0 and up`**.

	```bash
	
	$ npm create-react-app my-react-app

	```
Add this package directly to the **src** folder in the react app.

### Usage.

+ import package into **App.js** file.
+ this package exports the **Form** and **Field** component.

```js

import {Form,Field} from "react-form-package/index.js";

```

+ create a form and add fields inside **App.js**.

```html

<Form>
	<Field type="text"/>
	<Field type="email"/>
	<Field type="password"/>
	<Field type="submit"/>
</Form>

```

+ Add options attribute to fields you wan't to validate
	+ The options attribute takes an object which has validation properties.

```html

<Field type="password" options={{required:true}}/>

```

> Field Component

The field component has a *message element* that displays any errors during the validation this message element has the class of **message** for styling

```css
.message {
	color: red;
}
``` 

#### Validation properties.

+ **required** - (boolean)
+ **minLength** - (number)
+ **maxLength** - (number)
+ **number** - (boolean)
+ **specialChar** - (boolean)
+ **pattern** - (string)

example

```js

const options={
	required:true,
	minLength:3,
	maxLength:15,
	number:true,
	specialChar:true,
	pattern:"[a-zA-Z]"
}

```

```html

<Field type="password" options={options}/>

```
