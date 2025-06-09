import React from "react";
import { UserProps } from "../interfaces/index";
import UserCard from "@/components/common/UserCard";

const Users = ({ users }: { users: UserProps[] }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}
