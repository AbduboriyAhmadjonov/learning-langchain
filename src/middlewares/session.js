import { session } from 'telegraf';

export default session({
  defaultSession: () => ({
    isAdmin: false,
  }),
});
