import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Master Plumber",
    designation: "Lead Technician",
    image: "/images/team/team-01.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Senior Plumber",
    designation: "Trenchless Specialist",
    image: "/images/team/team-02.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Field Supervisor",
    designation: "Commercial Division",
    image: "/images/team/team-03.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Service Coordinator",
    designation: "Customer Support",
    image: "/images/team/team-04.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Experienced Plumbing Professionals"
            paragraph="Our team of licensed plumbers, trenchless specialists, and support staff are dedicated to providing the highest quality plumbing services in Southern California."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-body-color dark:text-dark-6">
            We&apos;re hiring! Looking for plumbers, installers, dispatchers, and office staff.{" "}
            <a href="mailto:a1totalserviceplumbing@gmail.com" className="font-semibold text-primary hover:underline">
              Contact us to apply
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
