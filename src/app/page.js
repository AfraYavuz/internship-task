import ProfileCard from "@/components/card/card";
import ProfileTabs from "@/components/tabs/tabs";
import { profileData, profileTabs } from "@/data/profiles";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row min-h-screen w-full pt-10 lg:p-24 bg-secondary">
        <div className="lg:w-2/5 pt-20 w-full mx-auto ">
          {profileData.map((profile) => (
            <div key={profile.id} className="mb-4 ml-3  md:mx-auto lg:mb-0">
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>

        <div className="lg:w-3/5 p-4">
          {profileTabs.map((tabs) => (
            <div key={tabs.id} className="mb-4 mx-auto lg:mb-0">
              <ProfileTabs tabs={tabs} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
