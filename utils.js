import { Alert, Linking, Platform } from "react-native";

//allow calling of agents from directory or chat tab
export const callNumber = (phone) => {
  let phoneNumber = phone;

  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }

  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        return "Number is unavailable at this time";
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => {
      const error = new Error("Something went wrong.");
      return error;
    });
};
