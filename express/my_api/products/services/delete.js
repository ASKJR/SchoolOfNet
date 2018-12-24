const Product = require('../entity/products');
const service = (req, res) => {
    const { id } = req.params;
    const foundProduct = Product.findById({_id: id}).exec();
    const remove = Product.deleteOne({_id: id});

    foundProduct
        .then((product) => {
            if (!product) {
                return res.status(404).json({
                    status: false,
                    data: {}
                })
            }
            remove
                .exec()
                .then((result) => {
                    return res.status(200).json({
                        status: true,
                        data: product
                    });
                })
                .catch((err) => {
                    return res.status(500).json({
                        status: false,
                        data: {}
                    })
                });

        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                data: {}
            })
        });
}

module.exports = service;