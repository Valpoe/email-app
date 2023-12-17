import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Column,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";

export default function WeeklyUpdateEmail(props) {
  const { editValues } = props;

  const {
    title,
    secondTitle,
    description,
    description2,
    linkText,
    linkUrl,
    bodyImage,
    yellowBoxDescription,
    yellowCardsTitle,
    yellowCardDescription,
    yellowCardDescription2,
    blueCardsTitle,
    blueCardDescription,
    blueCardDescription2,
    footerLinkText,
    footerLinkUrl,
  } = editValues;

  return (
    <Html>
      <Head />
      <Preview>Weekly Update</Preview>
      <Body style={main}>
        <Section style={header}>
          <Heading style={heading}>
            <strong>{title}</strong>
          </Heading>
        </Section>
        <Container style={container}>
          <Heading style={heading}>
            <strong>{secondTitle}</strong>
          </Heading>
          <Section style={section}>
            <Text style={text}>{description}</Text>
            <Text style={text}>{description2}</Text>
            <Text style={yourChallenge}>
              💪 <strong>Find out more:</strong>{" "}
              <Link style={blueLink} href={linkUrl} target="_blank">
                {linkText}
              </Link>
            </Text>
            <Img
              src={bodyImage}
              width="100%"
              alt="codepen"
              style={{ marginBottom: 40 }}
            />
          </Section>
          <Text style={yellowSection}>
            <strong>{yellowBoxDescription}</strong>
          </Text>
          <Row style={section}>
            <Column style={ideas}>
              <Text style={ideasTitle}>{yellowCardsTitle}</Text>
              <Section style={yellowCard}>
                🌟
                <Text style={textCard}>{yellowCardDescription}</Text>
              </Section>
              <Section style={yellowCard}>
                🌟
                <Text style={textCard}>{yellowCardDescription2}</Text>
              </Section>
            </Column>
            <Column style={resources}>
              <Text style={resourcesTitle}>{blueCardsTitle}</Text>
              <Section style={blueCard}>
                📖
                <Text style={textCard}>{blueCardDescription}</Text>
              </Section>
              <Section style={blueCard}>
                📖
                <Text style={textCard}>{blueCardDescription2}</Text>
              </Section>
            </Column>
          </Row>
          <Section style={goToChallenge}>
            <Button style={footerButton} pY={15} pX={30} href={footerLinkUrl}>
              {footerLinkText}
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {};

const header = {
  width: "100%",
  backgroundColor: "#191919",
//   marginTop: "-40px",
  zIndex: "999",
  maxWidth: "600px",
};

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  position: "relative",
};

const blueLink = {
  color: "#15c",
  cursor: "pointer",
};

const heading = {
  background: "#f0d361",
  padding: "30px",
  color: "#191919",
  fontWeight: "400",
  marginBottom: "0",
};

const section = {
  margin: "0",
  background: "#fff",
  padding: "0 24px",
};

const yellowSection = {
  background: "#f5d247",
  padding: "30px",
  fontSize: "18px",
  lineHeight: "1.5",
  color: "#191919",
};

const text = {
  fontSize: "16px",
  color: "#191919",
};

const yourChallenge = {
  fontSize: "16px",
  border: "6px solid #ebd473",
  padding: "20px",
  margin: "0 0 40px 0",
  color: "#191919",
};

const resourcesTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  fontSize: "18px",
  color: "#191919",
};

const ideasTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  fontSize: "18px",
  color: "#191919",
};

const ideas = {
  width: "50%",
  paddingRight: "10px",
};

const resources = {
  width: "50%",
};

const card = {
  padding: "20px",
  margin: "0 0 20px 0",
  borderRadius: "10px",
  fontSize: "36px",
  textAlign: "center",
};

const yellowCard = {
  ...card,
  background: "#fff4c8",
  border: "1px solid #f4d247",
  color: "#191919",
};

const blueCard = {
  ...card,
  background: "#d9f6ff",
  border: "1px solid #92bfd0",
  color: "#191919",
};

const textCard = {
  fontSize: "13px",
  textAlign: "left",
};

const goToChallenge = {
  margin: "40px 0 120px 0",
  textAlign: "center",
};

const footerButton = {
  fontSize: "26px",
  color: "#15c",
  background: "#222",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
};
