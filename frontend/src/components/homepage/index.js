import React from "react";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import { FourthSection } from "./fourthSection";

import { SeventhSection } from "./seventhSection";
import { ThirdSection } from "./thirdSection";

export function Homepage() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />

      <SeventhSection />
    </div>
  );
}
