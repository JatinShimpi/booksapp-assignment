import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "./userApi";
import { setUsers } from "./userSlice";
import Card from "./Card";
import AddUserForm from "./adduserform";
import Modal from "./Modal";
import UpdateUserForm from "./updateuserform";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetUsersQuery();
  const users = useSelector((state) => state.user.users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (data) {
      dispatch(setUsers(data.data));
    }
  }, [data, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching users</div>;

  const handleAddUserClick = () => {
    setIsModalOpen(true);
    setSelectedUser(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="user-dashboard">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <button
        onClick={handleAddUserClick}
        className="block font-inherit text-inherit text-2xl border-2 border-[var(--color-dark)] bg-[var(--color-dark)] px-6 py-3 cursor-pointer rounded-full transition duration-300"
      >
        Add
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            onCardClick={()=>handleCardClick(user)}
          />
        ))}
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <AddUserForm onClose={closeModal} />
        </Modal>
      )}

      {isModalOpen && selectedUser && (
        <Modal onClose={closeModal}>
          <UpdateUserForm user={selectedUser} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
