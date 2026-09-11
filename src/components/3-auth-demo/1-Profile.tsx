import { useAuthStore, type User } from '../../stores/authStore';
import { useThemeStore } from '../../stores/themeStore';

const userObj: User = {
  id: 1,
  name: 'Ucup',
  email: 'ucup@gmail.com',
  password: '123456',
};

function Profile() {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const theme = useThemeStore((themePrev) => themePrev.theme);

  if (!user) {
    return (
      <div>
        <p>Hehehe, user belum login nih....</p>
        <button
          onClick={() => {
            login(userObj);
          }}
        >
          Login
        </button>
      </div>
    );
  }
  return (
    <section
      style={{
        backgroundColor: theme === 'light' ? 'green' : 'blue',
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      <h2>Hello , {user?.name}</h2>
      <p>email : {user?.email}</p>

      <button onClick={logout}>Logout</button>
    </section>
  );
}

export default Profile;
