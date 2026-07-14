import SingleClient from "./SingleClient";
import { Client } from "@/types/client";

interface ClientsProps {
  partnersData: Client[];
}

const Clients = ({ partnersData }: ClientsProps) => {
  return (
    <section className="bg-gray-1 pb-16 pt-28 dark:bg-dark-2 lg:pb-20 lg:pt-[150px]">
      <div className="container px-4">
        <p className="mb-8 text-center text-3xl font-semibold text-dark dark:text-white">
          Just so you know we're legit, we partner with…
        </p>
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {partnersData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
