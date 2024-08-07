const roleModel = require('../models/RoleModel');

const addRole = async(req,res)=>{

    try{

        const savedRole = await roleModel.create(req.body);
        if(savedRole){
            res.status(201).json({
                message:"Role added successfully",
                data:savedRole
            })
        }
        else{
            res.status(400).json({
                message:"Role not added"
            })
        }

    }catch(err){

        res.status(500).json({
            message:err
        })

    }
}

const getAllRoles = async(req,res)=>{


        try{

            const roles = await roleModel.find();
            if(roles && roles?.length>0){
                res.status(200).json({
                    message:"Roles fetched successfully",
                    data:roles
                })
            }
            else{
                res.status(404).json({
                    message:"No roles found"
                })
            }

        }catch(err){
            res.status(500).json({
                message:err
            })
        }


}
module.exports = {
    addRole,
    getAllRoles
}