
import connectDB from "../../middlewares/connectDB";
const handler = async (req, res) => {


        return res.status(200).json({type: "success", message: "Working" })
    
}


export default connectDB(handler); 