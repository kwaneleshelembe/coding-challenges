const Db=require("./db.js");

class Users extends Db{
	constructor(db){
		super(db);
	}

	createUser(key,name){
		const users=this.get();
		users.push({"key":key,"name":name,"carts":[]});
		this.set(users)
	}

	findIndex(key){
		const users=this.get();
		for (var i = 0; i < users.length; i++) {
			if(users[i]['key']==key) return i;
		}
		return null
	}

	findByKey(key){
		const index=this.findIndex(key);
		if(index==null)return null;
		return this.get()[index];
	}

	getCart(key,cartIndex){
		let user=this.findByKey(key);
		return user.carts[cartIndex];
	}

	getWholeCart(key){
		const user=this.findByKey(key);
		return user.carts;
	}

	createCart(key,items){
		const index=this.findIndex(key);
		const users=this.get();
		users[index].carts.push({"items":items});
		this.set(users);
	}

	updateCart(key,cartIndex,items){
		const index=this.findIndex(key);
		const users=this.get();
		users[index].carts[cartIndex]={"items":items};
		this.set(users)
	}

	removeAtIndex(array,index){
		let firstHalf=array.slice(0,index);
		let secondHalf=array.slice(Number(index)+1);
		return firstHalf.concat(secondHalf);
	}

	deleteCart(key,cartIndex){
		const index=this.findIndex(key);
		const users=this.get();
		const {carts}=users[index];
		const newCarts=this.removeAtIndex(carts,cartIndex);
		users[index].carts=newCarts;
		this.set(users);
	}
}

module.exports=Users;