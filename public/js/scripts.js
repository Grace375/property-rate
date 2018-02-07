(function () {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({
        styler: "fb",
        cursorcolor: "#F2B33F",
        cursorwidth: '6',
        cursorborderradius: '10px',
        background: '#424f63',
        spacebarenabled: false,
        cursorborder: '0',
        zindex: '1000'
    });

    $(".scrollbar1").niceScroll({
        styler: "fb",
        cursorcolor: "rgba(97, 100, 193, 0.78)",
        cursorwidth: '6',
        cursorborderradius: '0',
        autohidemode: 'false',
        background: '#F1F1F1',
        spacebarenabled: false,
        cursorborder: '0'
    });


    $(".scrollbar1").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }

    $('#area_bar').autocomplete({
        classes: {
            "ui-autocomplete": "highlight"
        },
        source: function (request, response) {
            $.ajax({
                url: "/search_area",
                type: "GET",
                data: request,  // request is the value of search input
                success: function (data) {
                    // Map response values to fiedl label and value
                    response($.map(data, function (el) {
                        return {
                            label: el.name,
                            code: el.code,
                            value: el._id
                        };
                    }));
                }
            });
        },
        minLength: 1,
        // set an onFocus event to show the result on input field when result is focused
        focus: function (event, ui) {
            this.label = ui.item.label + ' (' + ui.item.code + ')';
            this.value = this.label;
            $(this).next("input").val(ui.item.value);
            /*$('#are_a').label = ui.item.code+' :: '+ui.item.label;
            $('#are_a').value = ui.item.value;*/
            // Prevent other event from not being execute
            event.preventDefault();
        },
        select: function (event, ui) {
            // Prevent value from being put in the input:
            this.value = ui.item.label + ' (' + ui.item.code + ')';
            // Set the id to the next input hidden field
            $(this).next("input").val(ui.item.value);
            // Prevent other event from not being execute
            event.preventDefault();
            // optionnal: submit the form after field has been filled up
            // $('#quicksearch').submit();
        }
    });
    $('#use_bar').autocomplete({
        classes: {
            "ui-autocomplete": "highlight"
        },
        source: function (request, response) {
            $.ajax({
                url: "/search_use",
                type: "GET",
                data: request,  // request is the value of search input
                success: function (data) {
                    // Map response values to fiedl label and value
                    response($.map(data, function (el) {
                        return {
                            label: el.name,
                            code: el.code,
                            value: el._id
                        };
                    }));
                }
            });
        },
        minLength: 1,
        // set an onFocus event to show the result on input field when result is focused
        focus: function (event, ui) {
            this.label = ui.item.label + ' (' + ui.item.code + ')';
            this.value = this.label;
            $(this).next("input").val(ui.item.value);
            /*$('#are_a').label = ui.item.code+' :: '+ui.item.label;
            $('#are_a').value = ui.item.value;*/
            // Prevent other event from not being execute
            event.preventDefault();
        },
        select: function (event, ui) {
            // Prevent value from being put in the input:
            this.value = ui.item.label + ' (' + ui.item.code + ')';
            // Set the id to the next input hidden field
            $(this).next("input").val(ui.item.value);
            // Prevent other event from not being execute
            event.preventDefault();
            // optionnal: submit the form after field has been filled up
            // $('#quicksearch').submit();
        }
    });
    $('#san_bar').autocomplete({
        classes: {
            "ui-autocomplete": "highlight"
        },
        source: function (request, response) {
            $.ajax({
                url: "/search_san",
                type: "GET",
                data: request,  // request is the value of search input
                success: function (data) {
                    // Map response values to fiedl label and value
                    response($.map(data, function (el) {
                        return {
                            label: el.name,
                            code: el.code,
                            value: el._id
                        };
                    }));
                }
            });
        },
        minLength: 1,
        // set an onFocus event to show the result on input field when result is focused
        focus: function (event, ui) {
            this.label = ui.item.label + ' (' + ui.item.code + ')';
            this.value = this.label;
            $(this).next("input").val(ui.item.value);
            /*$('#are_a').label = ui.item.code+' :: '+ui.item.label;
            $('#are_a').value = ui.item.value;*/
            // Prevent other event from not being execute
            event.preventDefault();
        },
        select: function (event, ui) {
            // Prevent value from being put in the input:
            this.value = ui.item.label + ' (' + ui.item.code + ')';
            // Set the id to the next input hidden field
            $(this).next("input").val(ui.item.value);
            // Prevent other event from not being execute
            event.preventDefault();
            // optionnal: submit the form after field has been filled up
            // $('#quicksearch').submit();
        }
    });

    $('#add_prop').click(function () {
        var $form = $('#prop_form');
        var add_prop = $.post('/users/add_prop',{
            use_code: $form.find('[name="use_code"]').val(),
            sanitation_code:$form.find('[name="sanitation_code"]').val(),
            prop_num:$form.find('[name="prop_num"]').val(),
            area:$form.find('[name="area"]').val(),
            x:$form.find('[name="x"]').val(),
            y:$form.find('[name="y"]').val(),
            loc_des:$form.find('[name="loc_des"]').val(),
            owner:$form.find('[name="owner"]').val()
        });
        add_prop.done(function (data) {
            console.log(data);
            alert(data)
        }).fail(function (err) {
            alert(err)
        })
    })

$('.createdAt').each(function () {
    $(this).text(' ' + moment(new Date($(this).attr('data-createdAt')).toUTCString()).format('MMM/DD/YYYY'));
});
    $('.calcs').each(function () {
        let san = Number($(this).attr('data-san')),
            use =Number($(this).attr('data-use')),
            rate_val =Number($(this).attr('data-rate_val'))
        ;
        $(this).text(san+(use*rate_val));
    })

})(jQuery);

                     
     
  