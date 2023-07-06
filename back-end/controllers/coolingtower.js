const { CommandCompleteMessage } = require("pg-protocol/dist/messages");
const db = require ("./../models")


async function get(req, res) {
    try {
        let coolingtower = await db.CoolingTower.findAll();
        return res.json(coolingtower);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function add(req, res) {
console.log(req.body)
    let name = req.body.name;
    let size_of_unit = req.body.size_of_unit;
    let amount_of_water = req.body.amount_of_water;
    let evaporation_rate = req.body.evaporation_rate;
    let water_cycles = req.body.water_cycles;
    let cooling_tower_unit_id = req.body.cooling_tower_unit_id;

    try {
        await db.CoolingTower.create({
            name: name,
            size_of_unit: size_of_unit,
            amount_of_water: amount_of_water,
            evaporation_rate: evaporation_rate,
            water_cycles: water_cycles,
            cooling_tower_unit_id: cooling_tower_unit_id
        })
        return res.json({ "message": "CoolingTower was successfully create !" });
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

async function update(req, res) {
    let id = req.params.id;
    let { name, size_of_unit, amount_of_water, evaporation_rate, water_cycles, cooling_tower_unit_id  } = req.body;

    try {
        let coolingtower = await db.CoolingTower.findByPk(id);
        
        coolingtower.name = name;
        coolingtower.size_of_unit = size_of_unit;
        coolingtower.amount_of_water = amount_of_water;
        coolingtower.evaporation_rate = evaporation_rate;
        coolingtower.water_cycles = water_cycles;
        coolingtower.cooling_tower_unit_id = cooling_tower_unit_id;

        await coolingtower.save((err, newCoolingTowerBrand) => {
            if (err) return res.status(500).json(err);
            return res.json({ "message": "CoolingTower was successfully update" });
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function getOne(req, res) {
    let id = req.params.id;
    try {
        let coolingtower = await db.CoolingTower.findByPk(id);
        return res.json(coolingtower);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function deleteOne(req, res) {
    let { id } = req.params;
    try {
        await db.CoolingTower.destroy({ where: { id: id } });
        return res.json({ "message": "CoolingTower was successfully delete" });
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