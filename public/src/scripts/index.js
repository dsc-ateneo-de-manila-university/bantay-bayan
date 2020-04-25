const sheetURL = 'https://script.google.com/macros/s/AKfycbxAgxkuxNSpQL3Orn0hOqbVEiQWYyxdrw-IOwTAYZfN5PcuXmmw/exec';

const form = $('form#contact-form');

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


form.submit(function (e) {
    e.preventDefault();
    $.ajax({
        url: sheetURL,
        method: "GET",
        dataType: "json",
        data: form.serializeObject(),
        success: function () {
            alert("Thank you and enjoy!");
            // document.location.reload();
            form.trigger('reset');
        }
    });
});