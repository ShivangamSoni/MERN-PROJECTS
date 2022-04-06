import { Router } from "express";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_KEY);

const router = Router();

/**
 * @method POST
 * @listens /api/v1/stripe/
 * @description Make Payment
 */
router.post("/", (req, res) => {
  const { tokenId, amount } = req.body;
  stripe.charges.charge(
    {
      source: tokenId,
      amount: amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
        return;
      }

      res.json({ success: true, data: stripeRes });
    },
  );
});

export default router;
