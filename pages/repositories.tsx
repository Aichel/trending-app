import Layout from "../components/layout";

export const getStaticProps = async () => {
  const res = await fetch("https://gh-trending-api.herokuapp.com/repositories");
  const repositories = await res.json();

  return {
    props: {
      repositories
    },
  };
};

const Repositories = (trending: any) => {
  return (
    <Layout>
      {trending.repositories.map((repository: any) => (
        <div key={repository.rank} className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody className="">
                    <tr>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-blue-500 text-2xl ml-2">
                            {repository.username} / {repository.repositoryName}
                          </p>
                        </div>
                        <p className="text-gray-500">
                          {repository.description}
                        </p>

                        <div className="md:flex mt-3">
                          <div className="flex">
                            {repository.language && (
                              <div className="flex items-center mr-10">
                                <p className="text-gray-500 text-sm">
                                  {repository.language}
                                </p>
                              </div>
                            )}

                            {repository.totalStars && (
                              <div className="flex items-center mr-10 text-gray-500 text-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  />
                                </svg>
                                {repository.totalStars}
                              </div>
                            )}

                            {repository.forks && (
                              <div className="flex items-center mr-10 text-gray-500 text-sm">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                  />
                                </svg>
                                {repository.forks}
                              </div>
                            )}
                          </div>

                          <div className="flex items-center text-gray-500 text-sm">
                            <span className="mr-2">Built by</span>
                            {repository.builtBy.map((built: any) => (
                              <div
                                key={built.username}
                                className="flex -space-x-1"
                              >
                                <img
                                  className="inline-block h-6 w-6 rounded-full"
                                  src={built.avatar}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4  text-sm text-gray-500">
                        <div className="flex justify-end">
                          <a
                            href={repository.url}
                            className="btn-secondary py-2 px-6 flex items-center cursor-pointer rounded hover:border-gray-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-pink-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <p className="ml-1 text-white">Sponsor</p>
                          </a>

                          <a
                            className="btn-secondary py-2 px-6 flex items-center cursor-pointer rounded hover:border-gray-600 ml-2"
                            title={
                              `Star ` +
                              repository.username +
                              "/" +
                              repository.repositoryName
                            }
                            aria-label="Follow this person"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                              />
                            </svg>
                            <p className="ml-1 text-white">Star</p>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Repositories;
