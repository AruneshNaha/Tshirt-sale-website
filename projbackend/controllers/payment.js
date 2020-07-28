var braintree = require("braintree");

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'd9q5fjt3wqyk66hr',
    publicKey: 'tpy5q75c4rvn27j6',
    privateKey: '6bf4e3e265e062acbf0ddf896664eba7'
});

exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, function (err, response) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.send(response)
        }
    });
}

exports.processpayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce

    let amountfromtheclient = req.body.amount

    gateway.transaction.sale({
        amount: amountfromtheclient,
        paymentMethodNonce: nonceFromTheClient,

        options: {
            submitForSettlement: true
        }
    }, function (err, result) {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    });
}