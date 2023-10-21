import asyncHandler from '../middleware/asyncHandler.js';
import user from '../models/userModel.js';

// @desc    Auth user and get Token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async(req, res) => {
    res.send('auth User')
});


// @desc    Register user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async(req, res) => {
    res.send('register User')
});

// @desc    Logout user / clear the cookie
// @route   POST /api/users/logout
// @access  Private

const logoutUser = asyncHandler(async(req, res) => {
    res.send('logout User')
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async(req, res) => {
    res.send('get user Profile')
});

// @desc    Update user profile
// @route  PUT /api/users/login
// @access  Private

const updateUserProfile = asyncHandler(async(req, res) => {
    res.send('update user profile')
});


// @desc    Auth users
// @route   GET /api/users
// @access  Private/Admin

const getUsers = asyncHandler(async(req, res) => {
    res.send('get users')
});

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private(Admin)

const getUserByID = asyncHandler(async(req, res) => {
    res.send('get user by id')
});


// @desc    Delete user
// @route  DELETE /api/users/:id
// @access  Private/Admin

const deleteUser = asyncHandler(async(req, res) => {
    res.send('delete user')
});


// @desc    Update user
// @route  PUT /api/users/:id
// @access  Private/Admin

const updateUser = asyncHandler(async(req, res) => {
    res.send('update user')
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser
}