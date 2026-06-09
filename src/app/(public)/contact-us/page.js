import SocialJoinLink from "@/app/_component/SocialJoinLink";
import SocialLinks from "@/app/_component/SocialLinks";
import { contactemailurl, title, url } from "@/app/utils/common-text";

export const metadata = {
  title: "Contact Us | Jobs Live Now",
  description:
    "Get in touch with Jobs Live Now for queries, suggestions, corrections, feedback, and support related to government jobs, admit cards, results, and admissions.",
  keywords:
    "Contact Jobs Live Now, Contact Us, Govt Jobs Help, Sarkari Result Contact"
};

export default function Page() {

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <SocialJoinLink />
        </div>
        <div className="col-md-12">
          <div className="card shadow-sm border-0">

            <div className="card-body p-4">

              <h1 className="mb-4">
                Contact Us
              </h1>

              <p>
                Thank you for visiting <strong>{title}</strong>.
                We value your feedback, suggestions, and inquiries.
              </p>

              <p>
                If you find any incorrect information,
                broken links, outdated content, or have
                any suggestions for improvement, please
                feel free to contact us.
              </p>

              <h2 className="mt-4">
                Contact Information
              </h2>

              <p>
                <strong>Email:</strong><br />
                {contactemailurl}
              </p>

              <p>
                <strong>Website:</strong><br />
                <a href={url} target="_black">{url}</a>
              </p>

              <h2 className="mt-4">
                Contact Form
              </h2>

              <form className="mt-3">

                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your message"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>

              </form>

              <h2 className="mt-5">
                Response Time
              </h2>

              <p>
                We usually respond to emails and contact
                requests within 24–48 business hours.
              </p>

              <h2 className="mt-4">
                Important Note
              </h2>

              <p>
                {title} is an independent informational
                website and is not associated with any government
                organization. For official recruitment-related
                issues, please contact the respective department's
                official website.
              </p>

            </div>

          </div>
        </div>
        <div className="col-md-12">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}