Handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerPartial('product', `<div class="product-row">
    <div class="product-img">
        <img src="{{image.src}}" alt="{{image.alt}}" width="600" height="300">
    </div>
    <div class="parameters">
        <h4 class="name">{{id}}. {{name}}</h4>
        <p class="characteristic">{{description}}</p>
        <div class="product-container">
            <div class="parameters">
                <p class="rating">ROASTING:{{roasting}}/10</p>
                <p class="rating">INTENSITY:{{intensity}}/10</p>

                {{#ifEquals id 1}}
                    <img class="order" src="/images/most-popular.png" alt="Most popular badge" width="70" height="70">
                {{/ifEquals}}
            </div>
        </div>
    </div>
</div>`);