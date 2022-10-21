const express=require("express");
const Users=require("./lib/users.js");
const Db=require("./lib/db.js");
const app=express();
const PORT=8000;

//setup databases
const keys=new Db("./db/keys.json");
const users=new Users("./db/users.json");

//middleware
app.use(express.json());

//user messages
const success={message:"successful"};
const failure={message:"something went wrong"};
const notFound={message:"not found"};

//creating User
app.get("/create-user",(req,res)=>{
	const apiKey=new Date().getTime();
	keys.add(apiKey);
	users.createUser(apiKey,req.body.name);
	res.send({apiKey});
});

//validate user key
app.use((req,res,next)=>{
	const {apiKey}=req.body;
	if(!keys.find(apiKey)) {
		let k=keys.get();
		res.status(404).send(notFound);
	}else{
		next();
	}
});

//getting cart
app.get("/get-cart",(req,res)=>{
	const {apiKey,cartIndex}=req.body;
	res.send(users.getCart(apiKey,cartIndex));
});

//getting whole cart
app.get("/get-whole-cart",(req,res)=>{
	const {apiKey}=req.body;
	res.send(users.getWholeCart(apiKey));
})

//creating cart
app.post("/create-cart",(req,res)=>{
	const {apiKey,items}=req.body;
	users.createCart(apiKey,items);
	res.send(success);
});

//update cart
app.put("/update-cart",(req,res)=>{
	const {apiKey,cartIndex,items}=req.body;
	users.updateCart(apiKey,cartIndex,items);
	res.send(success);
});

//delete cart
app.delete("/delete-cart",(req,res)=>{
	const {apiKey,cartIndex}=req.body;
	users.deleteCart(apiKey,cartIndex);
	res.send(success);
})

app.listen(PORT,()=>{
	console.log(`server running at http://localhost:${PORT}`);
})