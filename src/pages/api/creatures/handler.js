import * as Controllers from "./controller";

export async function handlerGet(req, res) {
  try {
    const apiCreatures = await Controllers.getAllApiCreatures();
    return res.status(200).json(apiCreatures);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function handlerGetByRace(req, res) {
  const { race } = req.query;
  try {
    const creature = await Controllers.getCreatureByRace(race);
    return res.status(200).json(creature);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
