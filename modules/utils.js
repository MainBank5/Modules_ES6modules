function capitilize (str) {
    return str
    .toLowerCase()
    .split(' ')//split method returns a string
    .map((word)=> word[0].toUpperCase() + word.slice(1)) //you can use .substring() in place of splice
    .join(' ')
}

function addDollarSign (amount) {
    return `$${amount}`
}

//exporting one function es modules 

/*export default capitilize*/

//to export mutiple functions
export {capitilize, addDollarSign}

