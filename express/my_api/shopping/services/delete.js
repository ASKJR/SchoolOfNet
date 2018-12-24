const Shopping = require('../entity/shopping');
const service = (req, res) => {
    const { id } = req.params;
    const { ProductId } = req.params;
    const findCart = Shopping.findById({_id: id }).exec();
    const removeItemFromCart = Shopping.updateOne(
        {_id: id},
        {$pull: {products: ProductId} }
    );

    findCart
        .then((cart) => {
            if (!cart) {
                return res.status(404).json({
                    status: false,
                    data: {}
                });
            }
            removeItemFromCart
                .exec()
                .then((result) => {
                    return res.status(200).json({
                        status: true,
                        data: result
                    });
                })
                .catch((err) => {
                    return res.statu(500).json({
                        status: false,
                        data: {}
                    });
                });

        })
        .catch((err) => {
            return res.statu(500).json({
                status: false,
                data: {}
            });
        });
}

module.exports = service;