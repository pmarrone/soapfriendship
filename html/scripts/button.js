var buttonCounter = 0;

var Button = function(x, y, imageCollection, id) {
	this.id = id || "button " + this.buttonCounter++;
	this.visible = true;
	this.x = x;
	this.y = y;
	this.toggled = false;
	this.spriteBag = imageCollection.spriteBag;
	this.imageCollection = imageCollection;
};

Button.prototype.init = function() {
	
};

Button.prototype.onUpdate = function(delta) {
	
};

Button.prototype.onDraw = function(ctx) {
	var currentImage = this.toggled ? 0 : 1;
	ctx.save();
	ctx.drawImage(this.spriteBag[currentImage].image, this.x, this.y);
	ctx.restore();
};

Button.prototype.toggle = function() {
	this.toggled = !toggled;
};

