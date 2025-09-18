import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const trimmedId = id.trim(); // remove spaces/newlines
        const user = await User.findById(trimmedId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
