import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/users/UserSlice";

const Update = () => {
  const { id } = useParams();
  const userList = useSelector((state) => state.users);
  const users = userList.usersList;
  const existingUser = users.filter((ele) => ele.id == id);
  const { name, email } = existingUser[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, name: updateName, email: updateEmail }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="your name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="your email"
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info mt-3">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
