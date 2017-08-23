 class ItemModel{
  constructor(title, title2, title3, imgUrl, extID, isCompleted){
    this.title = title;
    this.title2 = title2 || '';
    this.title3 = title3 || '';
    this.imgUrl = imgUrl || '';
    this.extID = extID || '';
    this.isCompleted = isCompleted || false;
    this._id = generateID();
    this.cretedAt = new Date();
    
  }
}

function generateID(){
	return '_' + Math.random().toString(36).substr(2, 9);
}

module.exports = ItemModel;