import { ParamaterItem } from "../../components";

export const paramaterItem = {
  render: "ParamaterItem",
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
    },
    details: {
      type: String,
    },
    importantInfo: {
      type: String,
    },
  },
};
