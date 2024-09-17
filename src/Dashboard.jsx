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
    <div className="flex flex-col justify-center justify-items-center text-center">
      <h1 className="text-5xl font-bold mb-2 text-neutral-200">
        Dashboard
      </h1>
      <div>
        <button
          onClick={handleAddUserClick}
          className="font-inherit text-inherit text-2xl border-2 border-[var(--color-dark)] bg-[var(--color-dark)] px-6 py-2 cursor-pointer rounded-full transition duration-300 my-4 bg-neutral-400"
        >
          <p>Add</p>
        </button>
      </div>
      <div className="gap-10 flex flex-wrap justify-center justify-items-center space-x-4">
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            onCardClick={() => handleCardClick(user)}
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
