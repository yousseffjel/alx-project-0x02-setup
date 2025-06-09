import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const about = () => {
  return (
    <div>
      <Header />
      <div className="space-y-4">
        <Button
          label="Small & Rounded-sm"
          size="small"
          shape="rounded-sm"
          onClick={() => alert("Small Button Clicked")}
        />
        <Button
          label="Medium & Rounded-md"
          size="medium"
          shape="rounded-md"
          onClick={() => alert("Medium Button Clicked")}
        />
        <Button
          label="Large & Rounded-full"
          size="large"
          shape="rounded-full"
          onClick={() => alert("Large Button Clicked")}
        />
      </div>
    </div>
  );
};

export default about;
