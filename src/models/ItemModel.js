 class ItemModel{
  constructor(rawObj, groceryObj, isCompleted){

    this.rawObj = rawObj;
    this.groceryObj = groceryObj || '';
    this.isCompleted = isCompleted || false;
    this._id = generateID();
    this.cretedAt = new Date();
    
  }
}

function generateID(){
	return '_' + Math.random().toString(36).substr(2, 9);
}

module.exports = ItemModel;




/*
    constructor(raw: Obj, grocery: Obj, isCompleted)
 */


/*
{
    _id: generateID(),
    createdAt: Date(),
    isCompleted : False
    raw{
        text:
        lang:
    },
    grocery:{
        _id:
        _name:{
            it: {
                main: 
                spec:
            },
            de: {
                main:
                spec:
            }
        }
    }
}
 */
