class Animal {
   sleep() {
    console.log("All animals should sleep!");
   }
   move() {
    console.log("All animals should move!");
   }
   eat() {
    console.log("All animals should eat to survie!");
   }
}
   class Dog extends Animal {
    eat() {
        console.log("Dogs eat veg as well as non-veg!");
    }
   }
    


   class Tiger extends Animal {
    eat() {
        console.log("Tiger eat non-veg!");
    }
   }

   class Elephant extends Animal {
    eat() {
        console.log("Tiger eat veg!");
    }
   }

   d = new Dog()
   d.sleep()
   d.move()
   d.eat()
    

   t = new Tiger()
   t.sleep()
   t.move()
   t.eat()
    

   e = new Elephant()
   e.sleep()
   e.move()
   e.eat()
    