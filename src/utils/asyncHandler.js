const asyncHandler = (requestHandler)=>{
    return (req, res, next)=>{
        Promise.resolve(requestHandler(req,res, next)).reject((err)=> next(err))
    }
}

export {asyncHandler}


// const asyncHandler = (fn)=>{
//     return async(req, res, next)=>{
//         try{

//         }catch(err){
//             res.status(err.code || 500).json({
//                 success:false,
//                 message:err.message
//             })
//         }
//     }
// }