var i;
var pizza;
for (i = 0; i < com.dawgpizza.menu.pizzas.length; ++i) {
    pizza = com.dawgpizza.menu.pizzas[i];

    //pizza.name = name of pizza
    //pizza.description = description of pizza
    //pizza.prices = array of three numbers, which are prices for small, medium, and large
    //pizza.prices[0] = price for small
    //pizza.prices[1] = price for medium
    //pizza.prices[2] = price for large

} //for each pizza


$(function(){
	render(com.dawgpizza.menu.pizzas);
}); // on doc ready

function render(pizzas) {
    var $template = $('.template');
    var $container = $('.pizza-menu')
    var $instance;

    $container.empty();

    $.each(pizzas, function(){
        $instance = $template.clone();
        $instance.find('.name').html(this.name);
        $instance.find('.description').html(this.description);
      
      /*  $instance.find('.pic').attr({
            src: this.pic,
            alt: 'picture of' + this.first + ' ' + this.last
        }); */
        $instance.removeClass('template');
        $container.append($instance);
    });
}