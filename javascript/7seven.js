const piyush = {
    name: "Piyush Garg",
    sayName: function() {
        console.log(this.name)
    }
};

const john = {
    name : "John Doe",
    sayName: function() {
        console.log(this.name)
    },
}

john.sayName.call(piyush);