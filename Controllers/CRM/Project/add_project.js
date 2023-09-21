const Project = require("../../../Models/CRM/Project.js");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "C:\\Users\\Administrator\\Desktop\\HRMS\\CRM_PROJECT\\Server\\uploads\\"; 
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

exports.add_project = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const {
        project_name,
        project_deadline,
        project_status,
        project_requirement,
        customer_id,
        department_id,
      } = req.body;

      upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
          console.error(err);
          return res.status(400).json({ message: "File upload error" });
        } else if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal server error" });
        }

        const project_sop = req.file; 
        console.log(req.file)
        const file_path = project_sop ? project_sop.path : null;

        const newProject = await Project.create({
          project_name: project_name,
          project_deadline: project_deadline,
          project_status: project_status,
          project_requirement: project_requirement,
          customer_id: customer_id,
          department_id: department_id,
          project_sop: file_path,
        });

        res.status(201).json(newProject); // Respond with the newly created project
      });
    }
  } catch (error) {
    next(error);
  }
};
