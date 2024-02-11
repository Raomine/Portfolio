const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur de formulaire de contact.");
});
// Route pour la soumission du formulaire
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  // Configuration du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "noel35@ethereal.email",
      pass: "tXeknZ9jE6yXw7ncQW",
    },
  });

  // Message à envoyer
  const mailOptions = {
    from: `${name} ${email}`,
    to: "noel35@ethereal.email", // Remplacez par votre adresse de réception
    subject: "Sujet de l'e-mail",
    text: `${message}`,
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
      res.send("Erreur lors de l'envoi de l'e-mail");
    } else {
      console.log("E-mail envoyé avec succès! Informations:", info);
      res.send("Soumission de formulaire réussie!");
    }
  });
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
