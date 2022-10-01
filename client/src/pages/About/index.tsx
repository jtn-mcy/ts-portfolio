import React from "react";
import styles from "./index.module.scss";
import {
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Carousel,
  Tooltip,
  Image,
  Spin,
} from "antd";
import { me1, me2, me3, me4, svgs } from "../../assets/images";

const { Title, Paragraph, Link, Text } = Typography;
const { Grid } = Card;

const PfpCarousel: React.FC = () => {
  const ContentStyle = { width: "100%", height: "100%" };
  return (
    <Carousel autoplay>
      <div>
        <Image
          placeholder={<Spin />}
          preview={false}
          style={ContentStyle}
          alt="pfp"
          src={me1}
        />
      </div>
      <div>
        <Image
          placeholder={<Spin />}
          preview={false}
          style={ContentStyle}
          alt="pfp"
          src={me2}
        />
      </div>
      <div>
        <Image
          placeholder={<Spin />}
          preview={false}
          style={ContentStyle}
          alt="pfp"
          src={me3}
        />
      </div>
      <div>
        <Image
          placeholder={<Spin />}
          preview={false}
          style={ContentStyle}
          alt="pfp"
          src={me4}
        />
      </div>
    </Carousel>
  );
};

const About: React.FC = () => {
  return (
    <div className={styles.CenterCard}>
      <Row gutter={32} style={{ height: "100%", margin: 0, overflowY: "auto" }}>
        <Col span={8} style={{ padding: "8px" }}>
          <Card cover={<PfpCarousel />}>
            <Card bordered={false}>
              {svgs.skills &&
                Object.entries(svgs.skills).map(([name, svg]) => {
                  return (
                    <Grid key={name} className={styles.Grid}>
                      <Tooltip title={name}>
                        <Image
                          placeholder={<Spin />}
                          preview={false}
                          alt={name}
                          src={svg}
                        />
                      </Tooltip>
                    </Grid>
                  );
                })}
            </Card>
          </Card>
        </Col>
        <Col span={16} style={{ padding: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={1} style={{ margin: "0 0 15px 0" }}>
              {" "}
              Johnny Nguyen
            </Title>
            <Title level={3} style={{ margin: "0 0 15px 0" }}>
              {" "}
              ⬆️ My socials!
            </Title>
          </div>
          <Title level={3}> Current position </Title>
          <Paragraph>
            I am formerly a front-end engineer for{" "}
            <Link
              className={styles.Link}
              target="_blank"
              href="http://www.kernel.com"
            >
              Kernel
            </Link>{" "}
            and currently a part time teaching assistant for{" "}
            <Link
              className={styles.Link}
              target="_blank"
              href="https://bootcamp.berkeley.edu/coding/"
            >
              UC Berkeley Extension Coding Boot Camp
            </Link>
            . Open for new opportunities as a front-end/UI/UX developer!
          </Paragraph>
          <Divider />
          <Title level={3}>My Story</Title>
          <Paragraph>
            I was born in the Bay Area where my journey took me through several
            career prospects--I graduated at San Jose State University with a
            chemistry degree before moving on to pharmacy school in Albany, NY.
            I graduated and became a licensed pharmacist in Nevada and Oregon.
            While I enjoyed interacting and helping patients through my
            internships, I felt a strong passion to build something in tech.
            Perhaps it was my roots in Silicon Valley calling me? In 2021, I
            dabbled in coding and eventually entered a program at UC Berkeley
            Extension Boot Camp for Web Development. I graduated and worked as a
            teaching assistant to help others learn programming.
          </Paragraph>
          <Paragraph>
            Over the next three months in the winter of 2021/22, I would
            eventually find myself as a UI/UX Engineer at Kernel where I hit the
            ground running learning git processes, refining my React skills,
            writing TypeScript, making meaningful changes to both Kernel's
            in-house portal application used by researchers and study
            administrators, and modifying the marketing website to interface
            with AWS so participants could easily sign up for studies. I worked
            at Kernel for a quarter of the year until I was eventually let go as
            the company downsized. Startup life! The search for another great
            opportunity continues...
          </Paragraph>
          <Paragraph>
            And so it continued for around 50 days! I received an offer from
            Indeed, known for their job board website that helps people get jobs
            and companies obtain the best talent. As a UX developer, I would go
            on to maintain Indeed.Design which showcases their brand and design
            system, starting in August of 2022.
          </Paragraph>
          <Paragraph>
            My current hobbies include rock climbing, working out, playing
            piano, watching Twitch streams (mostly Dota2 and Starcraft), and
            leaving Hololive in the background while I work. I love listening to
            music and love new suggestions!
          </Paragraph>
          <Divider />
          <Title level={3}>Contact me:</Title>
          <Paragraph>
            I am available for conversation through{" "}
            <Link
              target="_blank"
              className={styles.Link}
              href="https://www.linkedin.com/in/johnny-truc-nguyen/"
            >
              LinkedIn
            </Link>
            , my email <Text type="success">johnnytrucnguyen@gmail.com </Text>
            and by phone <Text type="success">408-641-5559</Text>. This
            portfolio repo is hosted at{" "}
            <Link
              target="_blank"
              className={styles.Link}
              href="https://github.com/NguyenJohnnyT/ts-portfolio"
            >
              GitHub
            </Link>
            .
            <br />
            <br />
            Checkout my socials on the top right!
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default About;
