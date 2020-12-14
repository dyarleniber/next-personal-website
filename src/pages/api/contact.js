import sendContactEmail from "../../utils/sendContactEmail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    if (!email) {
      return res.status(400).json({ e: "email required" });
    }

    if (!message) {
      return res.status(400).json({ e: "message required" });
    }

    try {
      await sendContactEmail({ email, message });
      return res.status(200).end();
    } catch (e) {
      return res.status(500).json({ e: `${e.name}: ${e.message}` });
    }
  }

  return res.status(400).end();
}
