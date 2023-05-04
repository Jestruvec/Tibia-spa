import * as Controllers from "./controller";

export async function handlerGet(req, res) {
  try {
    const apiBosses = await Controllers.getAllApiBosses();
    return res.status(200).json(apiBosses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
