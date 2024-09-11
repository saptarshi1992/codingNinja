
const validate = (req, res, next) => {
    const { name, desc, price, imageurl } = req.body;
    let errors = [];
    if (!name || name.trim() == '') {
        errors.push("Name should not be blank!");
    }
    if (name.length <= 2) {
        errors.push("Name should not be less then 2!");
    }
    if (name.desc <= 5) {
        errors.push("Description should not be less then 5!");
    }
    if (!price || parseFloat(price) < 1) {
        errors.push("Price is not define")
    }
    try {
        new URL(imageurl);
    } catch (err) {
        errors.push('URL is invalid');
    }
    if (errors.length > 0) {
        return res.render("add-product", { errors: errors });
    }
    next();
}
module.exports = validate;