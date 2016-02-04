var doSomething = function ( values, handle, unencoded, tap ) {
    // Here i want to know which slider triggered
    var $log = $('#log');
    $log.html(JSON.stringify({ values: values, handle: handle, unencoded: unencoded, tap: tap}, null, 4));
};

var initSliders = function (index, element) {
    var $slider = $(element);
    var sliderOptions = $slider.data('slider');
    noUiSlider.create(element, sliderOptions);
    element.noUiSlider.on('update', doSomething);
};

var init = function() {
    var $sliders = $('[data-slider]');
    $sliders.each(initSliders);
};

$(init);



