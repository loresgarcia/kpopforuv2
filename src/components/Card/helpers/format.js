export const formatPrice = (price) => {
    const newPrice = price.toFixed(2).replace(".", ",")

    return newPrice;
}


export const formatTitle = (title) => {
    if (title.length <= 20) {
        return title
    } else {
        return title.slice(0,18) + "..."
    }
}