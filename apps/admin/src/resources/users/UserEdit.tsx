import {
  Edit,
  EmailField,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  ToolbarProps,
} from "react-admin";
import Box from '@mui/material/Box'
import { UserAvatarField } from "@/fields/UserAvatar";
import { RolesOptions } from "@/domain/acl";


const SaveOnlyToolBar = (props: ToolbarProps) => (
  <Toolbar {...props} >
      <SaveButton />
  </Toolbar>
);

export const UserEdit = () => (
  <Edit >
    <SimpleForm mode="onSubmit" reValidateMode="onSubmit" sanitizeEmptyValues toolbar={<SaveOnlyToolBar/>}>
      <Box display='flex' flexDirection='row' alignItems='baseline' gap={2}>
        <TextInput source="profile.displayName" />
        <UserAvatarField source="profile.displayName" />
      </Box>
      
      <SelectInput source="role" choices={RolesOptions} />
      <EmailField source="email" />
    </SimpleForm>
  </Edit>
);