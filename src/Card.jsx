function Card({user,onCardClick}) {
    return (
      
        <div onClick={onCardClick} key={user.id} className="card p-4 border">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="rounded-full mb-2"
          />
          <h3 className="text-xl">
            {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
    );
}

export default Card
