import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { title, url, year } from "@/app/utils/common-text";
import moment from "moment";
import Link from "next/link";

export const dynamic = "force-dynamic";

// ================= SEO =================

export const metadata = {

  title: "Top Online Form - Latest Government Jobs Online Forms",
  description: "Check latest Top Online Forms, Government Job Online Forms, SSC, Railway, Banking, Defence, UPSC and State Govt recruitment updates.",
  keywords: [
    "Top Online Form",
    "Latest Online Form",
    "Sarkari Result",
    "Govt Jobs 2026",
    "SSC Online Form",
    "Railway Online Form",
    "Online Form",
    "UPSC Online Form",
    "Defence Online Form",
    "Bank Online Form",
    "Latest Online Form",
  ],

  alternates: {
    canonical: url+"/top-online-form",
  },

  openGraph: {
    title: "Top Online Form",
    description: "Latest Government Job Online Forms and Recruitment Updates.",
    url: url+"/top-online-form",
    siteName: title,
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default async function page() {
  // ================= FETCH =================

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/public-job`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        list: true,
      }),

      next: {
        revalidate: 300,
      },
    }
  );

  const response = await res.json();

  const topOnlineForm =
    response?.data?.topOnlineForm || [];

  const admitCardData =
    response?.data?.admitCardData || [];

  const resultData =
    response?.data?.resultData || [];

  const answerKeyData =
    response?.data?.answerKeyData || [];

  // ================= LAST DATE =================

  const getLastDate = (fields) => {

    const applicationDateField =
      fields?.find(
        (item) =>
          item.fieldName ===
          "Application Date"
      );

    if (!applicationDateField)
      return "";

    return moment(
      applicationDateField?.value?.end
    ).format("MMM Do YYYY");

  };


  return (
    <>
      <div className="container job-dtl main">

        <header>
          <h1>Latest Jobs {year} - {title} Updates</h1>
          <p>
            Get latest Job Result, job notifications, admit cards,
            answer keys and online forms in India. Updated daily.
          </p>
        </header>

        <div className="row">
          <div className="col-sm-12">
            <SocialJoinLink />
          </div>
        </div>

        <div className="breadcrumb-box mb-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item cp"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Top Online Form</li>
            </ol>
          </nav>
        </div>


        <div className="card-box">
          <h5>Top Online Form</h5>
          <ul>
            {
              topOnlineForm?.length > 0 ? (

                <>
                  {
                    topOnlineForm.map((item, i) => (

                      <li
                        key={i}
                      >
                        <Link href={`/${item.slug}`}>
                          <>
                            <div>{i + 1}. {item.name}</div>
                            <p>Last Date: {getLastDate(item.fields)}</p>
                          </>
                        </Link>
                      </li>

                    ))
                  }
                </>

              ) : (

                <div className="no-data-box-alllist">

                  <div className="no-data-icon-list">
                    📂
                  </div>

                  <p>No data available</p>

                </div>

              )
            }
          </ul>
        </div>

        <div className="row mt-3">

          <div className="col-md-4">

            <div className="card-box">

              <h5>Admit Card</h5>

              {
                admitCardData?.length > 0 ? (

                  <>
                    <ul>

                      {
                        admitCardData.map((item, i) => (
                          <li
                            key={i}
                          >
                            <Link href={`/${item.slug}`}>
                              <>
                                {i + 1}. {item.name}
                              </>
                            </Link>
                          </li>

                        ))
                      }

                    </ul>

                    <div className="view-more">

                      <span
                        className="btn-view"
                      >
                        <Link
                          href={`/category/admit-card`}
                          className="btn-view"
                        >{`View More >>`}</Link>
                      </span>

                    </div>
                  </>

                ) : (

                  <div className="no-data-box-list">

                    <div className="no-data-icon-list">
                      📂
                    </div>

                    <p>No data available</p>

                  </div>

                )
              }

            </div>

          </div>

          {/* ================= ADMIT CARD ================= */}
          <div className="col-md-4">

            <div className="card-box">

              <h5>Results</h5>

              {
                resultData?.length > 0 ? (

                  <>
                    <ul>

                      {
                        resultData.map((item, i) => (
                          <li
                            key={i}
                          >
                            <Link href={`/${item.slug}`}>
                              <>
                                {i + 1}. {item.name}
                              </>
                            </Link>
                          </li>
                        ))
                      }

                    </ul>

                    <div className="view-more">

                      <span
                        className="btn-view"
                      >
                        <Link
                          href={`/category/results`}
                          className="btn-view"
                        >{`View More >>`}</Link>
                      </span>

                    </div>
                  </>

                ) : (

                  <div className="no-data-box-list">

                    <div className="no-data-icon-list">
                      📂
                    </div>

                    <p>No data available</p>

                  </div>

                )
              }

            </div>

          </div>

          {/* ================= RESULT ================= */}
          <div className="col-md-4">

            <div className="card-box">

              <h5>Answer Key</h5>

              {
                answerKeyData?.length > 0 ? (

                  <>
                    <ul>

                      {
                        answerKeyData.map((item, i) => (
                          <li
                            key={i}
                          >
                            <Link href={`/${item.slug}`}>
                              <>
                                {i + 1}. {item.name}
                              </>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>

                    <div className="view-more">

                      <span
                        className="btn-view"
                      >
                        <Link
                          href={`/category/answer-key`}
                          className="btn-view"
                        >{`View More >>`}</Link>
                      </span>

                    </div>
                  </>

                ) : (

                  <div className="no-data-box-list">

                    <div className="no-data-icon-list">
                      📂
                    </div>

                    <p>No data available</p>

                  </div>

                )
              }

            </div>

          </div>

          <SocialLinks />

        </div>

      </div>
    </>
  )
}
