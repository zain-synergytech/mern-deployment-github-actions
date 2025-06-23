import { useEffect, useState } from "react";
import config from "./config";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.apiUrl + "/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Random Users</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          width: "100%",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <img
              src={user.avatar}
              alt={user.name}
              width="100%"
              style={{ borderRadius: "50%" }}
            />
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>GitHub Actions Deployment Pipeline</h1>
      <UsersList />
    </div>
  );
}

export default App;
