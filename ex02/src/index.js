
class Book {
    constructor(title) {
        this._title = "The Little Prince";
    }
    
     get title(){
        return this._title;
    }

    set book(newTitle) {
        this.title = newTitle;
        
    }
   
}

const littlePrince = new Book("Le Petit Prince");
console.log(littlePrince._title);
littlePrince._title = "Le Petit Prince";
console.log(littlePrince._title);