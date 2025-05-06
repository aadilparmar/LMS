import User from "../models/User.js";
import { Purchase } from "../models/Purchase.js";
import Course from "../models/Course.js";
import { CourseProgress } from "../models/CourseProgress.js";
//Get User Data
export const getUserData = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//User Enrolled Courses with lecture link
export const userEnrolledCourses = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const userData = await User.findById(userId).populate('enrolledCourse');
    res.json({ success: true, enrolledCourses: userData.enrolledCourse });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Purchase Course
// export const purchaseCourse = async (req, res) => {
//   try {
//     const { courseId } = req.body;
//     const { origin } = req.headers;
//     const userId = req.auth.userId;
//     const userData = await User.findById(userId);
//     const courseData = await Course.findById(courseId);

//     if (!userData || !courseData) {
//       res.json({ success: false, message: "data not found" });
//     }
//     const purchaseData = {
//       courseId: courseData._id,
//       userId,
//       amount: (
//         courseData.coursePrice -
//         (courseData.discount * courseData.coursePrice) / 100
//       ).toFixed(2),
//     };
//     const newPurchase = await Purchase.create(purchaseData);

//     //Stripe Gateway Initialize
//     const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
//     const currency = process.env.CURRENCY.toLowerCase();

//     //Creating line items for stripe
//     const line_items = [
//       {
//         price_data: {
//           currency,
//           product_data: {
//             name: courseData.courseTitle,
//           },
//           unit_amount: Math.floor(newPurchase) * 100,
//         },
//         quantity: 1,
//       },
//     ];
//     const session = await stripeInstance.checkout.session.create({
//       session_url: `${origin}/loading/my-enrollments`,
//       cancel_url: `${origin}/`,
//       line_items: line_items,
//       mode: "payment",
//       metadata: { purchaseId: newPurchase._id.toString() },
//     });
//     res.json({success:true,session_url:session.url})
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// Update User Course Progress
export const updateUserCourseProgress = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { courseId, lectureId } = req.body;
    const progressData = await CourseProgress.findById({ userId, courseId });

    if (progressData) {
      if (progressData.lectrueCompleted.includes(lectureId)) {
        return res.json({
          success: true,
          message: "Lecture Already Compelted",
        });
      }
      progressData.lectrueCompleted.push(lectureId);
      await progressData.save();
    } else {
      await CourseProgress.create({
        userId,
        courseId,
        lectrueCompleted: [lectureId],
      });
    }
    res.json({ success: true, message: "progress Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Get User Course Progress
export const getUserCourseProgress = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { courseId } = req.body;
    const progressData = await CourseProgress.findById({ userId, courseId });
    res.json({ success: true, progressData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Add User Rating
export const addUserRating = async (req, res) => {
  const userId = req.auth.userId;
  const { courseId, rating } = req.body;
  if (!userId || !courseId || !rating || rating < 1 || rating > 5) {
    return res.json({ success: false, message: "Invalid Rating Details" });
  }
  try {
    const course = await Course.findById(courseId);
    if (!courseId) {
      res.json({ success: false, message: "Course Not FOund" });
    }
    const user = await User.findById(userId);
    if (!user || !user.enrolledCourse.includes(courseId)) {
      res.json({
        success: false,
        message: "User has Not Purchased this course",
      });
    }
    const existingRatingIndex = course.courseRating.findIndex(
      (r) => r.userId === userId
    );

    if (existingRatingIndex) {
      course.courseRating[existingRatingIndex].rating = rating;
    } else {
      course.courseRating.push({ userId, rating });
    }
    await course.save();
    return res.json({ success: true, message: "Rating Added" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
