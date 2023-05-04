export const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : ''),
        products: 'products'
    },
}

export const select = {
    templateOf: {
        productList: '#template-productList',
    },
};
export const templates = {
    productList: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML)
}