import { Box, Dices, Dot, Hash, Pyramid, Rabbit, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const OtherFold = () => {
  const val = <Dot />;

  const userCases = [
    {
      icon: <Pyramid size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
    {
      icon: <Rabbit size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
    {
      icon: <Box size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
    {
      icon: <Zap size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
    {
      icon: <Dices size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
    {
      icon: <Hash size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
    {
      icon: <Hash size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
    {
      icon: <Hash size={22} color="white" strokeWidth={1.5} />,
      heading: "Learn Topic Complexity",
      desc: "Afforai has helped researches gain education in hard topics regardless of the level, from High School, to Post-Doctoral.",
    },
  ];
  return (
    <div className="min-h-screen w-full flex flex-col py-10 items-center">
      {/* upper div */}
      <div className=" flex flex-col items-center mt-12">
        <h1 className="text-3xl font-medium text-zinc-900">
          Real-world use-cases
        </h1>
        <p className="text-zinc-500 font-medium text-center mt-2">
          Take a look at some of the ways you can use Afforai to your advantage,{" "}
          <br /> based on some real feedback from our users.
        </p>

        {/* mapping the data and the icons */}
        <div className=" flex gap-8 flex-wrap items-center justify-center px-10 mt-16 border-b">
          {userCases.map((curr: any) => {
            return (
              <div className="h-52 w-80  px-3 py-3">
                <div className="h-12 w-12 bg-gradient-to-b from-indigo-700 to-indigo-400 rounded-md flex items-center justify-center">
                  {curr.icon}
                </div>
                <div>
                  <h1 className="text-lg font-medium mt-3">{curr.heading}</h1>
                  <p className="text-sm font-medium text-zinc-500 mt-2">
                    {curr.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* upper div end */}

      {/* upper second div */}
      <div className="w-full flex flex-col items-center mt-10">
        <h1 className="text-2xl font-medium text-zinc-900">
          Manage Products, Easily
        </h1>
        <p className="text-sm font-medium text-zinc-500 mt-3">
          Key feature of productsphere
        </p>

        {/* image div */}
        <div className="flex h-[900px] w-full mt-8 items-center justify-center gap-2">
          {/* left div */}
          <div className="flex flex-col w-1/2 gap-2">
            <div className="h-[440px]  ml-20 bg-zinc-100 rounded-lg flex flex-col justify-between border ">
              <div className="ml-10 mt-5">
                <div className="flex items-center gap-1 mt-4">
                  <Rabbit size={18} color="black" />
                  <p className="text-sm font-medium text-zinc-900">
                    Hunt products anytime
                  </p>
                </div>
                <h1 className="text-lg font-medium mt-4 pr-10">
                  Share your chatbots with your team & collaboratively simplify
                  research.
                </h1>
              </div>
              <Image
                src={`/2.png`}
                className="h-[300px] w-full object-cover rounded-b-lg"
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
            <div className="h-[450px]  ml-20 bg-zinc-100 rounded-lg flex flex-col justify-between border ">
              <div className="ml-10 mt-5">
                <div className="flex items-center gap-1 mt-4">
                  <Rabbit size={18} color="black" />
                  <p className="text-sm font-medium text-zinc-900">
                    Hunt products anytime
                  </p>
                </div>
                <h1 className="text-lg font-medium mt-4 pr-10">
                  Share your chatbots with your team & collaboratively simplify
                  research.
                </h1>
              </div>
              <Image
                src={`/x.png`}
                className="h-[300px] w-full object-cover rounded-b-lg"
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
          </div>
          {/* right div */}
          <div className="flex w-1/2 h-[900px] bg-zinc-100 mr-20 border rounded-lg flex-col justify-between">
            <div className="h-[150px] w-full px-4 py-4">
              <div className="flex gap-1">
                <Rabbit size={18} color="black" />
                <p className="text-sm font-medium text-zinc-900">
                  Hunt products anytime
                </p>
              </div>
              <h1 className="text-lg font-medium mt-4 pr-10">
                  Share your chatbots with your team & collaboratively simplify
                  research.
                </h1>
            </div>
            <div className="h-[750px] w-full bg-yellow-200">
              <Image
                className="h-full w-full object-cover"
                src={`/form.png`}
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
          </div>
          <div></div>
        </div>
        {/* image div end */}
      </div>

      {/* upper second div end */}
    </div>
  );
};

export default OtherFold;
