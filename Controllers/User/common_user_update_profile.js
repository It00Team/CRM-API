const User = require('../../Models/Users/user.js') 

exports.update_user_profile = async (req, res, next) => {
    try {
       
        const id = req.user.id
        const {
            name,
            department_id,
            email,
            phone,
            designation,
            emp_type,
            dob,
            gender,
            place_birth,
            religion,
            nationality,
            blood_group,
            father_name,
            mother_name,
            marital_status,
            date_of_wedding,
            city,
            district,
            pin_code,
            state,
            address,
        } = req.body;

        const existingProfile = await User.findByPk(id);
        if (!existingProfile) {
            return res.status(404).json({
                message: "User profile not found"
            });
        }

        existingProfile.name = name;
        existingProfile.department_id = department_id;
        existingProfile.email = email;
        existingProfile.phone = phone;
        existingProfile.designation = designation;
        existingProfile.emp_type = emp_type;
        existingProfile.dob = dob;
        existingProfile.gender = gender;
        existingProfile.place_birth = place_birth;
        existingProfile.religion = religion;
        existingProfile.nationality = nationality;
        existingProfile.blood_group = blood_group;
        existingProfile.father_name = father_name;
        existingProfile.mother_name = mother_name;
        existingProfile.marital_status = marital_status;
        existingProfile.date_of_wedding = date_of_wedding;
        existingProfile.city = city;
        existingProfile.district = district;
        existingProfile.pin_code = pin_code;
        existingProfile.state = state;
        existingProfile.address = address;

        await existingProfile.save();
        res.json(existingProfile);

        
    } catch (error) {
        next(error);
    }
};