import confirmSignUp from "../../lib/Auth/confirmSignup";

export default async function handler(req, res) {
  try {
    const code = req.query.code;
    const email = req.query.email;
    await confirmSignUp(email, code);
    res.redirect("/welcome");
  } catch (err) {
    console.error(err);
  }
}
