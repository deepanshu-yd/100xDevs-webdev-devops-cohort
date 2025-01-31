class Rectangle { // Class
	constructor(width, height, color) {  // Constructor
		this.width = width;
		this.height = height;
		this.color = color;
	}

	area() { // Method
		const area = this.width * this.height;
		return area;
	}

	paint() { // Method
		console.log(`Painting with color ${this.color}`);
		
	}
}

const rect = new Rectangle(2, 4, "red"); // Instance
const area = rect.area(); // Calling Methods
rect.paint();
console.log(area); // Calling Methods

/* we can also make it using the conventional way like:-

const rectangle = {
	width: 2,
	height: 3,
	color: "red"
}

function area (rectangle) {
	return area = rectangle.height * rectangle.width
}

const ans = area(rectangle);
console.log(ans);
*/

// Some Important Classes:

const date = new Date()
console.log(date.getFullYear());

const map = new Map();
map.set('name', 'deepanshu');
map.set('age', '20');
console.log(map.get('name')); 