import Vue from 'vue';
import moment from "moment/moment";

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('titleCase', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});


Vue.filter('lowercase', function (value) {
    if (!value) return ''
    value = value.toString().toLowerCase()
    return value
})

Vue.filter('formatAmount', function (value) {
    if (value == null) return '0.00'
    value = parseFloat(value).toFixed(2);
    // console.log(value)
    var parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
})

Vue.filter('formatAmount2', function (value) {
    if (value == null) return '0'
    value = parseInt(value); // Convert to integer to remove decimal part
    // Format the number with commas for thousands, millions, etc.
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

Vue.filter('formatTextWithEllipsis', function (value) {
    if (value == null)
        return value
    else if (value.length <= 20)
        return value
    else
        return value.substr(0, 13)+'...'
})

Vue.filter('formatDate', function (value)  {
    if (value == null)
        return value
    else
        return moment(value).format("MMM Do YY");
})

Vue.filter('formatDate2', function (value) {
    if (value == null)
        return value;
    else {
        // Using moment.js to parse the date and format it to "YYYY MM DD HH:mm:ss"
        return moment(value).format("YYYY MM DD HH:mm:ss");
    }
});



