import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="p-5 relative lg:mb-[28rem]">
      <div className="flex gap-3 overflow-x-scroll snap-x snap-mandatory w-full lg:w-[90%] lg:absolute lg:right-0" >
        <FeatureCard 
          featureTitle="Personalized Habit Tracker & Daily Reminders"
          featureDescription="Never miss a step in your journey with gentle nudges to keep you on track.Set and track habits tailored to your unique goals, from paying bills to staying active."
          demoImage="/test.png"
        />

        <FeatureCard 
          featureTitle="Visual Progress Insights"
          featureDescription="Stay motivated with streaks, progress graphs, and milestones that celebrate your achievements."
          demoImage="/test.png"
        />

        <FeatureCard 
          featureTitle="Gamified Rewards System"
          featureDescription="Unlock badges and level up as you build consistency and achieve milestones."
          demoImage="/test.png"
        />

        <FeatureCard 
          featureTitle="Skip Days Without Guilt"
          featureDescription="Take a break when you need it without losing your streak or momentum."
          demoImage="/test.png"
        />
        
      </div>
    </section>
  );
}
