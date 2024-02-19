const express = require("express");
const http = require("http");
const path = require("path");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const server = http.Server(app);
const port = 3000;

app.use(cors());

app.options("*", cors());

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  // Configuration du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jordi.predovic22@ethereal.email",
      pass: "XyFtccCjZn4XPfHK2p",
    },
  });

  // Message à envoyer
  const mailOptions = {
    from: `${name} ${email}`,
    to: "jordi.predovic22@ethereal.email",
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

server.listen(port, function () {
  console.log("Starting server on port:" + port);
});
