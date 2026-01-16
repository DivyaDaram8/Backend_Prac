import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //basic validation
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Must enter all the required fields" });
    }
    const normalizedUsername = username.toLowerCase();
    const normalizedEmail = email.toLowerCase();

    // checking if the user already exists
    const isExist = await User.findOne({
      $or: [{ email: normalizedEmail }, { username: normalizedUsername }],
    });

    if (isExist) {
      return res.status(400).json({ message: "User exists already" });
    }

    // Create user if the required fields are given and if user doesnot exists
    const user = await User.create({
      username: normalizedUsername,
      email: normalizedEmail,
      password,
    });

    return res.status(201).json({
      message: "User Registered",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
    const normalizedEmail = email.toLowerCase();
    const user = await User.findOne({
      email: normalizedEmail,
    });
    if (!user) {
      return res.status(400).json({ message: "User did not exist" });
    }
    // console.log(typeof user.comparePassword);
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    } else {
      return res.status(200).json({
        message: "User Logged in",
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    } else {
      return res.status(200).json({
        message: "Logout successful",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
      err,
    });
  }
};
