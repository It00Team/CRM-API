const xlsx = require("xlsx");
const multer = require("multer");
const fs = require('fs');
const Client = require("../../../Models/CRM/Client");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "C:\\Users\\Administrator\\Desktop\\HRMS\\Extra BackUp\\backupDatabase\\sheets\\"; 
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueFileName = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const fileExtension = file.originalname.split(".").pop();
    const customFileName = uniqueFileName + "." + fileExtension;
    cb(null, customFileName);
  },
});

const upload = multer({ storage: storage }).single("file");

exports.add_many_client = async (req, res, next) => {

  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    // Access the uploaded file
    const file = req.file;
    const filePath = file.path;

    // Use xlsx to read the file
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelData = xlsx.utils.sheet_to_json(worksheet);

    excelData.forEach((row) => {
      Client.create({
        name: row["Clients Name"],
        regionType: row["Client Region Type"],
        externalSPOC: row["External SPOC"],
        onboardedBy: row["Client Onboarded by"],
        status: row["Client Status"],
        leadType: row["Lead type"],
        remark: row["Remark"],
        lastFollowUp: row["Last Follow-up"],
        projectName: row["Project Name"],
        projectStatus: row["Project Status"],
        stage1Note: row["Stage - 1 Note"],
        stage2Note: row["Stage - 2 Note"],
      })
      .then((client) => {
        console.log(`Client ${client.name} inserted successfully!`);
      })
      .catch((err) => {
        console.error(`Error inserting client: ${err}`);
      });
    });  

    // Delete the file after processing
    fs.unlinkSync(filePath);

    res.send("Data saved");
  });
};


