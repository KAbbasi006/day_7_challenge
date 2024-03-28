//Q19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guests = ["Alice", "Eric", "Martha", "Daniel", "David", "Joe", "John"];
console.log("I am inviting ".concat(guests.length, " people to dinner."));
//Q20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countries = ["Japan", "China", "Korea", "Thailand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit: ", countries);
//Q21. Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));
