// More Realiable way of crfeating the object

class Student {
    // constructor
    constructoe(roll, name, cgpa) {
        //states
        this.roll = 101,
        this.name = Shreya,
        this.cgpa = 9.2
    };
    study() {
    console.log("study to upskill");
    }
    intro() {
        console.log("Roll: "+ this.roll + "Name:" + this.name + " Cgpa:" + this.cgpa);;
    }
}

st = new Student(101,  "rahul", 7.7)
st.study()
st.intro() 