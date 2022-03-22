import JWT from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
    const { authorization } = req.headers;
    const { JWT_SECRETE_KEY } = process.env;

    // Checking for Authorization
    if (authorization == undefined) {
        res.status(400).send({ success: false, error: "Invalid Auth Request" });
        return;
    }

    const [bearer, token] = authorization.split(" ");
    // Validating if Authorization has Data in Correct Format. "bearer <token>"
    if (bearer !== "bearer") {
        res.status(400).send({ success: false, error: "Invalid Auth Request" });
        return;
    }

    // Verifying JWT
    try {
        const payload = JWT.verify(token, JWT_SECRETE_KEY);
        req.payload = { id: payload.id, isAdmin: payload.isAdmin };
        next();
    } catch (error) {
        res.status(401).send({ success: false, error: "Token Expired or Invalid" });
    }
};

export default verifyJWT;
