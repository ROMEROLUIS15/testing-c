const catchError = require('../utils/catchError');
const Car = require('../models/Car');
const upload = require('../utils/multer');
const {uploadToCloudinary} = require('../utils/cloudinary')

const getAll = catchError(async(req, res) => {
    const cars = await Car.findAll()
    return res.json(cars)
});

const create = catchError(async(req,res) => {
    const file = req.file
    if (!file) res.status(400).json({message: "you must send image of the car"})
    const {url} = await uploadToCloudinary(file)
    const { brand, model, year } = req.body
    const car = await Car.create({
        brand,
        model,
        year,
        imageUrl: url,
    })
    return res.status(201).json(car)
})

module.exports = {
    getAll,
    create
}