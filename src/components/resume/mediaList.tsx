import Image from "next/image";
import ResumeSectionContainer from "./resumeSectionContainer";

interface IMediaList {
  mediaList: any[];
}

const MediaList = ({ mediaList }: IMediaList) => {
  const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME;
  if (mediaList?.length === 0 && !bucketName) return null;
  console.log(mediaList, "mediaList");

  return (
    <ResumeSectionContainer
      subTitle="Resume"
      title="Achievements & Resume"
      width="w-full"
    >
      <div className="grid grid-cols-3 gap-10">
        {mediaList?.map((media: any) => (
          <div
            key={media.id}
            className="card_common_css group cursor-pointer p-5 h-[280px]"
          >
            {media.url.includes(".pdf") ? (
              <a
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[240px] overflow-hidden rounded"
              >
                <Image
                  src="/resume_thumbnail.jpg"
                  alt={media.name}
                  width={350}
                  height={250}
                  style={{ borderRadius: "0.25rem", height: "240px" }}
                />
              </a>
            ) : (
              <Image
                src={media.url || null}
                alt={media.name}
                width={350}
                height={250}
                style={{ borderRadius: "0.25rem", height: "240px" }}
              />
            )}
          </div>
        ))}
      </div>
    </ResumeSectionContainer>
  );
};

export default MediaList;
