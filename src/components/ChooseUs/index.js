import { RiLightbulbFlashFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";
import { VscBook } from "react-icons/vsc";
import { LuCalendarClock } from "react-icons/lu";
import { TbCalendarStats } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";

import "./index.css";

const ChooseUs = () => (
  <div className="choose-container">
    <h1 className="choose-heading">
      Why <span className="span-heading">Choose</span> Us?
    </h1>
    <div className="choose-cards">
      <div className="choose-card">
        <RiLightbulbFlashFill className="image" />
        <h1 className="choose-card-heading">Expert Faculty</h1>
        <p className="choose-card-paragraph">
          Our qualified Faculty with significant practical experience guide
          students every step of the way
        </p>
      </div>
      <div className="choose-card">
        <TiGroup className="image" />
        <h1 className="choose-card-heading">Complete Success Package</h1>
        <p className="choose-card-paragraph">
          Leading Exam Prep Destination with Video classes, Live sessions, Doubt
          resolution Forums, MCQs, Practice tests, Webinars.
        </p>
      </div>
      <div className="choose-card">
        <MdLocationPin className="image" />
        <h1 className="choose-card-heading">Placements</h1>
        <p className="choose-card-paragraph">
          Resume building workshops, mock interviews and placement drives will
          help you impress the top employers and get your Dream Job.
        </p>
      </div>
    </div>
    <div className="choose-bottom-container">
      <div className="choose-card-bottom">
        <h1 className="bottom-heading">Levels</h1>
        <p className="bottom-paragraph">
          <VscBook />
          Three (13 papers)
        </p>
      </div>
      <div className="choose-card-bottom">
        <h1 className="bottom-heading">Duration</h1>
        <p className="bottom-paragraph">
          <LuCalendarClock />
          6-30 months
        </p>
      </div>
      <div className="choose-card-bottom">
        <h1 className="bottom-heading">Exams</h1>
        <p className="bottom-paragraph">
          <TfiWrite />
          Quarterly (Online)
        </p>
      </div>
      <div className="choose-card-bottom">
        <h1 className="bottom-heading">Exemptions</h1>
        <p className="bottom-paragraph">
          <TbCalendarStats />
          Upto 9 papers
        </p>
      </div>
    </div>
  </div>
);

export default ChooseUs;
