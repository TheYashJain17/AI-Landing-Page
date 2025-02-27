import axios from "axios";
import successNtf from "./successNotification";
import errorNtf from "./errorNotification";

const sendEmail = async (userMail: string): Promise<void> => {
  try {
    if (!userMail) {
      console.log("Please Provide Email");

      return;
    }

    const response = await axios.post(
      "/api/sendemail",
      { userEmail: userMail },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("The response we are getting is", response);

    if (response?.data?.status === "Success") {
      setTimeout(() => {
        successNtf("An Email Has Been Sent To You");
      }, 3000);
    } else {
      setTimeout(() => {
        errorNtf("Our Server Is Down,Please Try Again Later");
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
