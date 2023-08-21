import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! I'm Mohit, a software developer with a passion for elegant solutions. I honed my skills and gained invaluable experience during my Amazon SDE internship. At Amazon, I thrived in a fast-paced environment, collaborating with diverse teams on challenging projects. This internship not only refined my technical abilities but also instilled values of teamwork, innovation, and customer-centricity. With a solid foundation in programming and a focus on frontend and backend development, I excel in crafting efficient code and optimizing performance. My strong communication skills bridge the gap between technical complexities and business goals. Beyond coding, I'm a creative thinker, avid problem solver, and continuous learner. I'm excited to contribute my expertise and passion to new projects. Let's connect and code a brighter future together!
        </p>

     
      </div>
    </div>
  );
};

export default About;
