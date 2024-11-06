const Data = require('../Model/datas.schema');

exports.Getalldata = async (req, res) => {
    try {
        const data = await Data.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};