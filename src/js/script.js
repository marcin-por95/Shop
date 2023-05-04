import {settings, templates} from "./settings.js";

const getDataFromDatabase = async () => {
    const url = settings.db.url + '/' + settings.db.products;
    return fetch(url).then(response => response.json());
}

const app = {
    initData: async function () {
        return await getDataFromDatabase();
    },
    render: function (data) {
        const productList = document.getElementById('product-list');
        productList.innerHTML = templates.productList({products: data});
    },
    init: function () {
        this.initData()
            .then((data) => {
                this.render(data);
            });

    }
}

app.init();