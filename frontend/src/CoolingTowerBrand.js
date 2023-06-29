import React, { useState } from 'react';

const CoolingTowerBrand = () => {
  const [name, setName] = useState('');

  const createCoolingTowerBrand = async (name) => {
    await fetch('http://localhost:3001/coolingtowerbrands', {
       method: 'POST',
       body: JSON.stringify(name),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((response) => response.json())
       .then((data) => {
          setName('');
       })
       .catch((err) => {
          console.log(err.message);
       });
 };
 
  function handleSubmit(e) {
    e.preventDefault();
    createCoolingTowerBrand(name);
  }

  function handleNameChange(e) {
    setName({
      name: e.target.value
    });
  }

  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card">
              <div className="card-header">Cooling Tower Brand</div>
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
