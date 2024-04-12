
import {
  ChipField,
  Datagrid,
  List,
  SearchInput,
  TextField,
} from "react-admin";
import { UserAvatarField } from '@/fields/UserAvatar';


const filters = [
  <SearchInput source="username" alwaysOn />,
];

export const UserList = () => (
  <List
    filters={filters}
  >
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <UserAvatarField source="profile.displayName" label=" "/>
      <TextField source="profile.displayName" label="Name" />
      <ChipField source="role" />
    </Datagrid>
  </List>
);
