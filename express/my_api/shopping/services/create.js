const Shopping = require('../entity/shopping');

const service = (req, res) => {
    const { body } = req;
    const shopping = new Shopping(body);
    shopping
        .save()
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    status: false,
                    data: {}
                });
            }
            return res.status(201).json({
                status: true,
                data: result
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