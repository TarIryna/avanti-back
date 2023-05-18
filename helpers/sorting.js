const getSortingName = (sort) => {

switch (sort) {
    case "pop":
        return {pop: 1}
        break;
    case "-pop":
        return {pop: -1}
        break;
    case "price":
        return {price: 1}
        break;
    case "-price":
        return {price: -1}
        break;

    default:
        break;
}
};

module.exports = {getSortingName} ;