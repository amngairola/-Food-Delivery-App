import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3 "
          style={{ width: "18rem", maxHEight: "360px" }}
        >
          <img
            className="card-img-top"
            src="https://generatorfun.com/code/uploads/Random-Food-image-6.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">disrciption about image</p>
            <div className="container w-100">
              {/* creating an array for the quantity of selected items */}
              <select className="m-2 h-80  bg-success rounded">
                {/* i is index of the array of leangth (4) , we are doing i + 1 because we need to start the value from 1 not from 0 because array index start form 0 not for 1 */}
                {Array.from(Array(4), (j, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-80  bg-success rounded">
                <option value="half">half</option>
                <option value="full">full</option>
              </select>
              <div className="d-inline h-100 fs-5">Totel price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
