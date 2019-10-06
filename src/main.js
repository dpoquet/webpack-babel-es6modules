import * as GLOBALS from './constants/globals';
import jQuery from 'jquery';
import Cookies from 'js-cookie';
window.$ = window.jQuery = jQuery;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log(`DOM fully loaded on main`);
    setCookie();
});

const setCookie = () => {
    console.log('setCookie called');
    Cookies.set('test-cookie', true);
}