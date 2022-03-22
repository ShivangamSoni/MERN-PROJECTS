const bodyRequired = (req, res, next) => {
    const body = req.body;

    if (Object.keys(body).length === 0) {
        res.status(400).send({ success: false, error: "Missing Request Body" });
        return;
    }

    next();
};

export default bodyRequired;
