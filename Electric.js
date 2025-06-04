// Inheritence
class ElectronicDevice {
    getCharged() {
        console.log("Plug in to charge");
    }
    use() {
        console.log("Use for making work easier")
    }
}

//method overriding

class Laptop extends ElectronicDevice {
    use() {
        console.log("use laptop for calculations and more");
    
    }
    //child-specific
    openBrowser() {
        console.log("Use browser to search on internet");
    }
}

let l = new Laptop();
l.getCharged();
l.use();
l.openBrowser();