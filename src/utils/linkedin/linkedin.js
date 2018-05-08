import nodeLinkedin from "node-linkedin";

import keys from "./linkedin-creds";

const linkedIn = nodeLinkedin(keys.appid, keys.secret);

export const getMyCurrentJob = async () => {
  awailinkedIn.people.me(myProfile => {
    console.log(myProfile);
  });
};
