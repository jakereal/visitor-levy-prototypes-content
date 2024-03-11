//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get("/", function (request, response) {
  response.redirect('/en/index')
});

// Filter out accommodation not in Wales
router.post('/en/register/not-suitable-country', function(request, response) {

    var country = request.session.data['country']

    if (country == "wls"){
        response.redirect("/en/register/charge-fee");

    } else if (country == "wls,eng"){
        response.redirect("/en/register/charge-fee");

    } else if (country == "wls,eng,sct"){
        response.redirect("/en/register/charge-fee");

    } else if (country == "wls,eng,sct,ni"){
        response.redirect("/en/register/charge-fee");

    } else if (country == "wls,sct"){
        response.redirect("/en/register/charge-fee");

    } else if (country == "wls,sct,ni"){
        response.redirect("/en/register/charge-fee");

    } else if (country == "wls,eng,ni"){
        response.redirect("/en/register/charge-fee");

    } else if (country == "wls,ni"){
        response.redirect("/en/register/charge-fee");
    
    } else {
        response.redirect("/en/register/not-suitable-country")
    }
})

// Filter out free accommodation 
router.post('/en/register/not-suitable-fee', function(request, response) {

    var fee = request.session.data['fee']
    if (fee == "yes"){
        response.redirect("/en/register/email")
    } else {
        response.redirect("/en/register/not-suitable-fee")
    }
})

// Choose how to register - form or spreadsheet
router.post('/en/register/postcode', function(request, response) {

    var inputtype = request.session.data['inputtype']
    if (inputtype == "spreadsheet"){
        response.redirect("/en/register/upload-spreadsheet")
    } else {
        response.redirect("/en/register/postcode")
    }
})
