class Media {
  constructor(title){
		this._title = title;
    this._ratings = 5;
    this._isCheckedOut = true;
  }

  get title(){
    return this._title;
  }

  get ratings(){
		return this._ratings;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating(){
    let reducer = (accumulator, currentValue) => accumulator * currentValue;
    return (_this.ratings.reduce(reducer) / _this.ratings.length);
  }

  addRating(rating){
    this._ratings.push(rating);
  }
}
