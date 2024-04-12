import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Admin, Resource } from "react-admin";
import {
  authProvider,
  dataProvider,
  firebaseEmulate,
} from "./providers/firebaseDataProvider";

import { theme } from "./providers/theme";
import { UserEdit, UserList } from "./resources/users";
import { isAdmin } from "./domain/acl";

firebaseEmulate();

export const App = () => (
  <Admin
    title="XS Admin"
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={theme}
  >
    {(permissions) => (
      <>
        {isAdmin(permissions.role) ? (
          <Resource
            name="users"
            recordRepresentation="name"
            icon={ManageAccountsIcon}
            list={UserList}
            edit={UserEdit}
          />
        ) : null}
      </>
    )}
  </Admin>
);
