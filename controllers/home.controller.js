const noteModel = require("../models/notes.model")
const jwt = require("jsonwebtoken");
module.exports.getAllNotes = async(req, res) => {
    let userID = req.header("userID");
    let token = req.header("token");
    jwt.verify(token , 'key' , async(err , decodedToken) => {
        if(err)
        {
            res.json({err})
        } else {
            console.log(decodedToken);
            let notes = await noteModel.find({userID});
            res.json(notes);  
        }
    });
}
module.exports.addNote = async(req, res) => {
    const {title , desc} = req.body;
    try {
        await noteModel.insertMany({userID:req.userID , title , desc});
        res.json({message : "note added successfully"});
    } catch (error) {
        res.json({error})
    }
}
module.exports.deleteNote = async(req, res) => {
    const {_id} = req.body;
    await noteModel.findByIdAndDelete({_id})
    res.json({message : "note deleted successfully"});
}
module.exports.updateNote = async(req, res) => {
    const {_id,title,desc} = req.body;
    try {
        await noteModel.findByIdAndUpdate({_id} , {title,desc});
        res.json({message : "note updated successfully"});
    } catch (error) {
        res.json({error})
    }
}