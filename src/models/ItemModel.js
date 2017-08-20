 class ItemModel{
  constructor(title, title2, title3, imgUrl, isCompleted, id){
    this.title = title;
    this.title2 = title2 || '';
    this.title3 = title3 || '';
    this.imgUrl = imgUrl || '';
    this.isCompleted = isCompleted || false;
    this.cretedAt = new Date();
    this.id = id || '';
  }
}

module.exports = ItemModel;