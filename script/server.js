// server.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Logique de traitement des données du formulaire (par exemple, envoyer un email)
  // Exemple d'utilisation de nodemailer pour envoyer un email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "klvr30e9dk@waterisgone.com",
      pass: "",
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: "klvr30e9dk@waterisgone.com",
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send("Erreur lors de l'envoi de l'email");
    } else {
      console.log("Email envoyé: " + info.response);
      res.send("Soumission de formulaire réussie!");
    }
  });
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
