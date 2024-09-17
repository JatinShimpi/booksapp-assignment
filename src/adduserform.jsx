// src/components/AddUserForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../services/userApi"; // RTK Mutation Hook
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice"; // Add user to Redux state

const AddUserForm = ({ onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [addUserAPI] = useAddUserMutation(); // Use the mutation to POST a new user
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await addUserAPI(data).unwrap(); // Make POST request
      dispatch(addUser(response)); // Update the Redux state with the new user
      reset(); // Reset form after submission
      onClose(); // Close the modal after user is added
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <div>
        <label className="block mb-2 text-lg">First Name</label>
        <input
          {...register("first_name")}
          className="block w-full border px-3 py-2 rounded"
          placeholder="Enter first name"
        />
      </div>

      <div>
        <label className="block mb-2 text-lg">Last Name</label>
        <input
          {...register("last_name")}
          className="block w-full border px-3 py-2 rounded"
          placeholder="Enter last name"
        />
      </div>

      <div>
        <label className="block mb-2 text-lg">Email</label>
        <input
          {...register("email")}
          className="block w-full border px-3 py-2 rounded"
          placeholder="Enter email"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-full"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
