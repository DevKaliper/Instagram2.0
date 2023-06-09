import Post from "./Post";
import Stories from "./Stories"


const Feed = () => {
    const usuarios = [
        {
          id: 1,
          name: "usuario1",
          imagen: "https://placeimg.com/200/300/people?t=1"
        },
        {
          id: 2,
          name: "user_insta2",
          imagen: "https://placeimg.com/200/300/people?t=2"
        },
        {
          id: 3,
          name: "insta_3_user",
          imagen: "https://placeimg.com/200/300/people?t=3"
        },
        {
          id: 4,
          name: "insta_lover4",
          imagen: "https://placeimg.com/200/300/people?t=4"
        },
        {
          id: 5,
          name: "photo_addict5",
          imagen: "https://placeimg.com/200/300/people?t=5"
        },
        {
          id: 6,
          name: "insta_fasaatic6",
          imagen: "https://placeimg.com/200/300/people?t=9"
        },
        {
          id: 7,
          name: "insasdfata_fanatic6",
          imagen: "https://placeimg.com/200/300/people?t=7"
        },
        {
          id: 8,
          name: "insaassdfta_fanatic6",
          imagen: "https://placeimg.com/200/300/people?t=8"
        }
      ];
        
  return (
    <div className="h-full w-full bg flex flex-col justify-start items-center bg-white text-black p-6"><div  >
        <ul className="flex gap-4">

        <Stories users={usuarios} />
        </ul>
        
        </div>

        <div className=" flex flex-col justify-start items-center w-3/4  h-auto" >
        <Post img="https://upload.wikimedia.org/wikipedia/commons/6/65/Kylie_Jenner_in_2021.jpg" nick="kylie" />
        <Post img="https://upload.wikimedia.org/wikipedia/commons/7/7e/Kendall_Jenner_at_Met_Gala_2021_5.jpg" nick="kendal" />
        
   

        </div>
        
        </div>
  )
}

export default Feed