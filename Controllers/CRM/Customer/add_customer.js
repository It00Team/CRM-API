const Client = require("../../../Models/CRM/Client.js");

exports.add_customer = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const {
        name,
        regionType,
        externalSPOC,
        onboardedBy,
        status,
        leadType,
        remark,
        lastFollowUp,
        projectName,
        projectStatus,
        projectDepartment,
        stage1Note,
        stage2Note,
        finalRemark,
        sampleStatus,
        projectSOP,
        projectDeadline,
        sampleDeliveryDate,
        qcDate,
        deliveryDate,
        clientFeedback,
        assignedToOperation,
        assignedBy,
        assignedToQc
      } = req.body;

      const existingCustomer = await Client.findOne({
        where: { name: name },
      });

      if (existingCustomer) {
        return res.status(400).json({ message: "This customer already exists" });
      }

      const newCustomer = await Client.create({
        name: name,
        regionType: regionType,
        externalSPOC: externalSPOC,
        onboardedBy: onboardedBy,
        status: status,
        leadType: leadType,
        remark: remark,
        lastFollowUp: lastFollowUp,
        projectName: projectName,
        projectStatus: projectStatus,
        stage1Note: stage1Note,
        stage2Note: stage2Note,
        finalRemark: finalRemark,
        sampleStatus: sampleStatus,
        projectSOP: projectSOP,
        projectDeadline: projectDeadline,
        projectDepartment : projectDepartment,
        sampleDeliveryDate: sampleDeliveryDate,
        qcDate: qcDate,
        deliveryDate: deliveryDate,
        clientFeedback: clientFeedback,
        assignedToOperation: assignedToOperation,
        assignedBy: assignedBy,
        assignedToQc: assignedToQc
      });

      return res.status(201).json(newCustomer); 
    } else {
      return res.status(403).json({ message: "You do not have permission to add a customer" });
    }
  } catch (error) {
    return next(error);
  }
};