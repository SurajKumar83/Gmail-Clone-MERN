import Email from "../model/email.js";

export const saveSentEmails = (request, response) => {
  try {
    const email = new Email(request.body); // validates
    email.save(); // save email to database
    console.log("Saved email to database");
    response.status(200).json("email saved successfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};
export const getEmails = async (request, response) => {
  try {
    let emails;
    if (request.params.type === "bin") {
      {
        emails = await Email.find({ bin: true });
      }
    } else if (request.params.type === "allmail") {
      emails = await Email.find();
    } else if (request.params.type === "starred") {
      emails = await Email.find({ starred: true, bin: false });
    } else {
      emails = await Email.find({ type: request.params.type });
    }
    console.log(response.status);
    return response.status(200).json(emails);
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const moveEmailsToBin = async (request, response) => {
  try {
    await Email.updateMany(
      { _id: { $in: request.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return response.status(200).json("emails deleted successfully");
    // here $in is property of the mongodb which means to include and then $set is used to set the value to the data
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const toggleStarredEmails = async (request, response) => {
  try {
    await Email.updateOne(
      { _id: request.body.id },
      { $set: { starred: request.body.value } }
    );
    return response.status(200).json("email is starred marked");
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};

export const deleteEmail = async (request, response) => {
  try {
    await Email.deleteMany({ _id: { $in: request.body } });
    return response.status(200).json("email is deleted successfully");
  } catch (error) {
    console.log(error);
    response.status(500).json(error.message);
  }
};
