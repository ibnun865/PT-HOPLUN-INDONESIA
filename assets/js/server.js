const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");

const app = express();

const upload = multer({dest:"uploads/"});

app.post("/booking", upload.single("ktp"), async(req,res)=>{

const data = req.body;

const qr = await QRCode.toDataURL(data.email);

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:"muhamadwahab875gmail.com",
pass:"app_password"
}
});

await transporter.sendMail({

from:"muhamadwahab875gmail.com",
to:"muhamadwahab875gmail.com",

subject:"New Visitor Booking",

html:`
<h2>Visitor Booking</h2>

Nama : ${data.nama}<br>
Company : ${data.company}<br>
Email : ${data.email}<br>
Tanggal : ${data.date}<br>

<img src="${qr}" width="150"/>
`

});

res.send("Booking Sent");

});

app.listen(3000,()=>console.log("Server Running"));