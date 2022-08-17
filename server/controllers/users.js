const User = require("../models/User");

//description: Get All Users
//route endpoint : /users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//description: Add a User
//route endpoint: /users/add
exports.addUser = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    const user = await User.create(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error._message === "user validation failed") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

//description: Delete a user
//route endpoint: /users/delete/:id
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }

    await user.remove();
    return res.status(200).json({
      success: true,
      deletedData: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//description: Update a user
//route endpoint: /users/update/:id
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No user found",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      user.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      updatedData: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
