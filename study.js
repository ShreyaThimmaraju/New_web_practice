st = {
    //states
    roll:101,
    name:"rahul",
    cgpa:7.7,
    study:function() {
        console.log("study to upskill");
        
    },
    intro:function() {
        console.log("Roll: "+ this.roll + " Name:" + this.name + " Cgpa:" + this.cgpa);
    }
}



st.study()
st.intro()