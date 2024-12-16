module.exports = class UserController {
    static async all(req, res) {
        await res.status(200).json({message: "All Ok!!!"})
    }
}