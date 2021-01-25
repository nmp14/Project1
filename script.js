$(document).ready(function () {
    let key = "L - II2r_Slet4z_EkoQ8O0wf3dRrb_tgQE2q81nmfYx5qT - TnC_Lox30a4ztshh - 4S2e9bf7imSQ- dxWdjFXKW9vYQvqV6gLTYb1mCSP9gj4282zbST2TlLbJtJsNYHYx";
    let queryURL = "https://api.yelp.com/v3/businesses/" + key;

    $.ajax({
        URL: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
});
