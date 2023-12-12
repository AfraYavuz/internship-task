import ProfileCard from "@/components/card/card";
import ProfileTabs from "@/components/tabs/tabs";
import { profileData, profileTabs } from "@/data/profiles";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen gap-1 p-24 bg-secondary">
        {profileData.map((profile) => (
          <div key={profile.id} className="w-2/5 p-5">
            <ProfileCard profile={profile} />
          </div>
        ))}
        {profileTabs.map((tabs) => (
          <div key={tabs.id} className="w-3/5 p-3">
            <ProfileTabs tabs={tabs} />
          </div>
        ))}
      </div>
    </main>
  );
}
