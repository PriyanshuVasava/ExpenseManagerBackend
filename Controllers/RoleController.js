const roleSchema = require("../Models/RoleModel");

const createRole = async (req, res) => {
   
    try{
        const createdRole = await roleSchema.create(req.body);
        
        res.status(201).json({
            message:"role created successfully",
            data:createdRole,
            flag:1
        })
    } catch(err){
        res.status(500).json({
            message:"error creating role",
            error:err,
            flag:-1
        })
    }
}

const getRole = async (req, res) => {
   
    try{
        const roleData = await roleSchema.find();
        
        res.status(200).json({
            message:"getRole...",
            data:roleData,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error getting role",
            error:err,
            flag:-1
        })
    }
}

const getRoleById = async (req, res) => {
   
    try{
        const role = await roleSchema.findById(req.params.id);
        
        res.status(200).json({
            message:"role found",
            data:role,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"role not found",
            error:err,
            flag:-1
        })
    }
}

const updateRoleById = async (req, res) => {
   
    try{
        const id = req.params.id;
        const newData = req.body;

        const updatedRole = await roleSchema.findByIdAndUpdate(id, newData);
        
        res.status(200).json({
            message:"role updated successfully",
            data:updatedRole,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error updating role",
            error:err,
            flag:-1
        })
    }
}

const deleteRoleById = async (req, res) => {
   
    try{
        const deletedRole = await roleSchema.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            message:"role deleted successfully",
            data:deletedRole,
            flag:1
        })
    } catch(err){
        res.status(404).json({
            message:"error deleting role",
            error:err,
            flag:-1
        })
    }
}

module.exports = {
    createRole,
    getRole,
    getRoleById,
    updateRoleById,
    deleteRoleById
}