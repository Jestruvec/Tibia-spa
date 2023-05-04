import axios from "axios";

//GET API CREATURES

export const getAllApiBosses = async () => {
  const allApiBosses = (
    await axios("https://api.tibiadata.com/v3/boostablebosses")
  ).data.boostable_bosses.boostable_boss_list;
  return allApiBosses;
};
