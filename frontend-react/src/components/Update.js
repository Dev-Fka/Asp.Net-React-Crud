import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const id = location.state.name;
  const [searchedUser, setSearchedUser] = useState([]);
  const [user, setUser] = useState("");
  const [allUser, setAllUser] = useState([]);
  const [company, setCompany] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");
  const [chief, setChief] = useState("");
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const getUser = async () => {
    let res = await fetch(`https://localhost:5001/user/${id}`);
    let users = await res.json();
    let res2 = await fetch(`https://localhost:5001/user`);
    let users2 = await res2.json();
    setAllUser(users2);
    setUser(users);
  };

  const searchChief = () => {
    allUser.forEach((user) => {
      if (user.name == searchVal) {
        let array = [];
        array.push(user);
        setSearchedUser(array);
      }
    });
  };

  const updateUser = async () => {
    const date = new Date().toISOString().slice(0, 10);

    const req = await fetch("https://localhost:5001/User", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        lastName: lastName,
        identyNum: user.identyNum,
        birthDate: user.birthDate,
        birthPlace: user.birthPlace,
        company: company,
        updatedTime: date,
        chiefUserId: chief,
        degree: profession,
        phoneNumber: phone,
      }),
    });
    if (req.status == 200) {
      setAlert("alert alert-success");
      setMessage("SUCCEEDED!");
      alertDel();
    } else {
      setAlert("alert alert-danger");
      setMessage("TRY AGAİN");
      alertDel();
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const alertDel = () => {
    setTimeout(() => {
      setAlert("visually-hidden");
    }, 3000);
  };

  return (
    <>
      <div className="row justify-content-center p-2">
        <div className="p-2 text-center fw-bold bg-secondary text-white">
          <h1>UPDATE USER PAGE</h1>
        </div>
        <div className={`mt-2 text-center fw-bold ${alert}`}>{message}</div>
        <div className="col-md-9">
          <div className="border p-2">
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder={user.name}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Last Name</label>
              <div className="col-sm-10">
                <input
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder={user.lastName}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">İdentity Number</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder={user.identyNum}
                  disabled
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Birth Date</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="yyyy/mm/dd"
                  className="form-control"
                  disabled
                  placeholder={user.birthDate}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Birth Place</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                  disabled
                  placeholder={user.birthPlace}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Company</label>
              <div className="col-sm-10">
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                  placeholder={user.company}
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Chief</label>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select Chief"
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                    onClick={searchChief}
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="col-sm-4">
                {searchedUser ? (
                  searchedUser.map((user) => (
                    <div key={user.id} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onClick={() => setChief(user.id)}
                      />
                      <label className="form-check-label">
                        {user.name}-({user.degree})
                      </label>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Profession</label>
              <div className="col-sm-10">
                <input
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  type="text"
                  placeholder={user.degree}
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Phone Number</label>
              <div className="col-sm-10">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder={user.phoneNumber}
                  className="form-control"
                />
              </div>
            </div>
            <button onClick={updateUser} className="btn btn-primary ">
              UPDATE USER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
