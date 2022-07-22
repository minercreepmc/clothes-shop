import admin, { ServiceAccount } from 'firebase-admin';
import { FirebaseUser } from './firebase.types';

import serviceAccount from '../../../configs/serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

export async function verifyToken(accessToken: string): Promise<FirebaseUser> {
  return admin.auth().verifyIdToken(accessToken);
}
