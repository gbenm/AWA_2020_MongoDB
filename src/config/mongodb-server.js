const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Josue:@galeano4014@cluster0-bik2b.mongodb.net/Test", { useNewUrlParser: true }).then(() => {
    console.log("Servidor de DB activo")
})
.catch(
    () => console.log("Error")
);

module.exports = mongoose;

