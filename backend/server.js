var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
const { OAuth2Client } = require("google-auth-library");

const Sequelize = require("sequelize");
const db = require("./models");

app.get("/get", (req, res) => {
  // res.json('data')
  db.images
    .findAll({
      raw: true
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

// endpoint to post new laptop details (controler)
app.post("/laptop_details", (req, res) => {
  var detail = req.body.data;
  db.laptops
    .create(
      {
        name: detail.name,
        owner: detail.owner,
        image: detail.image,
        ram: detail.ram,
        rom: detail.rom,
        color: detail.color,
        mac: detail.mac,
        ip: detail.ip,
        battery: detail.battery,
        active: detail.active,
        description: detail.description
      },
      { raw: true }
    )
    .then(data => {
      // posting owner details to owner table
      db.owners
        .create({
          laptop_id: data.id,
          owner_name: detail.owner,
          date: new Date().toString()
        })
        .then(data2 => {
          res.json(data);
        })
        .catch(err => console.error(err));
      console.log("data inserted into db");
    })
    .catch(err => console.log(err));
});

// post method to post new owner and update new owner
app.post("/newOwner", (req, res) => {
  db.owners
    .create(
      {
        laptop_id: req.body.data.id,
        owner_name: req.body.data.owner,
        date: req.body.data.date
      },
      { raw: true }
    )
    .then(data => {
      console.log("new owner posted");
      res.json(data);
    })
    .catch(err => console.error(err));

  // updating new owner in laptops table
  db.laptops
    .update(
      {
        owner: req.body.data.owner
      },
      {
        raw: true,
        where: { id: req.body.data.id }
      }
    )
    .then(data1 => {
      console.log("new owner updated");
    })
    .catch(err => console.error(err));
});

// post new Admin
app.post("/newAdmin", (req, res) => {
  db.admins
    .create({
      email: req.body.data.email
    })
    .then(data => {
      console.log("admin updated");
      res.json("admin updated");
    })
    .catch(err => console.error(err));
});

// delete Admin
app.post("/removeAdmin", (req, res) => {
  if (req.body.data.email !== "jagannath18@navgurukul.org") {
    db.admins
      .destroy(
        {
          where: { email: req.body.data.email }
        },
        { raw: true }
      )
      .then(data => {
        console.log("admin removed");
        res.json(data);
      })
      .catch(err => console.error(err));
  } else {
    res.json("err");
  }
});

// get admin details
app.get("/getAdmin", (req, res) => {
  db.admins
    .findAll({
      raw: true
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => console.error(err));
});

// post method to add new maintenance details
app.post("/postMaintenance", (req, res) => {
  const reqdata = req.body.data;
  db.maintenances
    .create(
      {
        laptop_id: reqdata.id,
        date: reqdata.date,
        owner: reqdata.owner,
        status: reqdata.status,
        description: reqdata.description
      },
      { raw: true }
    )
    .then(data => {
      console.log("data posted in maintenance table ");
      res.json(data);
    })
    .catch(err => console.error(err));
});

// post method to update active status
app.post("/updateActiveStatus", (req, res) => {
  db.laptops
    .update(
      {
        active: req.body.data.active
      },
      {
        raw: true,
        where: { id: req.body.data.id }
      }
    )
    .then(data => {
      console.log("active status updated");
      res.json(data);
    })
    .catch(err => console.error(err));
});

// post method to update battery status
app.post("/updateBatteryStatus", (req, res) => {
  db.laptops
    .update(
      {
        battery: req.body.data.battery
      },
      {
        raw: true,
        where: { id: req.body.data.id }
      }
    )
    .then(data => {
      console.log("battery status updated");
      res.json(data);
    })
    .catch(err => console.error(err));
});

// update description
app.post("/updateDescription", (req, res) => {
  // console.log(req.body.data);
  db.laptops
    .update(
      {
        description: req.body.data.description
      },
      {
        raw: true,
        where: { id: parseInt(req.body.data.id) }
      }
    )
    .then(data => {
      console.log("description updated");
      res.json(data);
    })
    .catch(err => console.error(err));
});

// update Mac Address
app.post("/newMac", (req, res) => {
  // console.log(req.body.data);
  db.laptops
    .update(
      {
        mac: req.body.data.mac
      },
      {
        raw: true,
        where: { id: parseInt(req.body.data.id) }
      }
    )
    .then(data => {
      console.log("new Mac updated");
      res.json(data);
    })
    .catch(err => console.error(err));
});

// update IP Address
app.post("/newIP", (req, res) => {
  // console.log(req.body.data);
  db.laptops
    .update(
      {
        ip: req.body.data.ip
      },
      {
        raw: true,
        where: { id: parseInt(req.body.data.id) }
      }
    )
    .then(data => {
      console.log("new IP updated");
      res.json(data);
    })
    .catch(err => console.error(err));
});

// get method to get all laptop details
app.get("/getList", (req, res) => {
  db.laptops
    .findAll({
      raw: true
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => console.error(err));
});

// get method to get description of a particular laptop by id
app.get("/laptopDescription/:id", (req, res) => {
  //   console.log(req.params.id);

  const laptopId = req.params.id;
  db.laptops
    .findAll({
      raw: true,
      where: { id: laptopId }
    })
    .then(data => {
      //   console.log(data);
      res.json(data);
    })
    .catch(err => console.error(err));
});

// get method to get maintenance details
app.get("/getMaintenance/:id", (req, res) => {
  const laptopId = req.params.id;
  db.maintenances
    .findAll({
      raw: true,
      where: { laptop_id: laptopId }
    })
    .then(data => {
      // console.log(data);
      res.json(data);
    })
    .catch(err => console.error(err));
});

// get method to get maintenance details
app.get("/getOwners/:id", (req, res) => {
  const laptopId = req.params.id;
  db.owners
    .findAll({
      raw: true,
      where: { laptop_id: laptopId }
    })
    .then(data => {
      // console.log(data);
      res.json(data);
    })
    .catch(err => console.error(err));
});

// post method to decode token
app.post("/verifyToken", (req, res) => {
  const client = new OAuth2Client(
    "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
  );
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.token,
      audience:
        "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
    });
    const payload = ticket.getPayload();
    const userid = payload["email"];
    // write your code here------
    // console.log(userid);
    db.admins
      .findAll({
        raw: true,
        where: { email: userid }
      })
      .then(data => {
        if (data.length > 0 || userid === 'jagannath18@navgurukul.org') {
          console.log("login successfull");
          res.json(data);
        } else {
          res.json("err");
        }
      })
      .catch(err => console.error(err));
  }
  verify().catch(console.error);
});

// check the token for expire
app.post("/checkToken", (req, res) => {
  const client = new OAuth2Client(
    "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
  );
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.token,
      audience:
        "967857975367-jub8m2slcbggvqhp6hbepaodsadavsoc.apps.googleusercontent.com"
    });
    const payload = ticket.getPayload();
    const userid = payload["email"];
    res.json(userid);
  }
  verify().catch(console.error);
});

app.listen((PORT = 8001), () => {
  console.log(`your app is running on port ${PORT}`);
});
