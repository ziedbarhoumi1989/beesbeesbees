 function Grub()   {
	this.age = 0;
	this.color = 'pink';
	this.food  = 'jelly';
	
};
Grub.prototype.eat = function(food) {
		this.food = food
	}