const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]





const getTheTitles = function(books) {
    let firstArr = books;
    let filtered = firstArr.filter(books => books.title);
    return filtered;
};

console.log(getTheTitles(books))




console.log("JS injection is live")

// Do not edit below this line
module.exports = getTheTitles;
