import { skills } from "../../data/dataSkills";

export const Experience = () => {
  const skillsContent = skills.map((item) => (
    <div key={item.id} className={`py-2  rounded-lg shadow-md  ${item.style}`}>
      <img src={item.src} alt={item.alt} className="w-20 mx-auto" />
      <p className="mt-4">{item.name}</p>
    </div>
  ));

  return (
    <div
      name="experience"
      className="w-full py-20 bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline pb-1 text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {skillsContent}
        </div>
      </div>
    </div>
  );
};
