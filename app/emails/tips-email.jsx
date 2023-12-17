import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";

export default function TipsEmail(props) {
  const { editValues } = props;
  const {
    companyLogo,
    title,
    subtitle,
    firstHeading,
    description,
    secondHeading,
    secondDescription,
    thirdDescription,
    footerHeading,
    footerLinkText,
    footerLinkUrl,
    companyName,
    companyAddress,
  } = editValues;

  return (
    <Html>
      <Head />
      <Preview>Tips and Tricks</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img src={companyLogo} />
          </Section>
          <Row style={header}>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>{title}</Heading>
              <Text style={headerContentSubtitle}>{subtitle}</Text>
            </Column>
            <Column style={headerImageContainer}>
              <Img style={{ opacity: 0.8, borderRadius: 5 }} width={340} src="/images/tips-and-tricks-header.jpg" />
            </Column>
          </Row>

          <Section style={content}>
            <Heading as="h2" style={titleText}>
              {firstHeading}
            </Heading>
            <Text style={paragraph}>{description} </Text>

            <Hr style={divider} />

            <Heading as="h2" style={titleText}>
              {secondHeading}
            </Heading>
            <Text style={paragraph}>{secondDescription}</Text>

            <Text style={paragraph}>{thirdDescription}</Text>

            <Hr style={divider} />

            <Heading as="h2" style={titleText}>
              {footerHeading}
            </Heading>

            <Section style={buttonContainer}>
              <Link style={button} href={footerLinkUrl}>
                {footerLinkText}
              </Link>
            </Section>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={footerText}>
            You're receiving this email because your activity triggered this tip
            or reminder.
          </Text>

          <Hr style={footerDivider} />

          <Text style={footerAddress}>
            <strong>{companyName}</strong>, {companyAddress}
          </Text>
          <Text style={footerHeart}>{"<3"}</Text>
        </Section>
      </Body>
    </Html>
  );
}

const main = {
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};

const headerContentSubtitle = {
  color: "#fff",
  fontSize: "17px",
};

const headerImageContainer = {
  padding: "30px 10px",
};

const titleText = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};

const divider = {
  margin: "30px 0",
};

const container = {
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
};

const footer = {
  width: "600px",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const logo = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};

const header = {
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "#2b2d6e",
};

const buttonContainer = {
  marginTop: "24px",
  display: "block",
};

const button = {
  backgroundColor: "#0095ff",
  border: "1px solid #0077cc",
  fontSize: "17px",
  lineHeight: "17px",
  padding: "13px 17px",
  borderRadius: "4px",
  maxWidth: "120px",
  color: "#fff",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas,monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};
