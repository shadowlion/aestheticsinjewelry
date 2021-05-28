import Head from "next/head";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services | Ballroom East</title>
        <meta name="description" content="Ballroom East Dance Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="container py-5">
        <h1 className="text-center pb-3">Services Provided</h1>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Card>
            <Card.Header>
              <Nav variant="pills" className="nav-fill">
                <Nav.Item>
                  <Nav.Link eventKey="first">Repairs (w/lasers)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Repairs (non-laser)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Custom Designs/Engravings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Replacement/Appraisals</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Container className="py-3">
                  <Card.Title>Ring Resizing</Card.Title>
                  <Card.Text>
                    We adjust the size of your ring to fit properly. Even
                    eternity bands with stones all of the way around can be
                    sized. For customers with enlarged knuckles or those with
                    fluctuating swelling problems we offer a number of solutions
                    for a proper comfortable fit.
                  </Card.Text>

                  <Card.Title>Prong Retipping</Card.Title>
                  <Card.Text>
                    If you are snagging clothing, have a bent prong or loose
                    stone we can advise you during your semi-annual checkup of
                    the necessary action to fix it. It could involve tightening
                    a stone, retipping, repronging or replacing a head.
                  </Card.Text>

                  <Card.Title>Chain & Bracelet Repair</Card.Title>
                  <Card.Text>
                    We size bangles, up or down. Remove dents, engraving and
                    scratches. Adjust, repair or replace catches, hinges or
                    safeties. We can also, engrave, overlay, pierce designs or
                    pave with stones.
                  </Card.Text>
                  <Card.Title>Eye Glass Repair</Card.Title>
                  <Card.Text>
                    We do laser welding of metal rim glasses.
                  </Card.Text>
                  <Card.Title>Silver Flatware Repair</Card.Title>
                  <Card.Text>
                    If your flatware was chewed up in garbage disposal or
                    broken, loose or separated from its handle, we can repair it
                    like new.
                  </Card.Text>
                  <Card.Title>Silver Holloware Repair</Card.Title>
                  <Card.Text>
                    If your hollowware has missing parts we can duplicate them.
                    We also remove dents and engraving. We can add new
                    insulators on coffee, tea or chocolate pot handles installed
                    with exotic wood or ivory.
                  </Card.Text>
                  <Card.Title>Costume Jewelry Repair</Card.Title>
                  <Card.Text>
                    We can do all types of repairs and stone replacements for
                    costume jewelry. Each piece will need to be reviewed to
                    determine the options and pricing.
                  </Card.Text>
                  <Card.Title>Necklaces or Bracelets</Card.Title>
                  <Card.Text>
                    We can repair Link, Hinged, Mesh and Stone pieces. Lengthen
                    and shorten or make adjustable. We also can reinforce,
                    repair or replace links, catches and hinges and install
                    safety catches.
                  </Card.Text>
                  <Card.Title>Semi-Annual Inspection</Card.Title>
                  <Card.Text>
                    We recommend periodic cleaning and checking all of your
                    jewelry to keep it looking good, prevent losing stones and
                    to advise you of any repairs needed. If you notice any
                    irregularities, like catching in clothing, broken or missing
                    stones, or bent shank, then it's time to visit Aesthetics In
                    Jewelry.
                  </Card.Text>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Container className="py-3">
                  <Card.Title>Pearl or Bead Restringing</Card.Title>

                  <Card.Text>
                    We can match, lengthen, shorten or redesign. We can replace
                    a clasp or repair clasps. We also clean and offer Pearl
                    repair, replacement and matching.
                  </Card.Text>

                  <Card.Text>
                    Knotted on silk, color thread or tiger tail. We also do
                    complex pattern and seed pearl stringing.
                  </Card.Text>

                  <Card.Title>Retreat Stones</Card.Title>

                  <Card.Text>
                    Many precious stones are treated to improve appearance by
                    oiling, waxing or Excel treatment. Waxing and oiling
                    periodically will need to be redone as it is removed during
                    normal cleaning procedures. Excel is a permanent treatment
                    and jewelry can be cleaned without disturbing the process,
                    however it can be removed if desired.
                  </Card.Text>

                  <Card.Title>Recut Stones</Card.Title>

                  <Card.Text>
                    There is nothing worse than a broken or damaged stone.
                    Damaged stones should be brought in for assessment so we can
                    best advise you which direction to take. This would be a
                    choice repair, total recut or reshaping.
                  </Card.Text>

                  <Card.Title>Repolish Stones</Card.Title>

                  <Card.Text>
                    That are scratched, abraided or chemically damaged.
                  </Card.Text>

                  <Card.Title>Polish Jewelry</Card.Title>

                  <Card.Text>
                    We can lightly polish or completely refinish.
                  </Card.Text>

                  <Card.Title>Polish Silverware</Card.Title>

                  <Card.Text>
                    We can highlight, lightly polish or completely refinish.
                  </Card.Text>

                  <Card.Title>Enameling</Card.Title>

                  <Card.Text>
                    We offer Champleve and Cloisonne repair. We use UV light
                    activated enamels that are used by dentists. We can either
                    repair or replace the enamel.
                  </Card.Text>

                  <Card.Title>Stonecutting</Card.Title>

                  <Card.Text>
                    We can repolish, recut and treat stones. We work with both
                    cabochon and faceted stones. We also offer stone engraving,
                    cameo repair and inlay replacement and cameo repairs
                    including nose jobs.
                  </Card.Text>

                  <Card.Title>Semi-Annual Inspection</Card.Title>

                  <Card.Text>
                    We recommend periodic cleaning and checking all of your
                    jewelry to keep it looking good, prevent losing stones and
                    to advise you of any repairs needed. If you notice any
                    irregularities, like catching in clothing, broken or missing
                    stones, or bent shank, then it's time to visit Aesthetics In
                    Jewelry.
                  </Card.Text>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Container className="py-3">
                  <Card.Title>Custom Design Services</Card.Title>
                  <ul>
                    <li>
                      Computer Generated (CAD Cam, Milling and 3D Printing)
                    </li>
                    <li>Modification Services (existing designs)</li>
                    <li>Casting (Gold, Silver and Platinum, Lost Wax)</li>
                    <li>Hand-wrought designs (using laser technology)</li>
                  </ul>

                  <Card.Title>Custom Engraving Services</Card.Title>
                  <ul>
                    <li>By hand</li>
                    <li>By machine</li>
                    <li>Computer Generated</li>
                  </ul>

                  <Card.Title>Custom Designs and Engravings For:</Card.Title>
                  <ul>
                    <li>Signet Rings</li>
                    <li>Inside Rings</li>
                    <li>Family Crests</li>
                    <li>Glass (engraving)</li>
                    <li>Stone (engraving)</li>
                  </ul>

                  <Card.Title>Semi-Annual Inspection</Card.Title>
                  <Card.Text>
                    We recommend periodic cleaning and checking all of your
                    jewelry to keep it looking good, prevent losing stones and
                    to advise you of any repairs needed. If you notice any
                    irregularities, like catching in clothing, broken or missing
                    stones, or bent shank, then it's time to visit Aesthetics In
                    Jewelry.
                  </Card.Text>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Container className="py-3">
                  <Card.Title>Replacements</Card.Title>
                  <ul>
                    <li>Total Piece Replacement</li>
                    <li>Stone Replacement</li>
                  </ul>

                  <Card.Title>Appraisals</Card.Title>
                  <ul>
                    <li>Insurance</li>
                    <li>Estate</li>
                  </ul>

                  <Card.Title>Semi-Annual Inspection</Card.Title>
                  <Card.Text>
                    We recommend periodic cleaning and checking all of your
                    jewelry to keep it looking good, prevent losing stones and
                    to advise you of any repairs needed. If you notice any
                    irregularities, like catching in clothing, broken or missing
                    stones, or bent shank, then it's time to visit Aesthetics In
                    Jewelry.
                  </Card.Text>

                  <Card.Title>Free Appraisals</Card.Title>
                  <Card.Text>
                    Included with some newly purchased items.
                  </Card.Text>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Card>
        </Tab.Container>
      </article>
    </>
  );
};

export default ServicesPage;
