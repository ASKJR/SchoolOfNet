const Product = require('../entity/products');

const service = (req, res, next) => {
    
    const { id } = req.params;
    let product;
    if (id) {
        product = Product.findById(id).exec();
    } else {
        product = Product.find({}).exec();
    }
    product
        .then((product) => {
            if (!product) {
                return res.status(404).json({
                    status: false,
                    data: {}
                });
            }
            return res.status(200).json({
                status: true,
                data: product
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