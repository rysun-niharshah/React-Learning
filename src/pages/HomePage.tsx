import UserCard, { ArrayCard, ButtonCard, User, UserCard1 } from "../components/ui/UserCard";

export default function HomePage() {

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-5">
          home page called
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <UserCard name="Props 1" data={25} />
          <UserCard1 name="500" />
          <User isAdmin={true} />
          <ArrayCard skills={["React", "JavaScript", "CSS"]} />
          <ButtonCard greet={() => alert("Click event fired!")} />
        </div>
      </div>
    </section>
  );
}
