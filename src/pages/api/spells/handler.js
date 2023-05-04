import * as Controllers from "./controller";

export async function handlerGet(req, res) {
  try {
    const apiSpells = await Controllers.getAllSpells();
    return res.status(200).json(apiSpells);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
