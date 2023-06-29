import React, { useState } from 'react';

const CoolingTowerBrand = () => {
  const [name, setName] = useState('');
  const [sizeOfUnit, setSizeOfUnit] = useState('');
  const [amountOfWater, setAmountOfWater] = useState('');
  const [evaporationRate, setEvaporationRate] = useState('');
  const [waterCycles, setWaterCycles] = useState('');
  const [coolingTowerUnitId, setCoolingTowerUnitId] = useState('');

  const createCoolingTower = async (name, sizeOfUnit, amountOfWater, evaporationRate, waterCycles, coolingTowerUnitId) => {
    let body = {
      name: name.name,
      size_of_unit: Number(sizeOfUnit.sizeOfUnit),
      amount_of_water: Number(amountOfWater.amountOfWater),
      evaporation_rate: Number(evaporationRate.evaporationRate),
      water_cycles: Number(waterCycles.waterCycles),
      cooling_tower_unit_id: Number(coolingTowerUnitId.coolingTowerUnitId)
    }

    await fetch('https://holybucketofwater-mm4b.vercel.app/coolingtowers', {
      method: 'POST',
      mode:"cors",
      body: JSON.stringify(body),
      headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        setName('');
        setSizeOfUnit('');
        setAmountOfWater('');
        setEvaporationRate('');
        setWaterCycles('');
        setCoolingTowerUnitId('');
      })
      .catch((err) => {
          console.log(err.message);
      });
};
  function handleSubmit(e) {
    e.preventDefault();
    createCoolingTower(name, sizeOfUnit, amountOfWater, evaporationRate, waterCycles, coolingTowerUnitId);
  }

  function handleNameChange(e) {
    setName({
      name: e.target.value
    });
  }

  function handleSizeOfUnitChange(e) {
    setSizeOfUnit({
      sizeOfUnit: e.target.value
    });
  }

  function handleAmountOfWaterChange(e) {
    setAmountOfWater({
      amountOfWater: e.target.value
    });
  }

  function handleEvaporationRateChange(e) {
    setEvaporationRate({
      evaporationRate: e.target.value
    });
  }

  function handleWaterCyclesChange(e) {
    setWaterCycles({
      waterCycles: e.target.value
    });
  }
  function handleCoolingTowerUnitIdChange(e) {
    setCoolingTowerUnitId({
      coolingTowerUnitId: e.target.value
    });
  }
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card">
              <div className="card-header">Cooling Tower</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Size Of Unit
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="size_of_unit"
                      onChange={handleSizeOfUnitChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                    Amount Of Water
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="amount_of_water"
                      onChange={handleAmountOfWaterChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                    Number of Holes
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="evaporation_rate"
                      onChange={handleEvaporationRateChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                    Water Cycles
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="water_cycles"
                      onChange={handleWaterCyclesChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                    Cooling Tower Unit Id
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="cooling_tower_unit_id"
                      onChange={handleCoolingTowerUnitIdChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoolingTowerBrand;
