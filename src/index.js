
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';

import './css/style.css';
import 'webpack-jquery-ui';
import 'jquery/dist/jquery.min';

import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';


$(function(){
	$('[data-toggle="tooltip"]').tooltip()
    $('.add-to-cart-btn').click(function(){
        alert('أضيف النتج إلى عربة الشراء');
    });

    $('#copyright').text("جميع الحقوق محفوظة للمتجر سنة" + new Date().getFullYear());
});