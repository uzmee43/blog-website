import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/Image4.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold dark:text-white mb-4 text-blue-700">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hi! I am Uzma khan, a driven professional specializing in
                cloud-applied generative AI engineering, fueled by a profound
                passion for programming. My expertise lies in NextJs, where I
                possess a robust understanding of both its theoretical
                underpinnings and practical applications. Currently, I am
                broadening my horizons through immersion in the Governor Sindh
                IT Initiative, delving into TypeScript and various aspects of
                full-stack development. My journey in the realm of technology
                has endowed me with a rich skill set encompassing HTML, CSS,
                JavaScript, and NextJs. Thriving in dynamic environments, I
                relish the opportunity to apply my problem-solving acumen and
                creative flair towards crafting innovative solutions. As a
                dedicated student at the Governor Sindh IT Initiative, I am
                committed to continuous growth and excellence in the
                ever-evolving landscape of technology.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you &apos;re just starting out or looking to sharpen
                your skills, you &apos;ll find a variety of resources and
                insights here. Let &apos;s explore the world of programming
                together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold dark:text-white text-blue-700">
              Uzma &apos;s Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to Senior students , here &apos;s how Uzma
              navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/gril.jpeg"
                  height={100}
                  width={100}
                  alt="Uzma khan as a beginner"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold dark:text-white text-blue-700">
                  Key Highlights
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  <span className="font-bold text-[#FF9D23]">
                    {" "}
                    Web Development Skills:
                  </span>{" "}
                  Proficient in building dynamic and responsive web applications
                  using Next.js and TypeScript. <br />
                  <span className="font-bold text-[#FF9D23]">
                    {" "}
                    Programming Expertise:
                  </span>
                  Strong foundation in Python for AI and software development.
                  Emerging <br />{" "}
                  <span className="font-bold text-[#FF9D23]">
                    {" "}
                    Technologies:
                  </span>
                  Actively learning and experimenting with Web3, GenAI, and the
                  Metaverse. <br />
                  <span className="font-bold text-[#FF9D23]">
                    {" "}
                    Problem Solver:
                  </span>{" "}
                  Committed to tackling challenges through innovation and
                  creativity. <br />{" "}
                  <span className="font-bold text-[#FF9D23]">
                    {" "}
                    Community Engagement:
                  </span>
                  Passionate about giving back to the community through
                  knowledge sharing and collaboration.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/Image.jpg"
                  height={100}
                  width={100}
                  alt="Uzma learning new skills"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold dark:text-white text-blue-700">
                  Current Learning Journey
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I am deeply immersed in understanding the intersection of AI,
                  blockchain, and immersive technologies under the Governor
                  Sindh Initiative. This journey not only enhances my technical
                  expertise but also equips me to tackle real-world challenges
                  in emerging tech fields.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/Image2.jpg"
                  height={100}
                  width={100}
                  alt="Harry working on a big project"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold dark:text-white text-blue-700">
                  Passion and Drive
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I thrive on pushing boundaries, diving into new challenges,
                  and growing through hands-on experiences. My mission is to
                  contribute to groundbreaking innovations while inspiring
                  others to explore the endless possibilities of technology.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/Image3.jpg"
                  height={100}
                  width={100}
                  alt="Harry mentoring others"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold dark:text-white text-blue-700">
                  Future Goals
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  My vision is to become a trailblazer in the fields of AI and
                  Web3, using my knowledge and skills to drive meaningful change
                  in the tech industry. I aim to build impactful solutions and
                  foster a collaborative environment where technology empowers
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
