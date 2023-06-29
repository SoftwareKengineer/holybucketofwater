const db = require ("./../models")

async function get(req, res) {
    try {
        let coolingtowerbrands = await db.CoolingTowerBrand.findAll();
        return res.json(coolingtowerbrands);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function add(req, res) {
    let name = req.body.name;
    try {
        await db.CoolingTowerBrand.create({
            name: name
        })
        return res.json({ "message": "CoolingTowerBrand was successfully create !" });
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function update(req, res) {
    let id = req.params.id;
    let { name } = req.body;
    try {
        let coolingtowerbrand = await db.CoolingTowerBrand.findByPk(id);
        coolingtowerbrand.name = name;
        await coolingtowerbrand.save((err, newCoolingTowerBrand) => {
            if (err) return res.status(500).json(err);
            return res.json({ "message": "CoolingTowerBrand was successfully update" });
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function getOne(req, res) {
    let id = req.params.id;
    try {
        let coolingtowerbrand = await db.CoolingTowerBrand.findByPk(id);
        return res.json(coolingtowerbrand);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function deleteOne(req, res) {
    let { id } = req.params;
    try {
        await db.CoolingTowerBrand.destroy({ where: { id: id } });
        return res.json({ "message": "CoolingTowerBrand was successfully delete" });
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    get,
    add,
    update,
    getOne,
    deleteOne
}