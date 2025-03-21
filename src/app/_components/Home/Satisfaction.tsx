import Image from "next/image";
import { HomeDatas } from "public/Datas";

const Satisfaction = () => {
  return (
    <div className="mb-bom flex flex-col items-center justify-center gap-x-3 rounded-md bg-[#162b40] px-3 py-7 text-center">
      <p className="my-2 font-medium text-white md:text-[20px]">Why Soiree</p>
      <h2 className="text-[1.5rem] font-bold text-white sm:text-[1.5rem] md:text-[2rem]">
        {" "}
        Satisfaction <br /> <span> Guaranteed</span>
      </h2>
      <div className="mb-[3rem] mt-7 flex flex-col flex-wrap items-center justify-center gap-7 text-center sm:flex-row md:mb-[4rem]">
        {HomeDatas.CustomerSatifaction.map((data, i) => {
          return (
            <div
              key={i}
              className="flex w-full flex-col flex-wrap items-center justify-center gap-y-[0.7rem] sm:w-[30%]"
            >
              <Image
                src={data.icon}
                className="object-cover"
                alt={data.texts}
                height={50}
                width={50}
              />
              <p className="text-[18px] font-bold text-white">{data.title}</p>
              <p className="text-[13px] text-gray-200">{data.texts}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Satisfaction;
