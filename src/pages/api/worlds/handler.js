import * as Controllers from "./controller";

export async function handlerGet(req, res) {
  try {
    const apiWorlds = await Controllers.getAllWorlds();
    return res.status(200).json(apiWorlds);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
