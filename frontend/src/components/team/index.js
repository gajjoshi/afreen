import React, { useState } from "react";

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const members = [
    { photo: "PHOTO OF MEMBER", brief: "brief of member" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "change1 OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "change2 OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
    { photo: "PHOTO OF MEMBER", brief: "BRIEF OF MEMBER" },
  ];

  const slides = Math.ceil(members.length / 4);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const renderDots = () => {
    return Array.from({ length: slides }, (_, index) => (
      <span
        key={index}
        className={`team-dot ${index === currentSlide ? "team-active" : ""}`}
        onClick={() => handleDotClick(index)}
      ></span>
    ));
  };

  const renderMembers = () => {
    const startIndex = currentSlide * 4;
    return members.slice(startIndex, startIndex + 4).map((member, index) => (
      <div className="team-member" key={index}>
        <div className="team-member-photo">{member.photo}</div>
        <div className="team-member-brief">{member.brief}</div>
      </div>
    ));
  };

  return (
    <div className="team-container mt-32 w-full">
      <div className="team-ceo-section">
        <div className="team-ceo-photo h-fll h-[300px]">CEO's PHOTO</div>
        <div className="team-ceo-message h-full">
          <h1>CEO's Message</h1>
          <h5>Welcome to Afreen International Tours & Travels</h5>
          <h5>Dear Friends and Partners,</h5>
          <h5>
            I am Mr. Sagir Hasan Khan, the CEO of Afreen International Tours &
            Travels. It is with immense pride and a profound sense of
            responsibility that I welcome you to our organization—a pioneering
            manpower consultancy recognized for its commitment to excellence and
            its significant role in empowering the workforce of the Middle East.
          </h5>
          <div className="team-but-con mt-5">
            <button className="team-button1">READ MORE</button>
          </div>
        </div>
      </div>
      {/* <div className="team-background-wrapper w-full">
        <div className="team-container w-full">{renderMembers()}</div>
        <div className="team-dots-wrapper w-full">{renderDots()}</div>
      </div> */}
      <div className="team-ceo-section">
        <div className=" md:hidden team-ceo-photo h-fll h-[300px]">
          Co-Founder's PHOTO
        </div>
        <div className="team-ceo-message h-full">
          <h1>Co-Founder's Message</h1>
          <h5>Welcome to Afreen International Tours & Travels</h5>
          <h5>Dear Friends and Partners,</h5>
          <h5>
            I am Mr. Sagir Hasan Khan, the CEO of Afreen International Tours &
            Travels. It is with immense pride and a profound sense of
            responsibility that I welcome you to our organization—a pioneering
            manpower consultancy recognized for its commitment to excellence and
            its significant role in empowering the workforce of the Middle East.
          </h5>
          <div className="team-but-con mt-5">
            <button className="team-button1">READ MORE</button>
          </div>
        </div>
        <div className=" max-md:hidden team-cof-photo h-fll h-[300px]">
          Co-Founder's PHOTO
        </div>
      </div>
    </div>
  );
};

export default Team;
