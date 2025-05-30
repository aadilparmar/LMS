import { Webhook } from "svix";
import User from "../models/User.js";
import { Purchase } from "../models/Purchase.js";
import Stripe from "stripe";
import Course from "../models/Course.js";

//API Controller function to manage clerk user with database

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });
    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await User.findByIdAndUpdate(data.id);
        res.json({});
        break;
      }
      default:
        break;
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const stripeWebhooks = async (request, response) => {
//   const sig = request.headers["stripe-siganture"];
//   let event;
//   try {
//     event = Stripe.webhooks.constructEvent(
//       request.body,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     response.status(400).send(`Webhooks Error ${err.message}`);
//   }
//   //Handle Event
//   switch (event.type) {
//     case "payment_intent.succeeded": {
//       const paymentIntent = event.data.object;
//       const paymentIntentId = paymentIntent.id;

//       const session = await stripeInstance.checkout.session.list({
//         payment_intent: paymentIntentId,
//       });
//       const { purchaseId } = session.data[0].metadata;
//       const purchaseData = await Purchase.findById(purchaseId);
//       const userData = await User.findById(purchaseData.userId);
//       const courseData = await Course.findById(
//         purchaseData.courseId.toString()
//       );

//       courseData.enrolledStudents.push(userData);
//       await courseData.save();

//       userData.enrolledCourses.push(courseData._id);
//       await userData.save();

//       purchaseData.status = "completed";
//       await purchaseData.save();
//       break;
//     }
//     case "payment_method.payment_failed": {
//       const paymentIntent = event.data.object;
//       const paymentIntentId = paymentIntent.id;

//       const session = await stripeInstance.checkout.session.list({
//         payment_intent: paymentIntentId,
//       });
//       const { purchaseId } = session.data[0].metadata;
//       const purchaseData = await Purchase.findById(purchaseId);
//       purchaseData.status = "failed";
//       await purchaseData.save();

//       break;
//     }
//     default: {
//       console.log(`Unhandled Event Type ${event.type}`);
//       break;
//     }
//   }
//   res.json({ received: true });
// };
