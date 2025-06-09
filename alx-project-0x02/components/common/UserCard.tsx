import React from "react";
import { UserProps } from "../../interfaces/index";

const UserCard = ({ user }: { user: UserProps }) => {
  const address = user.address;
  const composedAddress = `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;
  console.log(composedAddress);
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Address:{composedAddress}</p>
    </div>
  );
};

export default UserCard;
