import { Link } from "react-router-dom";

export default function Contact() {
  const contactEmail = "winchygichu@gmail.com";

  return (
    <div className="flex flex-col p-4 m-4 space-y-3" id="contact">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        Contact
      </h2>
      <hr className="bg-green-600 w-40 h-1.5 self-center mb-6 mt-0" />
      <p>
        Contact me at <Link to={`mailto:${contactEmail}`} className="text-green-600">
          {contactEmail}
        </Link>{" "}
        for frontend development opportunities and 
        open-source projects collaboration in GIS. Looking forward to hearing from you!
        Looking forward to connecting with you!
      </p>
    </div>
  );
}
