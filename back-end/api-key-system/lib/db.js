const fs=require("fs");

class Db{
	constructor(db){
		//database path
		this.db=db;
	}

	set(dataSet){
		//changes all database
		fs.writeFileSync(this.db,JSON.stringify(dataSet,"   ","   "));
	}

	get(){
		//gets all database
		return JSON.parse(fs.readFileSync(this.db));
	}

	add(data){
		//add on account to database
		const dataSet=this.get();
		dataSet.push(data);
		this.set(dataSet);
	}

	find(data){
		const dataSet=this.get();
		for (var i = 0; i < dataSet.length; i++) {
			if(dataSet[i]==data) return true;
		}

		return false;
	}

}


module.exports=Db;