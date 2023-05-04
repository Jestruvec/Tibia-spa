export default function handler(req, res) {
  res.status(200).json({
    email: "jestruvec@gmail.com",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  });
}
