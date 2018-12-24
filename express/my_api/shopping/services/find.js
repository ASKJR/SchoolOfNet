const Shopping = require('../entity/shopping');
const service = (req, res) => {
    let shoppingCart = Shopping.find({}).exec();

    shoppingCart
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    status: false,
                    data: {}
                })
            }
            return res.status(200).json({
                status: true,
                data: result
            })
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                data: {}
            })
        });
}

module.exports = service;