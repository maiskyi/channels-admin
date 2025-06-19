// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { relationship, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";

export const Subscription = list<Lists.User.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ["user", "channel"],
    },
  },
  fields: {
    user: relationship({
      ref: "User",
    }),
    channel: relationship({
      ref: "Channel",
    }),
    createdAt: timestamp({
      defaultValue: {
        kind: "now",
      },
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
  },
});
