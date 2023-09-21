const Client = require("../../../Models/CRM/Client");
const Project = require("../../../Models/CRM/Project");
const Department = require("../../../Models/Users/department");
const User = require("../../../Models/Users/user");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.get_number = async(req, res, next)=>{
    try {
        const employee = await User.count();
        const department = await Department.count();
        const project = await Project.count();
        const customer = await Client.count();

        const completed_projects = await Client.count({where : {projectStatus : 'Completed'}})
        const onboarded_projects = await Client.count({where : {projectStatus : 'Onboarded'}})
        const working_projects = await Client.count({where : {projectStatus : 'Working'}})
        const pending_projects = await Client.count({where : {projectStatus : 'Pending'}})

        const latest_project = await Project.findOne()

        const getCustomersByUserAndMonth = async (user_name) => {
            const customers = await Client.findAll({
                where: {
                    onboardedBy: user_name
                },
                attributes: [
                    [Sequelize.fn('MONTH', Sequelize.col('createdAt')), 'month'],
                    [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
                ],
                group: [
                    Sequelize.fn('MONTH', Sequelize.col('createdAt')),
                    'id'
                ],
                raw: true
            });
        
            return customers;
        }

        const rida_customer = await getCustomersByUserAndMonth('Rida Abbasi');
        const nupendra_customer = await getCustomersByUserAndMonth('Nupendra');
        const poonam_customer = await getCustomersByUserAndMonth('Poonam Chadokar');



        const data = {
            employee : employee,
            department : department,
            project : project,
            customer : customer,
            completed_projects : completed_projects,
            onboarded_projects : onboarded_projects,
            working_projects : working_projects,
            pending_projects : pending_projects,
            latest_project : latest_project,
            rida_customer : rida_customer,
            nupendra_customer : nupendra_customer, 
            poonam_customer : poonam_customer
        }

        console.log(data)
        res.json(data);



    } catch (error) {
        next(error);
    }
}