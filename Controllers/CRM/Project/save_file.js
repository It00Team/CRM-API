const multer = require("multer");
const fs = require("fs");
const Project = require("../../../Models/CRM/Project.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir =
      "C:\\Users\\Administrator\\Desktop\\HRMS\\CRM_PROJECT\\Server\\uploads\\";

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {  
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

exports.add_file = async (req, res, next) => {
  try {
    const id = req.params.id;
    const existingProject = await Project.findByPk(id);

    upload.single("file")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: "File upload failed" });
      }

      existingProject.project_sop = req.file.path;
      await existingProject.save();

      return res.status(201).json(existingProject);
    });
  } catch (error) {   
    next(error);       
  }
};
