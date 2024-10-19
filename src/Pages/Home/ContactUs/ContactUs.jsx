import contact from "../../../assets/contact/Group 45.png";
import phone from "../../../assets/contact/telephone 1.png";
import address from "../../../assets/contact/Group 135.png";
import working from "../../../assets/contact/Frame.png";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Contact from "./Contact";

const ContactUs = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/LtPpLpQ/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md ">
            <img src={contact} className="h-[200px] w-[600px]" alt="" />
          </div>
        </div>
      </div>
      <section>
        <SectionTitle
          heading="Our Location"
          subHeading="Visit Us"
        ></SectionTitle>
      </section>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-[300px] w-[350px] ">
            <div className="h-[250px] w-[300px]">
              <div className="h-[70px] w-[350px] border bg-[#D1A054]">
                <img className="mx-auto mt-4" src={phone} alt="" />
              </div>
              <div className="text-center">
                <p className="text-3xl font-semibold mt-2">Phone</p>
                <div className="text-center text-xl font-normal mt-5">
                  <p>+88 01685165452</p>
                  <p>+88 01685165452</p>
                  <p>+95862500</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[350px] ">
            <div className="h-[250px] w-[300px]">
              <div className="h-[70px] w-[350px] border bg-[#D1A054]">
                <img className="mx-auto mt-4" src={address} alt="" />
              </div>
              <div className="text-center">
                <p className="text-3xl font-semibold mt-2">Address</p>
                <div className="text-center text-xl font-normal mt-5">
                  <p>
                    LOS ANGELES. ANGELIQUE Address: 840, South Spring Street,
                    Los Angeles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[350px] ">
            <div className="h-[250px] w-[300px]">
              <div className="h-[70px] w-[350px] border bg-[#D1A054]">
                <img className="mx-auto mt-4" src={working} alt="" />
              </div>
              <div className="text-center">
                <p className="text-3xl font-semibold mt-2">WORKING HOURS</p>
                <div className="text-center text-xl font-normal mt-5">
                  <p>
                    Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <SectionTitle
          heading="CONTACT FORM"
          subHeading="Send Us a Message"
        ></SectionTitle>
      </section>

      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default ContactUs;
