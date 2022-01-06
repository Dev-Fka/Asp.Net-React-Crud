import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState("");
  const [message, setMessage] = useState("");
  const [foundedUser, setFoundedUser] = useState("");
  const [info, setInfo] = useState("");

  const getUser = async () => {
    let res = await fetch(`https://localhost:5001/user`);
    let users = await res.json();
    setUsers(users);
    console.log(users);
  };

  const getFoundUser = () => {
    if (value == "") {
      setMessage("PLEASE WRİTE CORRECT İDENTY NUMBER!");
      setAlert("alert alert-danger");
      alertDel();
    } else {
      users.forEach((user) => {
        if (user.identyNum == value) {
          setFoundedUser(user);
          setInfo(user.id);
          setValue("");
        }
      });
    }
  };

  const deleteUser = async (id) => {
    const req = await fetch(`https://localhost:5001/user/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (req.status == 200) {
      setFoundedUser("");
      setAlert("alert alert-success");
      setMessage("Succeed Deleted");
      alertDel();
    } else {
      setMessage("BAŞARISIZ!");
      setAlert("alert alert-danger");
    }
  };

  const alertDel = () => {
    setTimeout(() => {
      setAlert("visually-hidden");
    }, 3000);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="text-center bg-secondary text-white p-2">
        <h2>SEARH USER</h2>
      </div>
      <div className={`mt-2 text-center fw-bold ${alert}`}>{message}</div>
      <div className="row justify-content-center">
        <div className="col-md-6 p-2">
          <div className="input-group mb-3 border-2">
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              placeholder="Search with Identy Number.."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon1"
              onClick={getFoundUser}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {foundedUser ? (
            <div key={foundedUser.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Full Name:{foundedUser.name}
                  {foundedUser.lastName}
                </h5>
                <p className="card-text">
                  İDENTY NUMBER:{foundedUser.identyNum}
                </p>
                <p className="card-text">
                  PHONE NUMBER:{foundedUser.phoneNumber}
                </p>
                <p className="card-text">
                  Birth Place -Birth Year:{foundedUser.birthPlace}-
                  {foundedUser.birthDate}
                </p>
                <p className="card-text">Profession:{foundedUser.degree}</p>
                <p className="card-text">Company : {foundedUser.company}</p>
                <hr />
                <p className="card-text">
                  {foundedUser.chiefUser ? (
                    <div>
                      <p>Chief Name : {foundedUser.chiefUser.name} </p>

                      <p>Chief Last Name : {foundedUser.chiefUser.lastName}</p>
                      <p>Chief Last Company :{foundedUser.chiefUser.company}</p>
                    </div>
                  ) : (
                    <p>-</p>
                  )}
                </p>
                <button className="btn btn-info float-start" disabled>
                  Last Update Time:{foundedUser.updatedTime.slice(0, 10)}
                </button>
                <button
                  onClick={() => deleteUser(foundedUser.id)}
                  className="btn btn-danger float-end"
                >
                  DELETE USER
                </button>
                <Link
                  className="nav-link"
                  to="/update"
                  state={{ name: `${info}` }}
                >
                  <button className="btn btn-secondary float-end me-4">
                    UPDATE
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
