function Card({user,onCardClick}) {
    return (
      <div
        onClick={onCardClick}
        key={user.id}
        className="card p-4 border rounded-md bg-stone-900 border-gray-700 flex-col justify-center h-50 w-64 items-center text-center"
      >
        <img
          src={user.avatar}
          alt={user.first_name}
          className="rounded-full mb-2 w-24 h-24 object-cover block mx-auto"
        />
        <h3 className="text-xl text-slate-300">
          {user.first_name} {user.last_name}
        </h3>
        <p className="text-slate-400">{user.email}</p>
      </div>
    );
}

export default Card
