module.exports = {

	//move an element of an array form a position to another
	move: function(array, fromIndex, toIndex) {
    	return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
  	}
};