const item = {
	"_id":"",
	"pic":"",
	"__v":0,
	"name":{
		"de":{
			"main":"",
			"spec":""
		},
		"pl":{
			"main":"",
			"spec":""},
		"it":{
			"main":"",
			"spec":""}
		},
	"completed": false
	}

class ItemModel{
  constructor(title, completed){
    this.name = {"it":{"main": title}};
    this.completed = completed || false;
    this.cretedAt = new Date();

  }
}

module.exports = ItemModel;