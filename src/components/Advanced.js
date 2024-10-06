import brand from "../images/icon-brand-recognition.svg";
import record from "../images/icon-detailed-records.svg";
import custom from "../images/icon-fully-customizable.svg";

export default function Advanced() {
  return (
    <>
      <section className="bg-gray-100 py-10 lg:pt-20 lg:pb-40" >
        <div className="max-width">
        <h2 className="text-4xl font-bold mb-3 text-slate-800 text-center">Advanced Statistics</h2>
        <p className="text-slate-400 text-center mb-10 lg:mb-20">
          Track how your links are performing across the web <br /> with our standard
          statistic dashboard.
        </p>

        <div className="card relative grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="line"></div>
          <article className="bg-white p-5 rounded relative">
            <img src={brand} alt="Brand Recognition" className="p-3 -mt-12 bg-slate-800 rounded-full"/>
            <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Brand Recognition</h3>
            <p className="text-slate-400 text-sm">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          <article className="bg-white p-5 rounded relative">
            <img src={record} alt="Detailed Records" className="p-3 -mt-12 bg-slate-800 rounded-full"/>
            <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Detailed Records</h3>
            <p className="text-slate-400 text-sm">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          <article className="bg-white p-5 rounded relative">
            <img src={custom} alt="Fully Customizable" className="p-3 -mt-12 bg-slate-800 rounded-full"/>
            <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Fully Customizable</h3>
            <p className="text-slate-400 text-sm">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
        </div>
      </section>
    </>
  );
}
