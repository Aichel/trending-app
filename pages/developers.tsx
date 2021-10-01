import Layout from "../components/layout";

export const getStaticProps = async () => {
  const res = await fetch("https://gh-trending-api.herokuapp.com/developers");
  const developers = await res.json();

  return {
    props: {
      developers,
    },
  };
};

const Developers = (trending: any) => {
  return (
    <Layout>
      {trending.developers.map((developer: any) => (
        <div key={developer.rank} className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody className="">
                    <tr>
                      <td className="px-6 py-4 w-2">
                        <p className="text-gray-500">{developer.rank}</p>
                      </td>
                      <td className="px-6 py-4 w-1/6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={developer.avatar}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-lg font-medium text-blue-500">
                              {developer.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {developer.username}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                            />
                          </svg>
                          <p className="uppercase text-gray-500 ml-2">
                            Popular Repo
                          </p>
                        </div>
                        {developer.popularRepository.repositoryName && (
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
                            <p className="text-blue-500 ml-2">
                              {developer.popularRepository.repositoryName}
                            </p>
                          </div>
                        )}

                        <p className="text-gray-500 text-sm">
                          {developer.popularRepository.description}
                        </p>
                      </td>
                      <td className="px-6 py-4  text-sm text-gray-500">
                        <div className="flex justify-end">
                          <a
                            href={developer.url}
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
                            title={`Follow ` + developer.username}
                            aria-label="Follow this person"
                          >
                            <p className="text-white">Follow</p>
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

export default Developers;
