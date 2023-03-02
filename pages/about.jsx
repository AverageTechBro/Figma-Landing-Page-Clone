import Link from "next/link";
import Image from "next/image";
import SignedIn from "./signed-in";
import Tags from "./components/tags";
import Notification from "./notificationTop";
import Footer from "./footer";
export default function About() {
  return (
    <div className="about-container">
      <Notification />
      <SignedIn />
      <Tags />
      <div className="about-content">
        <div className="blue-background">
          <h5>ABOUT US</h5>
          <h3>
            BTPLANET eccomerce <br />
            Website for Electric Accessories
          </h3>
          <p>
            The all-in-one commerce platform to start, run and grow a business
          </p>
          <button>GET STARTED</button>
        </div>

        <div className="second-container">
          <div className="text-container">
            <h5>BTPlanet Story</h5>
            <h3>
              The First product <br />
              was our own
            </h3>
            <p>
              Over a decade ago, we started a store to sell laptop online. None
              of the ecommerce solutions at the time gave us the control we
              needed to be successful—so we built our own. Today, businesses of
              all sizes use BTPlanet, whether they’re selling online, in retail
              stores, or on-the-go.
            </p>
          </div>
        </div>
        <div className="third-container">
          <h5>Our Mission</h5>
          <h3>Making commerce better for everyone</h3>
          <p>
            We help people achieve independence by making it easier to start,
            run, and grow a business. We believe the future of commerce has more
            voices, not fewer, so we’re reducing the barriers to business
            ownership to make commerce better for everyone.
          </p>
        </div>
        <div className="fourth-container">
          <h5>Our People</h5>
          <h3>Creating a Community for impact</h3>
          <p>
            BTPlanet has grown from 5 people in a coffee shop to over 10,000
            across the globe. With millions of businesses powered by BTPlanet,
            we care deeply about the work we do. We’re constant learners who
            thrive on change and seek to have an impact in everything we do
          </p>
        </div>
        <div className="fifth-container">
          <h5>Learn More About BTPlanet</h5>
          <div className="boxes-container">
            <div className="box1">
              <h4>Customer-Care Services</h4>
              <p>
                Get the help you want with 24/7 support- before, during and
                after your trail
              </p>
              <Link href="/wdwe">Explore Careers</Link>
            </div>
            <div className="box2">
              <h4>Career Opportunities</h4>
              <p>
                Learn how you can have an impact by exploring opportunities at
                BTPlanet
              </p>
              <Link href="/wdwe">Contact Support</Link>
            </div>
            <div className="box3">
              <h4>Press and Media</h4>
              <p>Find press releases, executive team bios, and more.</p>
              <Link href="/wdwe">View Press</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
