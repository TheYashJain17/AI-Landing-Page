import { toast } from "react-hot-toast";

const errorNtf = async(msg: string) => toast.error(msg);

export default errorNtf;