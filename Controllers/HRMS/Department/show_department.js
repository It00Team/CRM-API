const Department = require('../../../Models/Users/department.js')

exports.show_department = async(req, res, next)=>{
    try {
        
        const departments = await Department.findAll()
        res.json(departments)

    } catch (error) {
        next(error)
    }
}
