import { capitalizeText } from "@/utils/util";
import { Octokit } from "@octokit/rest";
import SectionContainer from "../sectionContainer";

const Portfolio = async () => {
  const auth = process.env.GITHUB_REPOSITORY_RETRIEVE_TOKEN;
  const username = process.env.GITHUB_USERNAME;
  if (!auth && !username) return null;
  const octokit = new Octokit({
    auth,
  });

  try {
    const { data: repos } = await octokit.rest.repos.listForUser({
      username: username as string,
      sort: "created",
      direction: "desc",
    });
    if (repos?.length === 0) return null;

    return (
      <SectionContainer
        sectionId="portfolio"
        title="PORTFOLIO"
        subTitle="My Portfolio"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[1.875rem] xl:mt-[3.125rem] gap-8">
          {repos.map((repo) => {
            return (
              !repo.private && (
                <div key={repo.id} className="card_container group">
                  <h3 className="card_title">{capitalizeText(repo.name)}</h3>
                  <p className="card_description mb-[1.375rem]">
                    {repo.description}
                  </p>
                  <div className="flex justify-between absolute bottom-[1.875rem] w-[calc(100%-100px)]">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreffer"
                      className="anchor_text"
                    >
                      Source Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreffer"
                        className="anchor_text"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              )
            );
          })}
        </div>
      </SectionContainer>
    );
  } catch (error) {
    return null;
  }
};

export default Portfolio;
