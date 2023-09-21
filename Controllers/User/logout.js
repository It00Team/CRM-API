
exports.user_logout = async (req, res, next) => {

    try {
        res.json({ msg: "You have been logged out" });
    } catch (error) {
        next(error);
    }
};

