// TASK 2
// Refactor your code from Task 1 to be based on classes. The goal is to implement logic of numerical integration 
// in a subclass of Intergrator class and to make it possible to create diffrent subclasses for different integrations methods
// Provide at least 1 extra integration method in addition to your method from Task 1.

let x = prompt('Value of Integration starting point');
let n = prompt('Numerical integration step number');

class Integrator{
	constructor(x, n) {
		this.x = x;
		this.n = n;
		}
	leftRiemann(){
		let delta_x = 2 / this.n;
		let result = 0;
		
		for (let i = 0; i < this.n; i++){
			
			// Left Riemann sum of A = deltha_x * 
			result = result + delta_x*((this.x + i*delta_x)**2 - Math.cos(this.x + i*delta_x));
		}
		
		return result;
	}
	rightRiemann(){
		let delta_x = 2 / this.n;
		let result = 0;
		
		for (let i = 0; i<this.n; i++){
			
			// Right Riemann sum of A = deltha_x * 
			result = result + delta_x*((this.x + (i+1)*delta_x)**2 - Math.cos(this.x + (i+1)*delta_x));
		}
		return result;
	
	}
	
};

let integration = new Integrator(x,n);

alert(integration.leftRiemann());
alert(integration.rightRiemann());
