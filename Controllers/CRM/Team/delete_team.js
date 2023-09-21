const Team = require('../../../Models/CRM/Team.js');

exports.delete_team = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const deletedRowCount = await Team.destroy({
            where: { id },
        });
        
        if (deletedRowCount === 0) {
            return res.status(404).json({ message: 'Team not found' });
        }
        
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        next(error);
    }
}
