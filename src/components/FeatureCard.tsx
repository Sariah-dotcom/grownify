interface FeatureCardProps {
  featureTitle: string;
  featureDescription: string;
  demoImage: string
}

export default function FeatureCard({featureTitle, featureDescription, demoImage}:FeatureCardProps) {
    return (
      <div className="flex items-center bg-light-green w-[90vw] h-[35rem] rounded-[1rem] p-5 snap-start flex-shrink-0 lg:w-[50vw] lg:h-[25rem]">
        
        <div className="w-1/2">
          <h3 className="text-3xl font-bold font-plus mb-5">{featureTitle}</h3>
          <p>{featureDescription}</p>
        </div>

        <div>
          <img src={demoImage} alt="" />
        </div>
      </div>
    );
  }
  