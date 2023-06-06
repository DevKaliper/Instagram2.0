import { BiHomeAlt2, BiSearch, BiCompass, BiRightArrow,BiMessageRoundedDots, BiHeart, BiBookAdd} from "react-icons/bi";

const Sidebar = () => {

    const iconos = [
        {
            id: 1,
            nombre: 'Home',
            icono: <BiHomeAlt2/>,
            
        },
        {
            id: 2,
            nombre: 'Busqueda',
            icono: <BiSearch/>,
           
        },
        {
            id: 3,
            nombre: 'Explorar',
            icono: <BiCompass/>,},
          
        {
            id: 4,
            nombre: 'Reels',
            icono: <BiRightArrow/>,
          
        },
        {
            id: 5,
            nombre: 'Mensajes',
            icono: <BiMessageRoundedDots/>,
          
        },
        {
            id: 6,
            nombre: 'Notificaciones',
            icono: <BiHeart/>,
          
        },
        {
            id: 7,
            nombre: 'Crear',
            icono: <BiBookAdd/>,
          
        },
]
    
  return (
    <div className="flex h-full w-[250px] flex-col items-center justify-start border-r-2  border-[#262626]  bg-white p-5 text-black">
      <div >
        <a href="https://ibb.co/SDThhfT">
          <img
            src="https://i.ibb.co/fVRhhDR/pngegg.png"
            alt="pngegg"
            border="0"
          />
        </a>
      </div>

      <div className=" h-full w-full flex flex-col justify-start items-start gap-4  mt-5"> {iconos.map((users) =>{
            return (
                <div key={users.id} className="mt-5 ">
                    <div className="flex justify-center items-center  gap-3 w-full">
                    <p className="text-3xl">{users.icono}</p>
                    <p className="text-xl">{users.nombre}</p>

                    </div>
                    
                </div>
            )
      })}</div>
    </div>
  );
};

export default Sidebar;
