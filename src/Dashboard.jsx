// src/components/Dashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "./userApi"; // RTK Query API hook
import { setUsers } from "./userSlice"; // Actions to set users in slice
import Card from "./Card";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetUsersQuery(); // Fetch data using RTK Query
  const users = useSelector((state) => state.user.users); // Select users from Redux store

  // Store fetched users in Redux state
  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.data)); // Dispatch the fetched data to the slice
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  

  return (
    <div className="user-dashboard">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
      <button className="block font-inherit text-inherit text-2xl border-2 border-[var(--color-dark)] bg-[var(--color-dark)] px-6 py-3 cursor-pointer rounded-full transition duration-300">
        Add
      </button>
    </div>
  );
};

export default Dashboard;
