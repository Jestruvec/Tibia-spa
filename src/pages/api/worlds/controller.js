import axios from "axios";

//GET API SPELLS

export const getAllWorlds = async () => {
  const allApiWorlds = (await axios("https://api.tibiadata.com/v3/worlds")).data
    .worlds.regular_worlds;
  return allApiWorlds;
};
