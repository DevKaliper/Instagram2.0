/* eslint-disable react/prop-types */
const Stories = ({ users }) => {
  return (
    <>
      
        {users.map((user) => (
          <li key={user.id} className="flex flex-col items-center space-y-1 ">
            <div className="rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 ">
              <a
                href="#"
                className="block transform rounded-full bg-white p-1 transition hover:-rotate-6 ">
                <img
                  className="h-32 w-32  rounded-full object-cover "
                  src={user.imagen}
                  alt={user.name}
                />
              </a>
            </div>
            <p>{user.name}</p>
            </li>
        ))}
      
    </>
  );
};
export default Stories;
