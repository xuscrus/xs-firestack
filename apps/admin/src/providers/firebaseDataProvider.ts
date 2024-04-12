import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from 'react-admin-firebase';
import { getFirebaseConfig } from './firebaseConfig';
export { firebaseEmulate } from './firebaseConfig'
const config = getFirebaseConfig()


// All options are optional
const options = {
  // Enable logging of react-admin-firebase
  logging: false,
  // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
  persistence: 'local' as 'local',
  // NOTE: Hides 'deleted' records from list views unless overridden by filtering for {deleted: true} 
  // Adds 'deleted' meta field for non-destructive deleting functionality
  softDelete: true,
  // Disable the metadata; 'createdate', 'lastupdate', 'createdby', 'updatedby'
  disableMeta: false,
  renameMetaFields: {
    created_at: 'createdAt', // default: 'createdate'
    created_by: 'createdBy', // default: 'createdby'
    updated_at: 'updatedAt', // default: 'lastupdate'
    updated_by: 'updatedBy', // default: 'updatedby'
  },
  watch: [],
  associateUsersById: true,
  metaFieldCasing: 'camel' as 'camel',
  useFileNamesInStorage: false,
  // Prevents document from getting the ID field added as a property
  dontAddIdFieldToDoc: true,
}

export const authProvider = FirebaseAuthProvider(config, options);
export const dataProvider = FirebaseDataProvider(config, options);


const getFirebasePermissions =
  authProvider.getPermissions.bind(authProvider);

authProvider.getPermissions = async (props) => {
  const claims = await getFirebasePermissions({});
  return {
    role: (claims || {}).role || 'guest'
  }
};