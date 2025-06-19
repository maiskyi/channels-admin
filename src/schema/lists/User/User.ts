// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { integer, text, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";

export const User = list<Lists.TelegramUser.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    labelField: "firstName",
    listView: {
      initialColumns: ["firstName", "lastName", "tid"],
    },
  },
  fields: {
    tid: integer({
      validation: {
        isRequired: true,
      },
      isIndexed: "unique",
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
    firstName: text({
      validation: {
        isRequired: true,
      },
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
    lastName: text({
      validation: {
        isRequired: true,
      },
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
    language: text({
      validation: {
        isRequired: true,
      },
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
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
