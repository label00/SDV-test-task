import { getSavedToken } from './shared/api/access-token';

const token = getSavedToken();
if (token) {
  window.open(`https://www.dating.com/people/#token=${token}`, '_self');
}
