import { ParameterPlus } from "../../components";

export const parameterPlus = {
  render: "ParameterPlus",
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
      required: true,
    },
  },
};
