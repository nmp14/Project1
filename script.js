$(document).ready(function () {

    $("#test").on("click", function () {
        var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?price=4,2&location=Tallahassee,FL&limit=10";

        $.ajax({
            url: myurl,
            headers: {
                'Authorization': 'Bearer L-II2r_Slet4z_EkoQ8O0wf3dRrb_tgQE2q81nmfYx5qT-TnC_Lox30a4ztshh-4S2e9bf7imSQ-dxWdjFXKW9vYQvqV6gLTYb1mCSP9gj4282zbST2TlLbJtJsNYHYx',
            },
            method: 'GET',
        }).then(function (response) {
            console.log(response);
        });
    })
});


// $.ajax({
//     url: 'http://api.yelp.com/v3/businesses/search',
//     dataType: 'jsonp',
//     headers: {
//         'Authorization': 'Bearer L-II2r_Slet4z_EkoQ8O0wf3dRrb_tgQE2q81nmfYx5qT-TnC_Lox30a4ztshh-4S2e9bf7imSQ-dxWdjFXKW9vYQvqV6gLTYb1mCSP9gj4282zbST2TlLbJtJsNYHYx',
//     },
//     data: { term: 'restaurant', location: 'Tallahassee, FL', limit: '10' }, // callback is not necessary
//     success: function (data) {

//     }
// });