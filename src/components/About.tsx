import { profile } from "@/data/profile";

/** Sticky ABOUT/ME title + bio card + Experience/Certification/Education timeline. */
export default function About() {
  const { intro, timeline } = profile;

  return (
    <section className="about-me container" id="about-me">
      <div>
        <div className="title">
          <p className="primary-text">About</p>
          <p className="secondary-text">Me</p>
        </div>
      </div>

      <div>
        <div className="intro">
          {intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {timeline.map((entry) => (
          <div className="timeline" key={entry.heading}>
            <h1>{entry.heading}</h1>
            {entry.items.map((item, i) => (
              <div className="timeline-item" key={i}>
                <p className="designation">{item.designation}</p>
                <p className="place">{item.place}</p>
                {item.points && item.points.length > 0 && (
                  <ul className="timeline-list">
                    {item.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
