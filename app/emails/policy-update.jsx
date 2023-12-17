import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function PolicyUpdateEmail(props) {
  const { editValues } = props;
  const {
    companyLogo,
    companyName,
    companyAddress,
    title,
    recipient,
    description,
    description2,
    footerText,
    linkText,
    linkUrl,
  } = editValues;

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingTop: 30 }}>
            <Column>
              <Img
                style={sectionLogo}
                src={companyLogo}
                alt="Company Logo"
              />
            </Column>
          </Section>
          <Section style={paragraphContent}>
            <Hr style={hr} />
            <Text style={heading}>{title}</Text>
            <Text style={paragraph}>Hello {recipient},</Text>
            <Text style={paragraph}>
              We strive to make {companyName} a safe and trusted experience for
              users.
            </Text>
          </Section>
          <Section style={paragraphContent}>
            <Text style={paragraph}>{description}</Text>
          </Section>
          <Section style={paragraphContent}>
            <Text style={paragraph}>{description2}</Text>
            <Hr style={hr} />
          </Section>
          <Section style={paragraphContent}>
            <Text style={paragraph}>Thank you,</Text>
            <Text style={{ ...paragraph, fontSize: "20px" }}>
              {companyName}
            </Text>
          </Section>
          <Section style={containerContact}>
            <Link href={linkUrl} style={link}>
              {linkText}
            </Link>
          </Section>
          <Section
            style={{
              ...paragraphContent,
              paddingBottom: 30,
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                ...paragraph,
                fontSize: "12px",
                textAlign: "center",
                margin: 0,
              }}
            >
              {companyAddress}
            </Text>
            <Hr style={hr} />
            <Text
              style={{
                ...paragraph,
                fontSize: "12px",
                textAlign: "center",
                margin: 0,
              }}
            >
              {footerText}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
};

const sectionLogo = {
  padding: "0 40px",
};

const container = {
  maxWidth: "600px",
  margin: "auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  // overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px", // Reduce padding for content sections
  maxWidth: "100%", // Ensure content does not overflow container
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const link = {
  ...paragraph,
  color: "#004dcf",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};
