import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./userSlice";

const UpdateUserForm = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        email: email,
      })
    );

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClose}
          className="mr-2 bg-red-500 text-white py-1 px-4 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-1 px-4 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UpdateUserForm;
