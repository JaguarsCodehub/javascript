const piyush = {
    name: "Piyush",
    sayName: function() {
        console.log(this.name)
    }
}

// setTimeout(piyush.sayName.bind(piyush), 3 * 1000);
// setTimeout(() => piyush.sayName(), 3 * 1000);