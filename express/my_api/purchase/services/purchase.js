const Purchase = require('../entity/purchase');
const Shopping = require('../../shopping/entity/shopping');

const service = (req, res) => {
    let { shoppingId } = req.params;
    let purchase = new Purchase(req.body);
    purchase.shopping =  shoppingId;

    Shopping
        .findById({_id: shoppingId})
        .populate('products')
        .exec()
        .then((cart) => {
            if (!cart) {
                return res.status(404).json({
                    status: false,
                    data: {}
                });    
            }

            let total = 0;

            for(product of cart.products) {
                total+= product.price;
            }

            purchase.total = total;

            purchase
                .save()
                .then((saved) => {
                    res.status(200).json({
                        status: true,
                        data: saved
                    });
                })
                .catch((err) => {
                    return res.status(500).json({
                        status: false,
                        data: {}
                    });
                });

        })
        .catch((err) => {
            return res.status(500).json({
                status: false,
                data: {}
            });
        });
}

module.exports = service;