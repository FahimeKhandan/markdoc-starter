import { MoreParameters } from "../../components";

export const moreParameters = {
  render: "MoreParameters",
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
    },
    importantInfo: {
      type: String,
    },
  },
};
