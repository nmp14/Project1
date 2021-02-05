$(document).ready(function () {

    $("#test").on("click", function () {
        var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

        $.ajax({
            url: myurl,
            headers: {
                'Authorization': 'Bearer L-II2r_Slet4z_EkoQ8O0wf3dRrb_tgQE2q81nmfYx5qT-TnC_Lox30a4ztshh-4S2e9bf7imSQ-dxWdjFXKW9vYQvqV6gLTYb1mCSP9gj4282zbST2TlLbJtJsNYHYx',
            },
            method: 'GET',
            data: { term: 'fast food', location: 'Tallahassee, FL', limit: '10', price: '1' },
        }).then(function (response) {
            console.log(response);
        });
    });

    let myurl2 = "https://www.numbeo.com/api/city_prices?api_key=48gm8q3er23mmq&query=Tallahassee,%20FL&limit=10";

    $.ajax({
        url: myurl2,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
});