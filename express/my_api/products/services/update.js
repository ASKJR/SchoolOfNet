const Product = require('../entity/products');
const service = (req, res, next) => {
    const { params } = req;
    const { id } = params;
    const { body } = req;
    let update = Product.update(
        {_id: id},
        {$set: body},
        {multi: false}
    ).exec();

    update
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    status: false,
                    data: {}
                });
            }
            return res.status(200).json({
                status: true,
                data: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                data: {}
            });
        });
}

module.exports = service;