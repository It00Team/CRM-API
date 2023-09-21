const Client = require("../../../Models/CRM/Client.js");

exports.update_customer = async (req, res, next) => {
  try {
    const authorised_user = req.user;

    if (
      authorised_user.designation === "team_leader" ||
      authorised_user.designation === "super_admin" ||
      authorised_user.designation === "admin"
    ) {
      const customerId = req.params.id; // Assuming you have a parameter for the customer ID

      const updatedFields = {
        name: req.body.name,
        regionType: req.body.regionType,
        externalSPOC: req.body.externalSPOC,
        onboardedBy: req.body.onboardedBy,
        status: req.body.status,
        leadType: req.body.leadType,
        remark: req.body.remark,
        lastFollowUp: req.body.lastFollowUp,
        projectName: req.body.projectName,
        projectStatus: req.body.projectStatus,
        stage1Note: req.body.stage1Note,
        stage2Note: req.body.stage2Note,
        finalRemark: req.body.finalRemark,
        sampleStatus: req.body.sampleStatus,
        projectSOP: req.body.projectSOP,
        projectDeadline: req.body.projectDeadline,
        projectDepartment : req.body.projectDepartment,
        sampleDeliveryDate: req.body.sampleDeliveryDate,
        qcDate: req.body.qcDate,
        deliveryDate: req.body.deliveryDate,
        clientFeedback: req.body.clientFeedback,
        assignedToOperation: req.body.assignedToOperation,
        assignedBy: req.body.assignedBy,
        assignedToQc: req.body.assignedToQc
      };

      const existingCustomer = await Client.findOne({
        where: { id: customerId },
      });

      if (!existingCustomer) {
        return res.status(404).json({ message: "Customer not found" });
      }

      await Client.update(updatedFields, {
        where: { id: customerId }
      });

      return res.status(200).json({ message: "Customer updated successfully" });
    } else {
      return res.status(403).json({ message: "You do not have permission to update a customer" });
    }
  } catch (error) {
    return next(error);
  }
};

