import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleAnime } from "../API";
import { StyledAnimePage } from "./AnimePage.styles";

const AnimePage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(0);

  console.log(id);

  useEffect(() => {
    getSingleAnime(id).then((res) => setAnime(res.data.data));
  }, []);

  console.log(anime);
  return (
    <StyledAnimePage>
      <img src="" />
      <div> {anime.title}</div>
      <div>{anime.members}</div>
    </StyledAnimePage>
  );
};

export default AnimePage;
