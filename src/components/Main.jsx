import Feed from "./Feed";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <>
      <div className="relative flex h-screen w-screen items-start justify-center">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};
export default Main;

// TODO 
// 1. Crear el componente para el feed
// 2. crear animaciones para el feed
// 3. Optimizar todo lo que no se vea bien