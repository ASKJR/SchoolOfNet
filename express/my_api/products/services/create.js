const Products = require('../entity/products');
const service = (req, res, next) => {
    var product = new Products(req.body);
    product
            .save()
            .then((product) => {
                if (!product) {
                    return res.status(404)
                        .json({
                            status: false,
                            data: {}
                        })
                }

                return res.status(201)
                    .json({
                        status: true,
                        data: product
                    })
            })
            .catch((error) => {
                return res.status(500)
                        .json({
                            status: false,
                            data: {}
                        })
            });
}

module.exports = service;