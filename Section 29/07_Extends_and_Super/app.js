class Pet {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	eat() {
		return `${this.name}: nomnomnom`;
	}
}

class Cat extends Pet {
	constructor(name, age, lives = 9) {
		super(name, age);
		this.lives = lives;
	}

	meow() {
		return 'meow!';
	}
}