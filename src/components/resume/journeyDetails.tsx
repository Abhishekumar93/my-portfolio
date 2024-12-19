import { IJourneyDetails } from "@/interface/resume/journeyDetail";
import ResumeSectionContainer from "./resumeSectionContainer";

interface IJourneyData {
  journeyDetail: IJourneyDetails;
}

const JourneyDetails = ({ journeyDetail }: IJourneyData) => {
  const { details, subTitle, title } = journeyDetail;

  return (
    <ResumeSectionContainer subTitle={subTitle} title={title}>
      <div className="mt-[1.875rem] border-l-[5px] border-l-solid border-l-[#d9dee2] dark:border-l-[#17191c] pl-8">
        {details.map((detail, idx) => {
          return (
            <div
              key={detail?.subTitle}
              className={`journey_detail_card relative group ${idx === details.length - 1 ? "mb-0" : "mb-[3.125rem]"}`}
            >
              <div className="journey_detail_card_inner after:absolute after:content-[''] after:w-5 after:h-5 after:border-[5px] after:border-solid after:border-[#d9dee2] dark:after:border-[#17191c] after:rounded-[100%] after:right-[103.65%] after:top-14 after:-translate-y-[7px] after:bg-[#ecf0f3] dark:after:bg-[#222529] after:duration-[0.4s] hover:after:bg-red_primary">
                <div className="border-b-[1px] border-b-solid border-b-[#e3e9ed] dark:border-b-[#1a1d23] pb-5 mb-5">
                  <h4 className="text-2xl mb-2 font-medium">{detail?.title}</h4>
                  <span className="mb-[15px] text-dark_text dark:text-[#7c838e] text-sm group-hover:text-white group-hover:duration-[0.4s]">
                    {detail?.subTitle}
                  </span>
                </div>
                <p className="text-dark_text dark:text-light group-hover:text-white group-hover:duration-[0.4s] text-base">
                  {detail?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ResumeSectionContainer>
  );
};

export default JourneyDetails;
