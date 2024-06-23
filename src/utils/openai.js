import OpenAI from "openai";

const openai = new OpenAI({
  //   apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  //   organization: process.env.REACT_APP_OPENAI_ORG_ID,
  //   project: process.env.REACT_APP_OPENAI_PROJECT_ID,
  dangerouslyAllowBrowser: true,
});

export default openai;
