type UserCardProps = {
  name: string;
  data: number;
};

type UserCard1 = {
  name: string;
};

type PropsBoolean = {
  isAdmin: boolean;
};

export function UserCard1({ name }: { name: string }) {
  return <strong>{name}</strong>;
}

export function User({ isAdmin }: PropsBoolean) {
  return <p>{isAdmin ? "Admin" : "User"}</p>;
}

export function ArrayCard({ skills }: { skills: string[] }) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

export function ButtonCard({ greet }: { greet: () => void }) {
  return <button onClick={greet}>Click Me</button>;
}

function UserCard({ name, data }: UserCardProps) {
  return (
    <>
      <div className="props-card shadow-md rounded-lg p-4">
        <h2>Props String: {name}</h2>
        <p>Props Number: {data}</p>
        <UserCard1 name="common" />
      </div>
    </>
  );
}

export default UserCard;